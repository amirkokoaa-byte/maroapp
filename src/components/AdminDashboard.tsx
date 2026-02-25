import React, { useState, useEffect } from 'react';
import { AppData, AndroidAppData } from '../types';
import { Save, Plus, Trash2, Monitor, Smartphone, CheckCircle } from 'lucide-react';

interface AdminDashboardProps {
  pcApps: AppData[];
  androidApps: AndroidAppData[];
  onSave: (newPcApps: AppData[], newAndroidApps: AndroidAppData[]) => void;
  onClose: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ pcApps, androidApps, onSave, onClose }) => {
  const [localPcApps, setLocalPcApps] = useState<AppData[]>(pcApps);
  const [localAndroidApps, setLocalAndroidApps] = useState<AndroidAppData[]>(androidApps);
  const [activeTab, setActiveTab] = useState<'add' | 'edit'>('add');
  const [appType, setAppType] = useState<'pc' | 'android'>('pc');
  const [successMsg, setSuccessMsg] = useState('');

  // Form State for New App
  const [newApp, setNewApp] = useState({
    name: '',
    description: '',
    category: '',
    downloadUrl: '',
    developer: '' // Only for Android
  });

  // Extract unique categories
  const pcCategories = Array.from(new Set(localPcApps.map(app => app.category)));
  const androidCategories = Array.from(new Set(localAndroidApps.map(app => app.category)));

  const handleAddApp = (e: React.FormEvent) => {
    e.preventDefault();
    const id = newApp.name.toLowerCase().replace(/[^a-z0-9]/g, '_') + '_' + Date.now();
    
    if (appType === 'pc') {
      const app: AppData = {
        id,
        name: newApp.name,
        description: newApp.description,
        category: newApp.category,
        officialDownloadUrl: newApp.downloadUrl
      };
      setLocalPcApps([...localPcApps, app]);
    } else {
      const app: AndroidAppData = {
        id,
        name: newApp.name,
        description: newApp.description,
        category: newApp.category as any,
        developer: newApp.developer || 'Unknown',
        externalUrl: newApp.downloadUrl
      };
      setLocalAndroidApps([...localAndroidApps, app]);
    }

    setNewApp({ name: '', description: '', category: '', downloadUrl: '', developer: '' });
    showSuccess('App added to temporary state!');
  };

  const handleUpdatePcApp = (id: string, field: keyof AppData, value: string) => {
    setLocalPcApps(localPcApps.map(app => 
      app.id === id ? { ...app, [field]: value } : app
    ));
  };

  const handleUpdateAndroidApp = (id: string, field: keyof AndroidAppData, value: string) => {
    setLocalAndroidApps(localAndroidApps.map(app => 
      app.id === id ? { ...app, [field]: value } : app
    ));
  };

  const handleDeletePcApp = (id: string) => {
    if (confirm('Are you sure you want to delete this app?')) {
      setLocalPcApps(localPcApps.filter(app => app.id !== id));
    }
  };

  const handleDeleteAndroidApp = (id: string) => {
    if (confirm('Are you sure you want to delete this app?')) {
      setLocalAndroidApps(localAndroidApps.filter(app => app.id !== id));
    }
  };

  const handleSaveAll = () => {
    onSave(localPcApps, localAndroidApps);
    showSuccess('All changes saved successfully to live site!');
  };

  const showSuccess = (msg: string) => {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-100 dark:bg-gray-900 overflow-y-auto">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10 px-6 py-4 flex justify-between items-center shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <span className="bg-indigo-600 text-white p-1.5 rounded-lg">
            <Save size={20} />
          </span>
          Admin Dashboard
        </h2>
        <div className="flex gap-3">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            Close
          </button>
          <button 
            onClick={handleSaveAll}
            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow-lg shadow-green-500/30 transition-all active:scale-95 flex items-center gap-2"
          >
            <Save size={18} />
            Save Changes
          </button>
        </div>
      </div>

      {/* Success Toast */}
      {successMsg && (
        <div className="fixed top-20 right-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg shadow-xl z-50 flex items-center gap-2 animate-bounce">
          <CheckCircle size={20} />
          {successMsg}
        </div>
      )}

      <div className="max-w-6xl mx-auto p-6">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setActiveTab('add')}
            className={`pb-3 px-4 font-medium transition-colors border-b-2 ${activeTab === 'add' ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400' : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400'}`}
          >
            Add New Program
          </button>
          <button
            onClick={() => setActiveTab('edit')}
            className={`pb-3 px-4 font-medium transition-colors border-b-2 ${activeTab === 'edit' ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400' : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400'}`}
          >
            Manage Existing Programs
          </button>
        </div>

        {/* Add New App Section */}
        {activeTab === 'add' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 max-w-2xl">
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setAppType('pc')}
                className={`flex-1 py-3 rounded-lg border-2 flex items-center justify-center gap-2 font-bold transition-all ${appType === 'pc' ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300' : 'border-gray-200 dark:border-gray-700 text-gray-500'}`}
              >
                <Monitor size={20} /> PC Software
              </button>
              <button
                onClick={() => setAppType('android')}
                className={`flex-1 py-3 rounded-lg border-2 flex items-center justify-center gap-2 font-bold transition-all ${appType === 'android' ? 'border-green-600 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300' : 'border-gray-200 dark:border-gray-700 text-gray-500'}`}
              >
                <Smartphone size={20} /> Android App
              </button>
            </div>

            <form onSubmit={handleAddApp} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Program Name</label>
                <input
                  required
                  type="text"
                  value={newApp.name}
                  onChange={e => setNewApp({...newApp, name: e.target.value})}
                  className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category</label>
                <div className="flex gap-2">
                  <select
                    required
                    value={newApp.category}
                    onChange={e => setNewApp({...newApp, category: e.target.value})}
                    className="flex-1 p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="">Select Category</option>
                    {(appType === 'pc' ? pcCategories : androidCategories).map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                  <input 
                    type="text" 
                    placeholder="Or type new..." 
                    className="flex-1 p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                    onChange={e => e.target.value && setNewApp({...newApp, category: e.target.value})}
                  />
                </div>
              </div>

              {appType === 'android' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Developer</label>
                  <input
                    required
                    type="text"
                    value={newApp.developer}
                    onChange={e => setNewApp({...newApp, developer: e.target.value})}
                    className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
                <textarea
                  required
                  value={newApp.description}
                  onChange={e => setNewApp({...newApp, description: e.target.value})}
                  className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white h-24"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Download URL</label>
                <input
                  required
                  type="url"
                  value={newApp.downloadUrl}
                  onChange={e => setNewApp({...newApp, downloadUrl: e.target.value})}
                  className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="https://..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <Plus size={20} /> Add Program
              </button>
            </form>
          </div>
        )}

        {/* Manage Existing Apps Section */}
        {activeTab === 'edit' && (
          <div className="space-y-8">
            {/* PC Apps */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Monitor className="text-indigo-600" /> PC Software
              </h3>
              
              {pcCategories.map(category => (
                <div key={category} className="mb-6 last:mb-0">
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 border-b border-gray-100 dark:border-gray-700 pb-1">{category}</h4>
                  <div className="space-y-3">
                    {localPcApps.filter(app => app.category === category).map(app => (
                      <div key={app.id} className="flex gap-3 items-start p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg group">
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div>
                            <label className="text-xs text-gray-400 block mb-1">Name</label>
                            <input
                              type="text"
                              value={app.name}
                              onChange={(e) => handleUpdatePcApp(app.id, 'name', e.target.value)}
                              className="w-full p-1.5 text-sm rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            />
                          </div>
                          <div>
                            <label className="text-xs text-gray-400 block mb-1">Download URL</label>
                            <input
                              type="text"
                              value={app.officialDownloadUrl}
                              onChange={(e) => handleUpdatePcApp(app.id, 'officialDownloadUrl', e.target.value)}
                              className="w-full p-1.5 text-sm rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-mono"
                            />
                          </div>
                        </div>
                        <button 
                          onClick={() => handleDeletePcApp(app.id)}
                          className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors self-center"
                          title="Delete App"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Android Apps */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Smartphone className="text-green-600" /> Android Apps
              </h3>
              
              {androidCategories.map(category => (
                <div key={category} className="mb-6 last:mb-0">
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 border-b border-gray-100 dark:border-gray-700 pb-1">{category}</h4>
                  <div className="space-y-3">
                    {localAndroidApps.filter(app => app.category === category).map(app => (
                      <div key={app.id} className="flex gap-3 items-start p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg group">
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div>
                            <label className="text-xs text-gray-400 block mb-1">Name</label>
                            <input
                              type="text"
                              value={app.name}
                              onChange={(e) => handleUpdateAndroidApp(app.id, 'name', e.target.value)}
                              className="w-full p-1.5 text-sm rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            />
                          </div>
                          <div>
                            <label className="text-xs text-gray-400 block mb-1">External URL</label>
                            <input
                              type="text"
                              value={app.externalUrl}
                              onChange={(e) => handleUpdateAndroidApp(app.id, 'externalUrl', e.target.value)}
                              className="w-full p-1.5 text-sm rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-mono"
                            />
                          </div>
                        </div>
                        <button 
                          onClick={() => handleDeleteAndroidApp(app.id)}
                          className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors self-center"
                          title="Delete App"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
