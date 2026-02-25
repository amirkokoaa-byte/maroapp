import React from 'react';
import { AndroidAppData } from '../types';
import { ExternalLink, Smartphone } from 'lucide-react';

interface AndroidAppCardProps {
  app: AndroidAppData;
  isRTL: boolean;
}

export const AndroidAppCard: React.FC<AndroidAppCardProps> = ({ app, isRTL }) => {
  return (
    <div className="
      group relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 
      p-4 shadow-sm hover:shadow-md transition-all duration-200
      hover:border-green-400 dark:hover:border-green-500/50
    ">
      <div className="flex items-start gap-4">
        <div className="
          w-12 h-12 rounded-xl bg-green-50 dark:bg-green-900/20 
          flex items-center justify-center text-green-600 dark:text-green-400
          border border-green-100 dark:border-green-900/30
        ">
          <Smartphone size={24} />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-gray-900 dark:text-white truncate">
            {app.name}
          </h3>
          <p className="text-xs text-green-600 dark:text-green-400 font-medium mb-1">
            {app.developer}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
            {app.description}
          </p>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
        <span className="text-xs text-gray-400 bg-gray-50 dark:bg-gray-700/50 px-2 py-1 rounded">
          {app.category}
        </span>
        
        <a 
          href={app.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold
            bg-green-600 hover:bg-green-700 text-white
            transition-colors shadow-sm hover:shadow-green-500/20
          "
        >
          <span>Download</span>
          <ExternalLink size={12} />
        </a>
      </div>
    </div>
  );
};
