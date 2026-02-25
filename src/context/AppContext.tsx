import React, { createContext, useContext, useState, useEffect } from 'react';
import { apps as initialWindowsApps } from '../data/apps';
import { androidApps as initialAndroidApps } from '../data/androidApps';
import { hackedApps as initialHackedApps } from '../data/hackedApps';
import { AppData, AndroidAppData } from '../types';

interface AppContextType {
  windowsApps: AppData[];
  androidApps: AndroidAppData[];
  hackedApps: AndroidAppData[];
  setWindowsApps: (apps: AppData[]) => void;
  setAndroidApps: (apps: AndroidAppData[]) => void;
  setHackedApps: (apps: AndroidAppData[]) => void;
  isAdmin: boolean;
  login: (u: string, p: string) => boolean;
  logout: () => void;
  saveData: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [windowsApps, setWindowsApps] = useState<AppData[]>([]);
  const [androidApps, setAndroidApps] = useState<AndroidAppData[]>([]);
  const [hackedApps, setHackedApps] = useState<AndroidAppData[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);

  // Load data from localStorage or fall back to initial data
  useEffect(() => {
    const storedWindows = localStorage.getItem('windowsApps');
    const storedAndroid = localStorage.getItem('androidApps');
    const storedHacked = localStorage.getItem('hackedApps');
    const storedAuth = localStorage.getItem('isAdmin');

    if (storedWindows) setWindowsApps(JSON.parse(storedWindows));
    else setWindowsApps(initialWindowsApps);

    if (storedAndroid) setAndroidApps(JSON.parse(storedAndroid));
    else setAndroidApps(initialAndroidApps);

    if (storedHacked) setHackedApps(JSON.parse(storedHacked));
    else setHackedApps(initialHackedApps);

    if (storedAuth === 'true') setIsAdmin(true);
  }, []);

  const login = (u: string, p: string) => {
    if (u === 'admin' && p === 'admin') {
      setIsAdmin(true);
      localStorage.setItem('isAdmin', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem('isAdmin');
  };

  const saveData = () => {
    localStorage.setItem('windowsApps', JSON.stringify(windowsApps));
    localStorage.setItem('androidApps', JSON.stringify(androidApps));
    localStorage.setItem('hackedApps', JSON.stringify(hackedApps));
  };

  return (
    <AppContext.Provider value={{
      windowsApps, androidApps, hackedApps,
      setWindowsApps, setAndroidApps, setHackedApps,
      isAdmin, login, logout, saveData
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppStore = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppStore must be used within AppProvider');
  return context;
};
