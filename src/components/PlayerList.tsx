import React, { useEffect, useState } from 'react';
    import { ChevronRight, X } from 'lucide-react';
    import { Player } from '../types/Player';
    
    interface PlayerListProps {
      players: Player[];
      onPlayerClick: (player: Player) => void;
      onDeletePlayer: (index: number) => void;
      logAction: (action: string) => void;
    }
    
    export function PlayerList({ players, onPlayerClick, onDeletePlayer, logAction }: PlayerListProps) {
      const [, forceUpdate] = useState({});
    
      useEffect(() => {
        forceUpdate({});
      }, [players]);
    
      return (
        <div className="space-y-2">
          {players.map((player, index) => {
            const completedCount = Object.entries(player)
              .filter(([key]) => key !== 'pseudo')
              .filter(([_, value]) => value === true).length;
    
            const statusIcons = Object.entries(player)
              .filter(([key]) => key !== 'pseudo' && player[key as keyof Omit<Player, 'pseudo'>])
              .map(([key]) => {
                let icon = null;
                switch (key) {
                  case 'violet':
                    icon = <span key={key} className="mr-1" title="Violet">💜</span>;
                    break;
                  case 'vert':
                    icon = <span key={key} className="mr-1" title="Vert">💚</span>;
                    break;
                  case 'orange':
                    icon = <span key={key} className="mr-1" title="Orange">🧡</span>;
                    break;
                  case 'arbre':
                    icon = <span key={key} className="mr-1" title="Arbre">🌳</span>;
                    break;
                  case 'noir':
                    icon = <span key={key} className="mr-1" title="Noir">🖤</span>;
                    break;
                  case 'bloquer':
                    icon = <span key={key} className="mr-1" title="Bloquer">❌</span>;
                    break;
                  default:
                    icon = null;
                }
                return icon;
              });
    
            return (
              <button
                key={player.pseudo}
                className="w-full p-4 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-between group hover:border-pink-200"
              >
                <div className="flex flex-col items-start w-full" onClick={() => onPlayerClick(player)}>
                  <h3 className="font-medium text-gray-900 group-hover:text-pink-600 transition-colors">
                    <span className="text-sm font-normal mr-1">{player.role === 'admin' ? '[Admin]' : player.role === 'co-admin' ? '[Co-Admin]' : ''}</span>
                    {player.pseudo}
                  </h3>
                  <div className="flex items-center text-sm mb-1 -ml-1">
                    {statusIcons}
                    <span className="ml-1 text-gray-500">{completedCount} / 6</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => { e.stopPropagation(); onDeletePlayer(index); logAction(`a supprimé le joueur "${player.pseudo}"`) }}
                    className="text-gray-400 group-hover:text-pink-500 transition-colors flex-shrink-0"
                  >
                    <X size={16} />
                  </button>
                  <ChevronRight className="text-gray-400 group-hover:text-pink-500 transition-colors flex-shrink-0" />
                </div>
              </button>
            );
          })}
        </div>
      );
    }
