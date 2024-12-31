import React from 'react';
    import { ShoppingBag, Facebook } from 'lucide-react';
    
    export function Header() {
      return (
        <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-4 mb-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-8 h-8 text-white" />
              <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
                Shein Game Tracker
              </h1>
            </div>
            <a
              href="https://www.facebook.com/groups/984235946851820/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-pink-500 px-3 py-1 rounded-md text-sm hover:bg-gray-100 transition-colors flex items-center gap-1"
            >
              <Facebook className="w-4 h-4" />
              Groupe
            </a>
          </div>
          <p className="text-white/90 text-center mt-2 text-sm md:text-base">
            Suivez votre progression dans les mini-jeux Shein
          </p>
        </div>
      );
    }
