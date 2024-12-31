import React, { useState, useEffect } from 'react';
    import { RefreshCw, UserPlus } from 'lucide-react';
    import { Player } from './types/Player';
    import { Header } from './components/Header';
    import { Report } from './components/Report';
    import { AddPlayerModal } from './components/AddPlayerModal';
    import { LoginForm } from './components/LoginForm';
    import { PlayerList } from './components/PlayerList';
    import { StatusModal } from './components/StatusModal';
    
    function App() {
      const [isAuthenticated, setIsAuthenticated] = useState(false);
      const [activeGroup, setActiveGroup] = useState<'sheinPower' | 'groupeFusion'>('sheinPower');
        const [players, setPlayers] = useState<Player[]>({
            sheinPower: [
                {
                    pseudo: "Jordan J***4",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Angelique G***5 / A***n",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Laura L***l",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Samantha P***a",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Tracy D***3",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Fatiha F***5",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Ticia B***6 / G***7",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Lola L***2",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Priscillia M***5",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Loane L***9",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Mandy M***9",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Aurore A***u",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Lalou L***u",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Cathy K***z",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Matheo M***6",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Angélique A***6",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Estelle B***9",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Léa L***4 / C***m",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Alison S***t",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Ashley A***1",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Ajsmin S***x",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Alexandra L***7",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Alice D***e",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Ange G***e / B***e",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Assia R***0",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Cindy T***8",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Coralie M***4",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Coraline C***u",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Cosette C***e",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Céline C***i",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Djenaba D***3",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Dylan D***d",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Eloise E***0",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Elyan L***.",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Emeery G***3",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Émilie E***2",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Emma E***2",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Grégory G***4 / D***7",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Gwena G***l",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Jessika R***n",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Joe J***7",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Karen K***7 / E***7",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Lara V***0",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Laura V***3",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Léo 3***1",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Majda B***e",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Marie C***a",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Melissa T***l",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Melony G***a",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Moula D***e",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Nayla N***s",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Noé N***d",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Noelie N***m",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Ophélie O***n",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Rachel R***6",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Rat H***8",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Rayan A***3",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Rose A***t",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Sabine S***0",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Sakaiss M***n",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Sandrine S***n",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Sandy S***e",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Sarah S***m",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Sarah L. S***5",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Sauvane S***2",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Sébastien B***7",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Shay B***0 / M***0",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Siham 3***z",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Sissi S***1",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Sonia S K***2",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Sonya G S***0",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Soumiya Y***4",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Steffy W***f",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Tessa G***a / A***n",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                },
                {
                    pseudo: "Youssef J***7",
                    violet: false,
                    vert: false,
                    orange: false,
                    arbre: false,
                    noir: false,
                    bloquer: false,
                    role: 'joueur'
                }
            ],
            groupeFusion: []
        });
    
        const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [isAddPlayerModalOpen, setIsAddPlayerModalOpen] = useState(false);
        const [searchQuery, setSearchQuery] = useState('');
    
        useEffect(() => {
            const storedPlayers = localStorage.getItem('sheinGamePlayers');
            if (storedPlayers) {
                setPlayers(JSON.parse(storedPlayers));
            }
        }, []);
    
        useEffect(() => {
            localStorage.setItem('sheinGamePlayers', JSON.stringify(players));
        }, [players]);
    
        const handleLogin = (username: string, password: string) => {
            setIsAuthenticated(true);
        };
    
        const handlePlayerClick = (player: Player) => {
            setSelectedPlayer(player);
            setIsModalOpen(true);
        };
    
        const handleCloseModal = () => {
            setIsModalOpen(false);
        };
    
        const handleToggleStatus = (status: keyof Omit<Player, 'pseudo'>) => {
            if (selectedPlayer) {
                setPlayers(prevPlayers => ({
                    ...prevPlayers,
                    [activeGroup]: prevPlayers[activeGroup].map(p =>
                        p.pseudo === selectedPlayer.pseudo ? { ...p, [status]: !p[status] } : p
                    )
                }));
            }
        };
    
        const handleAddPlayer = (pseudo: string, role: string, password?: string) => {
            setPlayers(prevPlayers => ({
                ...prevPlayers,
                [activeGroup]: [...prevPlayers[activeGroup], { pseudo, violet: false, vert: false, orange: false, arbre: false, noir: false, bloquer: false, role, password }]
            }));
            setIsAddPlayerModalOpen(false);
        };
    
        const handleDeletePlayer = (index: number) => {
            setPlayers(prevPlayers => ({
                ...prevPlayers,
                [activeGroup]: prevPlayers[activeGroup].filter((_, i) => i !== index)
            }));
        };
    
        const handleOpenAddPlayerModal = () => {
            setIsAddPlayerModalOpen(true);
        };
    
        const handleCloseAddPlayerModal = () => {
            setIsAddPlayerModalOpen(false);
        };
    
        const logAction = (action: string, username: string) => {
            // setLog(prevLog => [`${new Date().toLocaleTimeString()} - ${username} ${action}`, ...prevLog]);
        };
    
        const filteredPlayers = players[activeGroup].filter(player =>
            player.pseudo.toLowerCase().includes(searchQuery.toLowerCase())
        );
    
        const handleTabChange = (group: 'sheinPower' | 'groupeFusion') => {
            setActiveGroup(group);
            setSearchQuery('');
        };
    
        if (!isAuthenticated) {
            return <LoginForm onLogin={handleLogin} />;
        }
    
        return (
            <div className="container mx-auto p-4">
                <Header />
                <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-2">
                    <div className="flex flex-wrap items-center gap-2 md:gap-4">
                        <div className="flex gap-2">
                            <button
                                onClick={() => handleTabChange('sheinPower')}
                                className={`py-2 px-4 rounded-lg transition-colors ${activeGroup === 'sheinPower' ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} text-sm flex items-center gap-1`}
                            >
                                🛍️ Shein Power <span className="text-gray-500 text-xs">({players.sheinPower.length})</span>
                            </button>
                            <button
                                onClick={() => handleTabChange('groupeFusion')}
                                className={`py-2 px-4 rounded-lg transition-colors ${activeGroup === 'groupeFusion' ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} text-sm flex items-center gap-1`}
                            >
                                🤝 Groupe Fusion <span className="text-gray-500 text-xs">({players.groupeFusion.length})</span>
                            </button>
                        </div>
                        <input
                            type="text"
                            placeholder="Rechercher un joueur..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 w-full md:w-auto text-sm"
                        />
                    </div>
                    <div className="flex gap-2">
                        <button onClick={handleOpenAddPlayerModal} className="flex items-center gap-2 bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition-colors text-sm">
                            <UserPlus size={16} />
                            <span className="hidden md:inline">Ajouter un joueur</span>
                        </button>
                        <button onClick={() => setPlayers(prevPlayers => ({
                            ...prevPlayers,
                            [activeGroup]: prevPlayers[activeGroup].map(player => ({ ...player, violet: false, vert: false, orange: false, arbre: false, noir: false, bloquer: false }))
                        }))} className="flex items-center gap-2 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors text-sm">
                            <RefreshCw size={16} />
                            <span className="hidden md:inline">Réinitialiser</span>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/2">
                        <PlayerList players={filteredPlayers} onPlayerClick={handlePlayerClick} onDeletePlayer={handleDeletePlayer} logAction={logAction} />
                    </div>
                    <div className="md:w-1/2">
                        <Report players={players[activeGroup]} />
                    </div>
                </div>
                <AddPlayerModal isOpen={isAddPlayerModalOpen} onClose={handleCloseAddPlayerModal} onAdd={handleAddPlayer} />
                <StatusModal player={selectedPlayer} isOpen={isModalOpen} onClose={handleCloseModal} onToggleStatus={handleToggleStatus} logAction={logAction} />
            </div>
        );
    }
    
    export default App;
