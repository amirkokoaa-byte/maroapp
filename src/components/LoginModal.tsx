import React, { useState } from 'react';
import { useAppStore } from '../context/AppContext';
import { X, Lock } from 'lucide-react';

interface LoginModalProps {
  onClose: () => void;
  t: any;
}

export const LoginModal: React.FC<LoginModalProps> = ({ onClose, t }) => {
  const { login } = useAppStore();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(username, password)) {
      onClose();
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md p-8 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center mb-6">
          <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full mb-4">
            <Lock size={32} className="text-indigo-600 dark:text-indigo-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t.login}</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{t.adminPanel}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              placeholder="admin"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              placeholder="•••••"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">{t.loginError}</p>
          )}

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition-colors shadow-lg hover:shadow-indigo-500/30"
          >
            {t.login}
          </button>
        </form>
      </div>
    </div>
  );
};
