import React, { useState, useMemo } from 'react';
import { apps } from './data/apps';
import { androidApps } from './data/androidApps';
import { CategoryGroup } from './components/CategoryGroup';
import { Clock } from './components/Clock';
import { Sidebar } from './components/Sidebar';
import { AndroidAppCard } from './components/AndroidAppCard';
import { AppData } from './types';
import { Search, Globe, Download, X, AlertTriangle, CheckSquare, Square, HardDrive, Moon, Sun, FileCode, Languages, Smartphone, Monitor, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// UI Translations
const uiTranslations = {
  ar: {
    title: "دليل البرامج",
    searchPlaceholder: "ابحث عن البرامج (مثل Chrome, Zoom)...",
    selectAll: "تحديد الكل",
    clear: "مسح",
    selectApps: "اختر برامجك المفضلة",
    selectAppsDesc: "حدد التطبيقات التي تريدها، ثم اضغط على زر التحميل في الأسفل.",
    legalNote: "ملاحظة قانونية:",
    legalText: "جميع روابط أنظمة التشغيل تعيد التوجيه إلى خوادم مايكروسوفت الرسمية أو أرشيفات موثوقة. الصور الأصلية غير معدلة. يتطلب التثبيت والتنشيط مفتاح منتج صالح.",
    osTitle: "أنظمة التشغيل (Operating Systems)",
    all: "الكل",
    noResults: 'لم يتم العثور على نتائج لـ "{query}"',
    clearSearch: "مسح البحث",
    selected: "تطبيق محدد",
    downloadSelected: "تحميل المحدد",
    generateScript: "إنشاء سكربت تثبيت",
    openingWindows: "سيتم فتح {count} نوافذ للتحميل",
    footerDev: "مع تحيات المطور Amir Lamay",
    footerCopy: "دليل البرامج. جميع الروابط تحولك إلى المواقع الرسمية للمطورين.",
    popupWarning: "يرجى السماح بالنوافذ المنبثقة (Pop-ups) لهذا الموقع لتحميل تطبيقات متعددة في وقت واحد.",
    usbTitle: "إنشاء قرص إقلاع USB؟",
    usbDesc: "نوصي بإضافة Rufus أو Ventoy إلى قائمة التحميل.",
    addRufus: "إضافة Rufus",
    scriptToastTitle: "تم إنشاء السكربت!",
    scriptToastDesc: "ضع هذا الملف في نفس المجلد مع البرامج المحملة، وشغله كمسؤول (Run as Administrator) للتثبيت التلقائي.",
    windowsMode: "برامج الكمبيوتر",
    androidMode: "عالم الأندرويد",
  },
  en: {
    title: "Software Directory",
    searchPlaceholder: "Search for apps (e.g. Chrome, Zoom)...",
    selectAll: "Select All",
    clear: "Clear",
    selectApps: "Choose Your Favorite Apps",
    selectAppsDesc: "Select the applications you want, then click the download button below.",
    legalNote: "Legal Note:",
    legalText: "All OS links redirect to official Microsoft servers or verified archives. Original images unmodified. A valid product key is required for installation and activation.",
    osTitle: "Operating Systems",
    all: "All",
    noResults: 'No results found for "{query}"',
    clearSearch: "Clear Search",
    selected: "Selected",
    downloadSelected: "Download Selected",
    generateScript: "Auto-Install Script",
    openingWindows: "Opening {count} download windows",
    footerDev: "Developed by Amir Lamay",
    footerCopy: "Software Directory. All links redirect to official developer sites.",
    popupWarning: "Please allow Pop-ups for this site to download multiple applications simultaneously.",
    usbTitle: "Create Bootable USB?",
    usbDesc: "We recommend adding Rufus or Ventoy to your downloads.",
    addRufus: "Add Rufus",
    scriptToastTitle: "Script Generated!",
    scriptToastDesc: "Place this file in the same folder as your downloaded apps, and Run as Administrator to auto-install.",
    windowsMode: "PC Software",
    androidMode: "Android World",
  }
};

export default function App() {
  const [selectedAppIds, setSelectedAppIds] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [showPopupWarning, setShowPopupWarning] = useState(false);
  const [showUsbSuggestion, setShowUsbSuggestion] = useState(false);
  const [showScriptToast, setShowScriptToast] = useState(false);
  
  // View Mode: 'windows' or 'android'
  const [viewMode, setViewMode] = useState<'windows' | 'android'>('windows');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [androidCategory, setAndroidCategory] = useState('All');

  // Settings
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  const t = uiTranslations[language];

  // Apply Dark Mode & Direction
  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  React.useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  // Placeholder for Versioning API
  /*
  React.useEffect(() => {
    const fetchVersions = async () => {
      try {
        // const response = await fetch('https://api.example.com/versions');
        // const data = await response.json();
        // updateAppsWithVersions(data);
      } catch (error) {
        console.error('Failed to fetch versions', error);
      }
    };
    fetchVersions();
  }, []);
  */

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
        
        // Check if the added app is a Windows OS
        const app = apps.find(a => a.id === id);
        if (app && (app.category.startsWith('Windows') || app.category === 'Classic Windows')) {
          checkAndShowUsbSuggestion(next);
        }
      }
      return next;
    });
  };

  const checkAndShowUsbSuggestion = (currentSelection: Set<string>) => {
    // Check if Rufus or Ventoy are already selected
    const hasRufus = currentSelection.has('rufus');
    const hasVentoy = currentSelection.has('ventoy');

    if (!hasRufus && !hasVentoy) {
      setShowUsbSuggestion(true);
      // Hide after 10 seconds automatically
      setTimeout(() => setShowUsbSuggestion(false), 10000);
    }
  };

  const addRufus = () => {
    setSelectedAppIds(prev => {
      const next = new Set(prev);
      const rufusApp = apps.find(a => a.id === 'rufus');
      if (rufusApp) {
        next.add(rufusApp.id);
      }
      return next;
    });
    setShowUsbSuggestion(false);
  };

  const handleAppDownload = (app: AppData) => {
    if (app.category.startsWith('Windows') || app.category === 'Classic Windows') {
      checkAndShowUsbSuggestion(selectedAppIds);
    }
  };

  const generateScript = () => {
    const selectedApps = apps.filter(app => selectedAppIds.has(app.id));
    let scriptContent = `@echo off\r\n`;
    scriptContent += `:: Auto-Install Script generated by Software Directory\r\n`;
    scriptContent += `:: Run as Administrator\r\n\r\n`;
    scriptContent += `echo Starting installation of ${selectedApps.length} applications...\r\n\r\n`;

    selectedApps.forEach(app => {
      if (app.silentArgs) {
        scriptContent += `echo Installing ${app.name}...\r\n`;
        // Simple heuristic: try to match filename by app name parts
        // This is a "best effort" script since we don't know exact filenames
        const nameParts = app.name.split(' ')[0];
        scriptContent += `for %%f in ("*${nameParts}*.exe" "*${nameParts}*.msi") do start /wait "" "%%f" ${app.silentArgs}\r\n`;
      } else {
        scriptContent += `echo Warning: No silent args found for ${app.name}. Manual install required.\r\n`;
      }
    });

    scriptContent += `\r\necho All done!\r\npause`;

    const blob = new Blob([scriptContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'install_apps.bat';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    setShowScriptToast(true);
    setTimeout(() => setShowScriptToast(false), 8000);
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

  const [osFilter, setOsFilter] = useState<'All' | 'Client' | 'Server' | 'Legacy'>('All');

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

  const renderOsSection = () => {
    const showClient = osFilter === 'All' || osFilter === 'Client';
    const showServer = osFilter === 'All' || osFilter === 'Server';
    const showLegacy = osFilter === 'All' || osFilter === 'Legacy';

    const hasOsApps = (win11 || win10 || win81 || win7 || winVista || winServer);

    if (!hasOsApps) return null;

    return (
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className={`text-xl font-bold flex items-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <span className="w-1.5 h-6 rounded-full ml-2 bg-blue-600"></span>
            {t.osTitle}
          </h2>
          
          <div className={`flex p-1 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-200/80'}`}>
            {(['All', 'Client', 'Server', 'Legacy'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setOsFilter(filter)}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                  osFilter === filter 
                    ? (darkMode ? 'bg-gray-700 text-blue-400 shadow-sm' : 'bg-white text-blue-700 shadow-sm')
                    : (darkMode ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-300/50')
                }`}
              >
                {t[filter.toLowerCase() as keyof typeof t] || filter}
              </button>
            ))}
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className={`mb-6 border rounded-lg p-4 text-sm flex items-start gap-2 ${darkMode ? 'bg-blue-900/20 border-blue-800 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-800'}`}>
          <AlertTriangle className="w-5 h-5 flex-shrink-0 text-blue-600" />
          <p>
            <strong>{t.legalNote}</strong> {t.legalText}
          </p>
        </div>

        {showClient && win11 && win11.length > 0 && (
          <CategoryGroup title="Windows 11" apps={win11} selectedAppIds={selectedAppIds} onToggle={toggleApp} onDownload={handleAppDownload} />
        )}
        {showClient && win10 && win10.length > 0 && (
          <CategoryGroup title="Windows 10" apps={win10} selectedAppIds={selectedAppIds} onToggle={toggleApp} onDownload={handleAppDownload} />
        )}
        {showClient && win7 && win7.length > 0 && (
          <CategoryGroup title="Windows 7" apps={win7} selectedAppIds={selectedAppIds} onToggle={toggleApp} onDownload={handleAppDownload} />
        )}
        
        {showLegacy && win81 && win81.length > 0 && (
          <CategoryGroup title="Windows 8.1" apps={win81} selectedAppIds={selectedAppIds} onToggle={toggleApp} onDownload={handleAppDownload} />
        )}
        {showLegacy && winVista && winVista.length > 0 && (
          <CategoryGroup title="Windows Vista" apps={winVista} selectedAppIds={selectedAppIds} onToggle={toggleApp} onDownload={handleAppDownload} />
        )}
        
        {showServer && winServer && winServer.length > 0 && (
          <CategoryGroup title="Windows Server" apps={winServer} selectedAppIds={selectedAppIds} onToggle={toggleApp} onDownload={handleAppDownload} />
        )}
      </div>
    );
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-200 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
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
                  ⚠️ {t.popupWarning}
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

        {/* Script Generated Toast */}
        {showScriptToast && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4"
          >
            <div className={`${darkMode ? 'bg-gray-800 border-green-700' : 'bg-white border-green-200'} border p-4 rounded-lg shadow-xl flex items-center gap-3`}>
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <FileCode size={24} />
              </div>
              <div className="flex-1">
                <h4 className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{t.scriptToastTitle}</h4>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{t.scriptToastDesc}</p>
              </div>
              <button 
                onClick={() => setShowScriptToast(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </button>
            </div>
          </motion.div>
        )}

        {/* USB Suggestion Toast */}
        {showUsbSuggestion && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4"
          >
            <div className={`${darkMode ? 'bg-gray-800 border-blue-700' : 'bg-white border-blue-200'} border p-4 rounded-lg shadow-xl flex items-center gap-3`}>
              <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                <HardDrive size={24} />
              </div>
              <div className="flex-1">
                <h4 className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{t.usbTitle}</h4>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{t.usbDesc}</p>
              </div>
              <button 
                onClick={addRufus}
                className="bg-blue-600 text-white text-xs px-3 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                {t.addRufus}
              </button>
              <button 
                onClick={() => setShowUsbSuggestion(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Header */}
      <header className={`backdrop-blur-md border-b sticky top-0 z-40 shadow-sm transition-all ${darkMode ? 'bg-gray-900/90 border-gray-800' : 'bg-white/90 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center space-x-2 flex-shrink-0">
            {/* Mobile Sidebar Toggle (Android Mode Only) */}
            {viewMode === 'android' && (
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 -ml-2 text-gray-600 dark:text-gray-300"
              >
                <Menu size={24} />
              </button>
            )}

            <div className={`p-1.5 rounded-lg ${viewMode === 'android' ? 'bg-green-600' : 'bg-indigo-600'}`}>
              {viewMode === 'android' ? <Smartphone className="text-white" size={20} /> : <Globe className="text-white" size={20} />}
            </div>
            <h1 className={`text-xl font-bold tracking-tight hidden sm:block mr-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {t.title}
            </h1>
          </div>
          
          {/* View Mode Switcher (Desktop) */}
          <div className="hidden md:flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
            <button
              onClick={() => setViewMode('windows')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                viewMode === 'windows' 
                  ? 'bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 shadow-sm' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              <Monitor size={16} />
              <span>{t.windowsMode}</span>
            </button>
            <button
              onClick={() => setViewMode('android')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                viewMode === 'android' 
                  ? 'bg-white dark:bg-gray-700 text-green-600 dark:text-green-400 shadow-sm' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              <Smartphone size={16} />
              <span>{t.androidMode}</span>
            </button>
          </div>

          <div className="relative w-full max-w-xs sm:max-w-md">
            <div className={`absolute inset-y-0 ${language === 'ar' ? 'right-0 pr-3' : 'left-0 pl-3'} flex items-center pointer-events-none`}>
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              className={`block w-full py-2 border rounded-lg leading-5 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out
                ${language === 'ar' ? 'pr-10 pl-3' : 'pl-10 pr-3'}
                ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:bg-gray-700' : 'bg-gray-50/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:bg-white'}
              `}
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 flex-shrink-0 text-sm">
             {/* Dark Mode Toggle */}
             <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${darkMode ? 'text-yellow-400 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'}`}
              title={darkMode ? 'Light Mode' : 'Dark Mode'}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className={`p-2 rounded-lg transition-colors flex items-center gap-1 ${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'}`}
              title="Switch Language"
            >
              <Languages size={20} />
              <span className="text-xs font-bold">{language === 'ar' ? 'EN' : 'عربي'}</span>
            </button>

             {viewMode === 'windows' && (
               <>
                 <button 
                  onClick={selectAllVisible}
                  className={`hidden md:flex items-center transition-colors px-2 py-1 rounded ${darkMode ? 'text-gray-300 hover:text-indigo-400 hover:bg-gray-800' : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-100'}`}
                  title={t.selectAll}
                >
                  <CheckSquare size={16} className="mx-1" />
                  <span className="hidden lg:inline">{t.selectAll}</span>
                </button>
                <button 
                  onClick={clearSelection}
                  className={`hidden md:flex items-center transition-colors px-2 py-1 rounded ${darkMode ? 'text-gray-300 hover:text-red-400 hover:bg-gray-800' : 'text-gray-600 hover:text-red-600 hover:bg-gray-100'}`}
                  title={t.clear}
                  disabled={selectedAppIds.size === 0}
                >
                  <Square size={16} className="mx-1" />
                  <span className="hidden lg:inline">{t.clear}</span>
                </button>
               </>
             )}
            
            <div className={`hidden lg:block border-r border-gray-200 px-4 mx-2 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <Clock />
            </div>
          </div>
        </div>
        
        {/* Mobile View Mode Switcher */}
        <div className="md:hidden flex border-t border-gray-200 dark:border-gray-800">
          <button
            onClick={() => setViewMode('windows')}
            className={`flex-1 py-2 text-xs font-medium flex items-center justify-center gap-2 ${
              viewMode === 'windows' 
                ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400' 
                : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            <Monitor size={14} />
            {t.windowsMode}
          </button>
          <button
            onClick={() => setViewMode('android')}
            className={`flex-1 py-2 text-xs font-medium flex items-center justify-center gap-2 ${
              viewMode === 'android' 
                ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400' 
                : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            <Smartphone size={14} />
            {t.androidMode}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-32">
        {viewMode === 'windows' ? (
          <>
            <div className="mb-8 text-center">
              <h2 className={`text-3xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {t.selectApps}
              </h2>
              <p className={`mt-2 text-lg ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {t.selectAppsDesc}
              </p>
            </div>

            {/* Windows Versions Sections with Tabs */}
            {renderOsSection()}

            {/* Microsoft Office Section (Full Width) */}
            {officeCategory && officeCategory.length > 0 && (
              <div className="mb-8">
                <CategoryGroup
                  title="Microsoft Office"
                  apps={officeCategory}
                  selectedAppIds={selectedAppIds}
                  onToggle={toggleApp}
                  onDownload={handleAppDownload}
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
                  onDownload={handleAppDownload}
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
                  onDownload={handleAppDownload}
                />
              ))}
            </div>
            
            {Object.keys(groupedApps).length === 0 && (
              <div className="text-center py-20">
                <p className={`text-lg ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{t.noResults.replace('{query}', searchQuery)}</p>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="mt-4 text-indigo-600 hover:text-indigo-500 font-medium hover:underline"
                >
                  {t.clearSearch}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="flex gap-6">
            <Sidebar 
              isOpen={sidebarOpen} 
              onClose={() => setSidebarOpen(false)} 
              activeCategory={androidCategory}
              onSelectCategory={setAndroidCategory}
              isRTL={language === 'ar'}
            />
            
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {androidApps
                  .filter(app => {
                    const matchesCategory = androidCategory === 'All' || app.category === androidCategory;
                    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase());
                    return matchesCategory && matchesSearch;
                  })
                  .map(app => (
                    <AndroidAppCard key={app.id} app={app} isRTL={language === 'ar'} />
                  ))
                }
              </div>
            </div>
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
            <div className={`${darkMode ? 'bg-gray-800/90 border-gray-700' : 'bg-gray-900/90 border-gray-700/50'} backdrop-blur-md text-white rounded-xl shadow-2xl p-2 flex items-center justify-between w-full border`}>
              <div className="flex items-center px-4">
                <span className="bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full ml-3 shadow-sm">
                  {selectedAppIds.size}
                </span>
                <span className="text-sm font-medium">{t.selected}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={clearSelection}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  title={t.clear}
                >
                  <X size={18} />
                </button>
                
                {/* Script Generator Button */}
                <button
                  onClick={generateScript}
                  className="p-2 text-emerald-400 hover:text-emerald-300 hover:bg-white/10 rounded-lg transition-colors"
                  title={t.generateScript}
                >
                  <FileCode size={18} />
                </button>

                <button
                  onClick={handleDownload}
                  className="flex items-center bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2.5 rounded-lg font-bold transition-all shadow-lg hover:shadow-indigo-500/30 active:scale-95 text-sm whitespace-nowrap"
                >
                  <Download size={18} className="ml-2" />
                  {t.downloadSelected}
                </button>
              </div>
            </div>
            <p className={`text-xs px-3 py-1 rounded-full shadow-sm border ${darkMode ? 'bg-gray-800/80 text-gray-400 border-gray-700' : 'bg-white/80 text-gray-600 border-white/20'} backdrop-blur-md`}>
              {t.openingWindows.replace('{count}', selectedAppIds.size.toString())}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-t mt-12 py-8`}>
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p className="font-medium">{t.footerDev}</p>
          <p className="mt-2 text-xs text-gray-400">&copy; {new Date().getFullYear()} {t.footerCopy}</p>
        </div>
      </footer>
    </div>
  );
}
