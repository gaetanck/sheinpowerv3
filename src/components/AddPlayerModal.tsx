import React, { useState } from 'react';
    import { X } from 'lucide-react';
    
    interface AddPlayerModalProps {
      isOpen: boolean;
      onClose: () => void;
      onAdd: (pseudo: string, role: string, password?: string) => void;
    }
    
    export function AddPlayerModal({ isOpen, onClose, onAdd }: AddPlayerModalProps) {
      const [pseudo, setPseudo] = useState('');
      const [role, setRole] = useState('joueur');
      const [password, setPassword] = useState('');
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (pseudo.trim()) {
          onAdd(pseudo.trim(), role, password);
          setPseudo('');
          setRole('joueur');
          setPassword('');
          onClose();
        }
      };
    
      if (!isOpen) return null;
    
      return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md relative">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
            
            <h2 className="text-xl font-bold mb-4">Ajouter un nouveau joueur</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="pseudo" className="block text-sm font-medium text-gray-700 mb-1">
                  Pseudo
                </label>
                <input
                  type="text"
                  id="pseudo"
                  value={pseudo}
                  onChange={(e) => setPseudo(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Entrez le pseudo du joueur"
                  autoFocus
                />
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                  Rôle
                </label>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                >
                  <option value="joueur">Joueur</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition-colors"
              >
                Ajouter
              </button>
            </form>
          </div>
        </div>
      );
    }
