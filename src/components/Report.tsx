import React from 'react';
    import { Player } from '../types/Player';
    
    interface ReportProps {
      players: Player[];
    }
    
    export function Report({ players }: ReportProps) {
      const getReport = () => {
        let violetCount = 0;
        let vertCount = 0;
        let orangeCount = 0;
        let arbreCount = 0;
        let noirCount = 0;
        let bloquerCount = 0;
    
        players.forEach(player => {
          violetCount += player.violet ? 1 : 0;
          vertCount += player.vert ? 1 : 0;
          orangeCount += player.orange ? 1 : 0;
          arbreCount += player.arbre ? 1 : 0;
          noirCount += player.noir ? 1 : 0;
          bloquerCount += player.bloquer ? 1 : 0;
        });
    
        const clicked = players.filter(player => {
          return (
            player.violet === true &&
            player.vert === true &&
            player.orange === true &&
            player.arbre === true &&
            player.noir === true &&
            player.bloquer === true
          );
        }).map(player => player.pseudo);
    
        const notClicked = players.filter(player => {
          return (
            player.violet !== true ||
            player.vert !== true ||
            player.orange !== true ||
            player.arbre !== true ||
            player.noir !== true ||
            player.bloquer !== true
          );
        }).map(player => player.pseudo);
    
        return {
          violetCount,
          vertCount,
          orangeCount,
          arbreCount,
          noirCount,
          bloquerCount,
          clicked,
          notClicked
        };
      };
    
      const { violetCount, vertCount, orangeCount, arbreCount, noirCount, bloquerCount, clicked, notClicked } = getReport();
    
      return (
        <div className="bg-white rounded-lg p-4 space-y-4 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">Rapport</h3>
    
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-xl">💜</span>
              <span className="font-medium text-gray-700">{violetCount}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">💚</span>
              <span className="font-medium text-gray-700">{vertCount}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🧡</span>
              <span className="font-medium text-gray-700">{orangeCount}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🌳</span>
              <span className="font-medium text-gray-700">{arbreCount}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🖤</span>
              <span className="font-medium text-gray-700">{noirCount}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">❌</span>
              <span className="font-medium text-gray-700">{bloquerCount}</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-700 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Ont complété tous les défis
            </h4>
            <ul className="list-none space-y-1">
              {clicked.length > 0 ? (
                clicked.map(pseudo => (
                  <li key={pseudo} className="text-gray-600 pl-4">
                    {pseudo}
                  </li>
                ))
              ) : (
                <li className="text-sm text-gray-500 italic pl-4">
                  Aucun joueur n'a encore terminé
                </li>
              )}
            </ul>
          </div>
    
          <div>
            <h4 className="font-medium text-gray-700 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              En cours
            </h4>
            <ul className="list-none space-y-1">
              {notClicked.map(pseudo => (
                <li key={pseudo} className="text-gray-600 pl-4">
                  {pseudo}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
