import React, { useState, useEffect } from 'react';
import { Clock as ClockIcon, Calendar } from 'lucide-react';

export const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('ar-EG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="flex flex-col items-end text-sm font-medium px-3 py-1 rounded-lg border shadow-sm transition-colors
      bg-gray-50 dark:bg-gray-800 
      border-gray-200 dark:border-gray-700
      text-gray-600 dark:text-gray-300">
      <div className="flex items-center gap-2">
        <span>{formatDate(time)}</span>
        <Calendar size={14} className="text-indigo-500 dark:text-indigo-400" />
      </div>
      <div className="flex items-center gap-2 mt-0.5">
        <span className="font-bold text-gray-800 dark:text-gray-100" dir="ltr">{formatTime(time)}</span>
        <ClockIcon size={14} className="text-indigo-500 dark:text-indigo-400" />
      </div>
    </div>
  );
};
