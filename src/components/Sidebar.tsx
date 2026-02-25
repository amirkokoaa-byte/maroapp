import React from 'react';
import { Smartphone, LayoutGrid, MessageCircle, Wrench, Briefcase, Play, Gamepad2, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  isRTL: boolean;
}

const categories = [
  { id: 'All', label: { en: 'All Apps', ar: 'كل التطبيقات' }, icon: LayoutGrid },
  { id: 'Social Media', label: { en: 'Social Media', ar: 'تواصل اجتماعي' }, icon: MessageCircle },
  { id: 'Utilities', label: { en: 'Utilities', ar: 'أدوات' }, icon: Wrench },
  { id: 'Productivity', label: { en: 'Productivity', ar: 'إنتاجية' }, icon: Briefcase },
  { id: 'Media & Video', label: { en: 'Media & Video', ar: 'وسائط وفيديو' }, icon: Play },
  { id: 'Games', label: { en: 'Games', ar: 'ألعاب' }, icon: Gamepad2 },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, activeCategory, onSelectCategory, isRTL }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`
          fixed top-16 bottom-0 z-40 w-64 bg-white dark:bg-gray-900 border-r dark:border-gray-800 shadow-lg lg:shadow-none
          transition-transform duration-300 ease-in-out overflow-y-auto
          ${isRTL ? 'right-0 border-l border-r-0' : 'left-0'}
          ${isOpen ? 'translate-x-0' : (isRTL ? 'translate-x-full' : '-translate-x-full')}
          lg:translate-x-0 lg:static lg:h-[calc(100vh-4rem)]
        `}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-6 px-2">
            <div className="flex items-center gap-2 text-green-600 dark:text-green-500">
              <Smartphone size={24} />
              <h2 className="text-xl font-bold">Android World</h2>
            </div>
            <button 
              onClick={onClose}
              className="lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="space-y-1">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    onSelectCategory(cat.id);
                    onClose();
                  }}
                  className={`
                    w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                    ${isActive 
                      ? 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }
                  `}
                >
                  <Icon size={18} />
                  <span>{isRTL ? cat.label.ar : cat.label.en}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
};
