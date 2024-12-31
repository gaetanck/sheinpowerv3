import React, { useState, useEffect } from 'react';
    import { X, Check } from 'lucide-react';
    import { Player } from '../types/Player';
    
    interface StatusModalProps {
      player: Player | null;
      isOpen: boolean;
      onClose: () => void;
      onToggleStatus: (status: keyof Omit<Player, 'pseudo'>) => void;
      logAction: (action: string, username: string) => void;
    }
    
    export function StatusModal({ player, isOpen, onClose, onToggleStatus, logAction }: StatusModalProps) {
      if (!isOpen || !player) return null;
    
      const [localPlayer, setLocalPlayer] = useState<Player>(player);
    
      useEffect(() => {
        if (player) {
          setLocalPlayer(player);
        }
      }, [player]);
    
      const statuses = [
        { key: 'violet', label: 'Violet 💜', bg: 'bg-violet-100' },
        { key: 'vert', label: 'Vert 💚', bg: 'bg-green-100' },
        { key: 'orange', label: 'Orange 🧡', bg: 'bg-orange-100' },
        { key: 'arbre', label: 'Arbre 🌳', bg: 'bg-emerald-100' },
        { key: 'noir', label: 'Noir 🖤', bg: 'bg-gray-100' },
        { key: 'bloquer', label: 'Bloquer ❌', bg: 'bg-red-100' },
      ];
    
      const handleLocalToggleStatus = (status: keyof Omit<Player, 'pseudo'>) => {
        const updatedPlayer = { ...localPlayer, [status]: !localPlayer[status] };
        setLocalPlayer(updatedPlayer);
        onToggleStatus(status);
        logAction(`a modifié le statut "${status}" pour le joueur "${player.pseudo}"`, 'sheinpower');
      };
    
      return (
        <div className="fixed inset-0 bg-black/50 z-50 animate-fade-in">
          <div className="fixed inset-x-0 bottom-0 bg-white rounded-t-xl p-4 animate-slide-up max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4 sticky top-0 bg-white pb-2">
              <h2 className="text-lg font-semibold">{player.pseudo}</h2>
              <button onClick={onClose} className="p-1">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {statuses.map(({ key, label, bg }) => {
                const isCompleted = localPlayer[key as keyof Omit<Player, 'pseudo'>];
                return (
                  <button
                    key={key}
                    onClick={() => handleLocalToggleStatus(key as keyof Omit<Player, 'pseudo'>)}
                    className={`
                      relative p-4 rounded-lg flex items-center justify-between
                      transition-all duration-150 active:scale-95
                      ${bg} 
                      ${isCompleted ? 'ring-2 ring-pink-500 shadow-md' : 'hover:shadow-sm'}
                    `}
                  >
                    <span className="font-medium">{label}</span>
                    <div className={`
                      w-6 h-6 rounded-full flex items-center justify-center
                      transition-all duration-150
                      ${isCompleted ? 'bg-pink-500' : 'bg-gray-200'}
                    `}>
                      <Check className={`w-4 h-4 text-white transition-all duration-150 ${isCompleted ? 'scale-100' : 'scale-0'}`} />
                    </div>
                  </button>
                );
              })}
            </div>
              <p className="text-sm text-gray-500 mt-4">
                  Rôle: {player.role}
              </p>
          </div>
        </div>
      );
    }
