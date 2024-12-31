import React from 'react';
import { Check } from 'lucide-react';
import { Player } from '../types/Player';

interface GameTableProps {
  players: Player[];
  onToggleStatus: (playerIndex: number, status: keyof Omit<Player, 'pseudo'>) => void;
}

export function GameTable({ players, onToggleStatus }: GameTableProps) {
  const statuses = [
    { key: 'violet', label: 'Violet 💜', bg: 'bg-violet-100/50' },
    { key: 'vert', label: 'Vert 💚', bg: 'bg-green-100/50' },
    { key: 'orange', label: 'Orange 🧡', bg: 'bg-orange-100/50' },
    { key: 'arbre', label: 'Arbre 🌳', bg: 'bg-emerald-100/50' },
    { key: 'noir', label: 'Noir 🖤', bg: 'bg-gray-100/50' },
    { key: 'bloquer', label: 'Bloquer ❌', bg: 'bg-red-100/50' },
  ];

  return (
    <div className="overflow-x-auto -mx-6">
      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden shadow-sm rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-800">
              <tr>
                <th className="py-3 px-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Pseudo 👤
                </th>
                {statuses.map(({ key, label, bg }) => (
                  <th key={key} className={`${bg} py-3 px-4 text-center text-xs font-medium text-gray-800 uppercase tracking-wider`}>
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {players.map((player, playerIndex) => (
                <tr key={player.pseudo} className="hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm font-medium text-gray-900">
                    {player.pseudo}
                  </td>
                  {statuses.map(({ key }) => (
                    <td key={key} className="py-3 px-4 text-center">
                      <button
                        onClick={() => onToggleStatus(playerIndex, key as keyof Omit<Player, 'pseudo'>)}
                        className={`w-6 h-6 rounded transition-colors ${
                          player[key as keyof Omit<Player, 'pseudo'>]
                            ? 'bg-pink-500 text-white'
                            : 'bg-gray-200'
                        }`}
                      >
                        {player[key as keyof Omit<Player, 'pseudo'>] && (
                          <Check size={16} className="mx-auto" />
                        )}
                      </button>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
