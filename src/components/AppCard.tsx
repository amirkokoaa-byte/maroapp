import React from 'react';
import { AppData } from '../types';
import { Check, Download } from 'lucide-react';
import { FaWindows } from 'react-icons/fa';

interface AppCardProps {
  app: AppData;
  isSelected: boolean;
  onToggle: (id: string) => void;
}

export const AppCard: React.FC<AppCardProps> = ({ app, isSelected, onToggle }) => {
  const isWindows = app.category.startsWith('Windows') || app.category === 'Classic Windows';
  const isOffice = app.category === 'Microsoft Office';

  const handleDirectDownload = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    window.open(url, '_blank');
  };

  return (
    <div 
      onClick={() => onToggle(app.id)}
      className={`
        flex flex-col p-3 rounded cursor-pointer transition-colors duration-150 group
        ${isSelected 
          ? 'bg-indigo-50' 
          : isWindows ? 'hover:bg-blue-50' : isOffice ? 'hover:bg-orange-50' : 'hover:bg-gray-100'
        }
        ${isWindows ? 'border border-gray-200 hover:border-blue-300' : isOffice ? 'border border-gray-200 hover:border-orange-300' : ''}
      `}
    >
      <div className="flex items-center w-full">
        <div className={`
          w-5 h-5 rounded border flex items-center justify-center ml-3 transition-colors flex-shrink-0
          ${isSelected 
            ? 'bg-indigo-600 border-indigo-600' 
            : isWindows 
              ? 'bg-white border-gray-300 group-hover:border-blue-400' 
              : isOffice
                ? 'bg-white border-gray-300 group-hover:border-orange-400'
                : 'bg-white border-gray-300 group-hover:border-indigo-400'
          }
        `}>
          {isSelected && <Check size={14} className="text-white" />}
        </div>
        
        {(isWindows || isOffice) && (
          <div className={`ml-3 ${isWindows ? 'text-blue-600' : 'text-orange-600'}`}>
            <FaWindows size={20} />
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-baseline justify-between">
            <h3 className={`text-sm font-medium truncate ${isWindows ? 'text-gray-900' : 'text-gray-900'}`}>
              {app.name}
            </h3>
            {app.version && <span className="text-xs text-gray-400 mr-2 font-mono">{app.version}</span>}
          </div>
          <p className="text-xs text-gray-500 truncate">{app.description}</p>
        </div>
      </div>

      {/* OS Specific Download Buttons */}
      {(isWindows || isOffice) && app.downloadUrls && (
        <div className="mt-3 flex gap-2 mr-8">
          {app.downloadUrls.x64 && (
            <button
              onClick={(e) => handleDirectDownload(e, app.downloadUrls!.x64!)}
              className={`flex items-center px-2 py-1 text-xs font-medium rounded transition-colors
                ${isOffice ? 'text-orange-700 bg-orange-100 hover:bg-orange-200' : 'text-blue-700 bg-blue-100 hover:bg-blue-200'}
              `}
            >
              <Download size={12} className="ml-1" />
              64-bit
            </button>
          )}
          {app.downloadUrls.x86 && (
            <button
              onClick={(e) => handleDirectDownload(e, app.downloadUrls!.x86!)}
              className="flex items-center px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
            >
              <Download size={12} className="ml-1" />
              32-bit
            </button>
          )}
        </div>
      )}
    </div>
  );
};
