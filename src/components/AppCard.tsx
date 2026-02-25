import React, { useState } from 'react';
import { AppData } from '../types';
import { Check, Download, Copy, CheckCircle } from 'lucide-react';
import { FaWindows } from 'react-icons/fa';

interface AppCardProps {
  app: AppData;
  isSelected: boolean;
  onToggle: (id: string) => void;
  onDownload?: (app: AppData) => void;
}

export const AppCard: React.FC<AppCardProps> = ({ app, isSelected, onToggle, onDownload }) => {
  const isWindows = app.category.startsWith('Windows') || app.category === 'Classic Windows';
  const isModernWindows = app.category === 'Windows 11' || app.category === 'Windows 10';
  const isOffice = app.category === 'Microsoft Office';
  
  const [selectedLang, setSelectedLang] = useState('en-US');
  const [copiedHash, setCopiedHash] = useState(false);

  const handleDirectDownload = (e: React.MouseEvent, arch: 'x64' | 'x86') => {
    e.stopPropagation();
    
    let url = app.officialDownloadUrl;
    
    // Check for language specific URL first
    if (app.downloadUrls?.languages && app.downloadUrls.languages[selectedLang]) {
      const langUrls = app.downloadUrls.languages[selectedLang];
      if (arch === 'x64' && langUrls.x64) url = langUrls.x64;
      if (arch === 'x86' && langUrls.x86) url = langUrls.x86;
    } 
    // Fallback to standard URLs
    else if (app.downloadUrls) {
      if (arch === 'x64' && app.downloadUrls.x64) url = app.downloadUrls.x64;
      if (arch === 'x86' && app.downloadUrls.x86) url = app.downloadUrls.x86;
    }

    window.open(url, '_blank');
    if (onDownload) {
      onDownload(app);
    }
  };

  const copyHash = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (app.sha256) {
      navigator.clipboard.writeText(app.sha256);
      setCopiedHash(true);
      setTimeout(() => setCopiedHash(false), 2000);
    }
  };

  // Determine available architectures for the current language
  const currentLangUrls = app.downloadUrls?.languages?.[selectedLang] || app.downloadUrls;
  const hasX64 = !!currentLangUrls?.x64;
  const hasX86 = !!currentLangUrls?.x86;

  return (
    <div 
      onClick={() => onToggle(app.id)}
      className={`
        flex flex-col p-3 rounded cursor-pointer transition-colors duration-150 group relative
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
          
          {isWindows && (
            <div className="mt-1 flex flex-wrap gap-1 items-center">
              {app.downloadUrls?.languages ? (
                <select 
                  value={selectedLang}
                  onChange={(e) => {
                    e.stopPropagation();
                    setSelectedLang(e.target.value);
                  }}
                  onClick={(e) => e.stopPropagation()}
                  className="text-[10px] bg-white text-gray-600 px-1 py-0.5 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                >
                  <option value="en-US">English (US)</option>
                  <option value="ar-SA">العربية (Arabic)</option>
                  <option value="fr-FR">Français (French)</option>
                </select>
              ) : (
                <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded border border-gray-200">
                  English - US
                </span>
              )}
              
              {isModernWindows && (
                <span className="text-[10px] bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded border border-blue-100">
                  Media Creation Tool / Portal
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* OS Specific Download Buttons */}
      {(isWindows || isOffice) && (hasX64 || hasX86) && (
        <div className="mt-3 flex flex-col gap-2">
          <div className="flex gap-2 mr-8">
            {hasX64 && (
              <button
                onClick={(e) => handleDirectDownload(e, 'x64')}
                className={`flex items-center px-2 py-1 text-xs font-medium rounded transition-colors
                  ${isOffice ? 'text-orange-700 bg-orange-100 hover:bg-orange-200' : 'text-blue-700 bg-blue-100 hover:bg-blue-200'}
                `}
              >
                <Download size={12} className="ml-1" />
                64-bit
              </button>
            )}
            {hasX86 && (
              <button
                onClick={(e) => handleDirectDownload(e, 'x86')}
                className="flex items-center px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
              >
                <Download size={12} className="ml-1" />
                32-bit
              </button>
            )}
          </div>
          
          {app.sha256 && (
            <button 
              onClick={copyHash}
              className="flex items-center text-[10px] text-gray-400 hover:text-gray-600 mr-8 transition-colors w-fit"
              title="Click to copy SHA-256 hash"
            >
              {copiedHash ? (
                <>
                  <CheckCircle size={10} className="ml-1 text-green-500" />
                  <span className="text-green-600">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={10} className="ml-1" />
                  <span>Verify Hash (SHA-256)</span>
                </>
              )}
            </button>
          )}
        </div>
      )}
    </div>
  );
};
