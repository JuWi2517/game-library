
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import GameList from './GameList';
import GameDetails from './GameDetails';

function Main() {
    const [selectedGame, setSelectedGame] = useState(null);
    const [searchResults, setSearchResults] = useState([]);

    const handleGameSelect = (game) => {
        setSelectedGame(game);
    };

    const handleSearchResults = (results) => {
        setSearchResults(results);
    };

    return (
        <div className="Main">
            <SearchBar onGameSelect={handleGameSelect} onSearchResults={handleSearchResults} />
            <div className="Content">
                <GameList games={searchResults} onGameSelect={handleGameSelect} />
                <GameDetails game={selectedGame} />
            </div>
        </div>
    );
}

export default Main;
