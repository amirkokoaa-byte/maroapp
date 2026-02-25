import React from 'react';
import { AppData } from '../types';
import { AppCard } from './AppCard';

interface CategoryGroupProps {
  title: string;
  apps: AppData[];
  selectedAppIds: Set<string>;
  onToggle: (id: string) => void;
  onDownload?: (app: AppData) => void;
}

const categoryTranslations: Record<string, string> = {
  "Windows 11": "Windows 11",
  "Windows 10": "Windows 10",
  "Windows 8.1": "Windows 8.1",
  "Windows 7": "Windows 7",
  "Windows Vista": "Windows Vista",
  "Windows Server": "Windows Server",
  "Classic Windows": "أنظمة التشغيل القديمة (Classic Windows)",
  "Microsoft Office": "مايكروسوفت أوفيس (Microsoft Office)",
  "Web Browsers": "متصفحات الويب",
  "Messaging": "المراسلة",
  "Media": "الوسائط",
  ".NET & Runtimes": "بيئات التشغيل و .NET",
  "Java": "جافا",
  "Imaging": "التصوير والتصميم",
  "Documents": "المستندات",
  "Security": "الحماية والأمان",
  "Antivirus": "مكافحة الفيروسات (Antivirus)",
  "File Sharing & Online Storage": "مشاركة الملفات والتخزين السحابي",
  "Other & Utilities": "أدوات أخرى",
  "Compression & VC++": "الضغط و VC++",
  "Developer Tools": "أدوات المطورين"
};

export const CategoryGroup: React.FC<CategoryGroupProps> = ({ 
  title, 
  apps,
  selectedAppIds,
  onToggle,
  onDownload
}) => {
  const displayTitle = categoryTranslations[title] || title;
  const isWindows = title.startsWith('Windows');
  const isOffice = title === 'Microsoft Office';
  const isClassic = title === 'Classic Windows';

  return (
    <div className={`
      break-inside-avoid p-4 rounded-lg border shadow-sm transition-shadow
      ${(isWindows || isClassic)
        ? 'bg-blue-50/50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-900/30 mb-8 col-span-full shadow-md' 
        : isOffice
          ? 'bg-orange-50/50 dark:bg-orange-900/10 border-orange-100 dark:border-orange-900/30 mb-8 col-span-full shadow-md'
          : 'bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 mb-6 hover:shadow-md'
      }
    `}>
      <h2 className={`text-lg font-bold mb-3 flex items-center border-b pb-2 
        ${(isWindows || isClassic) 
          ? 'text-blue-900 dark:text-blue-300 border-blue-200 dark:border-blue-800' 
          : isOffice 
            ? 'text-orange-900 dark:text-orange-300 border-orange-200 dark:border-orange-800' 
            : 'text-gray-800 dark:text-gray-200 border-gray-100 dark:border-gray-700'
        }`}>
        <span className={`w-1.5 h-5 rounded-full ml-2 
          ${(isWindows || isClassic) ? 'bg-blue-600' : isOffice ? 'bg-orange-500' : 'bg-indigo-500'}`}></span>
        {displayTitle}
      </h2>
      <div className={`
        ${(isWindows || isClassic || isOffice) ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3' : 'space-y-1'}
      `}>
        {apps.map(app => (
          <AppCard
            key={app.id}
            app={app}
            isSelected={selectedAppIds.has(app.id)}
            onToggle={onToggle}
            onDownload={onDownload}
          />
        ))}
      </div>
    </div>
  );
};
