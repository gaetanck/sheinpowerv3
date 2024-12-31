import React, { useState, useEffect } from 'react';
    import { Lock, Facebook } from 'lucide-react';
    
    interface LoginFormProps {
      onLogin: (username: string, password: string) => void;
    }
    
    export function LoginForm({ onLogin }: LoginFormProps) {
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [rememberMe, setRememberMe] = useState(false);
    
      useEffect(() => {
        const storedUsername = localStorage.getItem('rememberedUsername');
        const storedPassword = localStorage.getItem('rememberedPassword');
        if (storedUsername && storedPassword) {
          setUsername(storedUsername);
          setPassword(storedPassword);
          setRememberMe(true);
        }
      }, []);
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (rememberMe) {
          localStorage.setItem('rememberedUsername', username);
          localStorage.setItem('rememberedPassword', password);
        } else {
          localStorage.removeItem('rememberedUsername');
          localStorage.removeItem('rememberedPassword');
        }
        onLogin(username, password);
      };
    
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <div className="flex justify-center">
                <Lock className="h-12 w-12 text-pink-500" />
              </div>
              <h2 className="mt-6 text-3xl font-bold text-gray-900">
                Shein Game Tracker
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Connectez-vous pour accéder au tableau de bord
              </p>
                <div className="mt-4 flex items-center justify-center text-gray-500">
                    <a href="https://www.facebook.com/groups/984235946851820/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <Facebook className="h-5 w-5 mr-2" />
                        <span className="text-xs">Administrateur du groupe: Nolwene Lck - SHEIN POWER</span>
                    </a>
                </div>
            </div>
            
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm space-y-4">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    Pseudo
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Entrez votre pseudo"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Mot de passe
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Entrez votre mot de passe"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                  />
                  <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
                    Se souvenir de moi
                  </label>
                </div>
              </div>
    
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                Se connecter
              </button>
            </form>
          </div>
        </div>
      );
    }
