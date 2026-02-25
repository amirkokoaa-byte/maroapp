import React, { useState, useMemo } from 'react';
import { apps } from './data/apps';
import { CategoryGroup } from './components/CategoryGroup';
import { Clock } from './components/Clock';
import { AppData } from './types';
import { Search, Globe, Download, X, AlertTriangle, CheckSquare, Square } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [selectedAppIds, setSelectedAppIds] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [showPopupWarning, setShowPopupWarning] = useState(false);

  // Group apps by category
  const groupedApps = useMemo(() => {
    const filtered = apps.filter(app => 
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const groups: Record<string, AppData[]> = {};
    filtered.forEach(app => {
      if (!groups[app.category]) {
        groups[app.category] = [];
      }
      groups[app.category].push(app);
    });
    return groups;
  }, [searchQuery]);

  const toggleApp = (id: string) => {
    setSelectedAppIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleDownload = () => {
    const selectedApps = apps.filter(app => selectedAppIds.has(app.id));
    
    // TODO: Firebase Analytics - logToFirestore(selectedAppIds)
    // Example: logEvent('download_initiated', { apps: Array.from(selectedAppIds) });
    console.log('Analytics: Download initiated for', Array.from(selectedAppIds));

    let blocked = false;

    // Open each URL in a new tab with a delay to prevent popup blocking
    selectedApps.forEach((app, index) => {
      setTimeout(() => {
        // Determine the best URL to use
        let url = app.officialDownloadUrl;
        
        // For OS, prefer x64 if available
        if (app.category === 'Operating Systems' && app.downloadUrls) {
          if (app.downloadUrls.x64) {
            url = app.downloadUrls.x64;
          } else if (app.downloadUrls.x86) {
            url = app.downloadUrls.x86;
          }
        }

        const newWindow = window.open(url, '_blank');
        
        // Check if the popup was blocked
        if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
          blocked = true;
          setShowPopupWarning(true);
        }
      }, index * 800); // 800ms delay between each download
    });

    // Fallback check if the first one was blocked immediately
    if (blocked) {
      setShowPopupWarning(true);
    }
  };

  const clearSelection = () => {
    setSelectedAppIds(new Set());
  };

  const selectAllVisible = () => {
    const visibleAppIds = Object.values(groupedApps).flat().map(app => app.id);
    setSelectedAppIds(new Set(visibleAppIds));
  };

  // Separate Operating Systems from other categories
  const win11 = groupedApps['Windows 11'];
  const win10 = groupedApps['Windows 10'];
  const win81 = groupedApps['Windows 8.1'];
  const win7 = groupedApps['Windows 7'];
  const winVista = groupedApps['Windows Vista'];
  const winServer = groupedApps['Windows Server'];
  const classicOsCategory = groupedApps['Classic Windows'];
  const officeCategory = groupedApps['Microsoft Office'];
  
  const otherCategories = Object.entries(groupedApps).filter(([cat]) => 
    !cat.startsWith('Windows') && 
    cat !== 'Classic Windows' && 
    cat !== 'Microsoft Office'
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900" dir="rtl">
      {/* Popup Warning Toast */}
      <AnimatePresence>
        {showPopupWarning && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-lg px-4"
          >
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded shadow-lg flex items-start">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
              </div>
              <div className="mr-3 flex-1">
                <p className="text-sm text-amber-700 font-medium">
                  ⚠️ يرجى السماح بالنوافذ المنبثقة (Pop-ups) لهذا الموقع لتحميل تطبيقات متعددة في وقت واحد.
                </p>
              </div>
              <button 
                onClick={() => setShowPopupWarning(false)}
                className="mr-auto text-amber-500 hover:text-amber-700"
              >
                <X size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center space-x-2 flex-shrink-0">
            <div className="bg-indigo-600 p-1.5 rounded-lg">
              <Globe className="text-white" size={20} />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-gray-900 hidden sm:block mr-2">
              دليل البرامج
            </h1>
          </div>
          
          <div className="relative w-full max-w-xl">
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pr-10 pl-3 py-2 border border-gray-300 rounded-lg leading-5 bg-gray-50/50 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
              placeholder="ابحث عن البرامج (مثل Chrome, Zoom)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-4 flex-shrink-0 text-sm">
             <button 
              onClick={selectAllVisible}
              className="hidden md:flex items-center text-gray-600 hover:text-indigo-600 transition-colors px-2 py-1 rounded hover:bg-gray-100"
              title="تحديد الكل"
            >
              <CheckSquare size={16} className="ml-1" />
              <span className="hidden lg:inline">تحديد الكل</span>
            </button>
            <button 
              onClick={clearSelection}
              className="hidden md:flex items-center text-gray-600 hover:text-red-600 transition-colors px-2 py-1 rounded hover:bg-gray-100"
              title="إلغاء التحديد"
              disabled={selectedAppIds.size === 0}
            >
              <Square size={16} className="ml-1" />
              <span className="hidden lg:inline">مسح</span>
            </button>
            
            <div className="hidden lg:block border-r border-gray-200 pr-4 mr-2">
              <Clock />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-32">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            اختر برامجك المفضلة
          </h2>
          <p className="mt-2 text-lg text-gray-500">
            حدد التطبيقات التي تريدها، ثم اضغط على زر التحميل في الأسفل.
          </p>
        </div>

        {/* Windows Versions Sections */}
        {win11 && win11.length > 0 && (
          <div className="mb-8">
            <CategoryGroup title="Windows 11" apps={win11} selectedAppIds={selectedAppIds} onToggle={toggleApp} />
          </div>
        )}
        {win10 && win10.length > 0 && (
          <div className="mb-8">
            <CategoryGroup title="Windows 10" apps={win10} selectedAppIds={selectedAppIds} onToggle={toggleApp} />
          </div>
        )}
        {win81 && win81.length > 0 && (
          <div className="mb-8">
            <CategoryGroup title="Windows 8.1" apps={win81} selectedAppIds={selectedAppIds} onToggle={toggleApp} />
          </div>
        )}
        {win7 && win7.length > 0 && (
          <div className="mb-8">
            <CategoryGroup title="Windows 7" apps={win7} selectedAppIds={selectedAppIds} onToggle={toggleApp} />
          </div>
        )}
        {winVista && winVista.length > 0 && (
          <div className="mb-8">
            <CategoryGroup title="Windows Vista" apps={winVista} selectedAppIds={selectedAppIds} onToggle={toggleApp} />
          </div>
        )}
        {winServer && winServer.length > 0 && (
          <div className="mb-8">
            <CategoryGroup title="Windows Server" apps={winServer} selectedAppIds={selectedAppIds} onToggle={toggleApp} />
          </div>
        )}

        {/* Microsoft Office Section (Full Width) */}
        {officeCategory && officeCategory.length > 0 && (
          <div className="mb-8">
            <CategoryGroup
              title="Microsoft Office"
              apps={officeCategory}
              selectedAppIds={selectedAppIds}
              onToggle={toggleApp}
            />
          </div>
        )}

        {/* Classic Windows Section (Full Width) */}
        {classicOsCategory && classicOsCategory.length > 0 && (
          <div className="mb-8">
            <CategoryGroup
              title="Classic Windows"
              apps={classicOsCategory}
              selectedAppIds={selectedAppIds}
              onToggle={toggleApp}
            />
          </div>
        )}

        {/* Masonry Grid Layout for other categories */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {otherCategories.map(([category, categoryApps]) => (
            <CategoryGroup
              key={category}
              title={category}
              apps={categoryApps}
              selectedAppIds={selectedAppIds}
              onToggle={toggleApp}
            />
          ))}
        </div>
        
        {Object.keys(groupedApps).length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">لم يتم العثور على نتائج لـ "{searchQuery}"</p>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-4 text-indigo-600 hover:text-indigo-500 font-medium hover:underline"
            >
              مسح البحث
            </button>
          </div>
        )}
      </main>

      {/* Sticky Download Button (Glassmorphism) */}
      <AnimatePresence>
        {selectedAppIds.size > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center gap-2 w-full max-w-md px-4"
          >
            <div className="bg-gray-900/90 backdrop-blur-md text-white rounded-xl shadow-2xl p-2 flex items-center justify-between w-full border border-gray-700/50">
              <div className="flex items-center px-4">
                <span className="bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full ml-3 shadow-sm">
                  {selectedAppIds.size}
                </span>
                <span className="text-sm font-medium">تطبيق محدد</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={clearSelection}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  title="إلغاء التحديد"
                >
                  <X size={18} />
                </button>
                <button
                  onClick={handleDownload}
                  className="flex items-center bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-lg font-bold transition-all shadow-lg hover:shadow-indigo-500/30 active:scale-95"
                >
                  <Download size={18} className="ml-2" />
                  تحميل المحدد
                </button>
              </div>
            </div>
            <p className="text-xs text-gray-600 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full shadow-sm border border-white/20">
              سيتم فتح {selectedAppIds.size} نوافذ للتحميل
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p className="font-medium">مع تحيات المطور Amir Lamay</p>
          <p className="mt-2 text-xs text-gray-400">&copy; {new Date().getFullYear()} دليل البرامج. جميع الروابط تحولك إلى المواقع الرسمية للمطورين.</p>
        </div>
      </footer>
    </div>
  );
}
