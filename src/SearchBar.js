// SearchBar.js
import React, { useState } from 'react';
import GameList from "./GameList";




function SearchBar({ onGameSelect }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const STEAM_API_KEY = 'B209D27E9218813162F543AD829CA731';

    const handleSearch = async () => {
        try {
            setLoading(true);

            // Fetch game data from the Steam API
            const response = await fetch(`https://api.steampowered.com/ISteamApps/GetAppList/v2/?key=${STEAM_API_KEY}`);
            const data = await response.json();

            // Filter the game list based on the search query
            const filteredGames = data.applist.apps.filter(app =>
                app.name.toLowerCase().includes(searchQuery.toLowerCase())
            );

            // Update search results state
            setSearchResults(filteredGames);

            setLoading(false); // Set loading to false after fetching and updating results
        } catch (error) {
            setError(error);
            setLoading(false); // Set loading to false in case of error
        }
    };

    return (
        <div className="SearchBar">
            <input
                type="text"
                placeholder="Search for a game..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch} disabled={loading}>
                {loading ? 'Searching...' : 'Search'}
            </button>
            {error && <p>Error: {error.message}</p>}
            <GameList games={searchResults} onGameSelect={onGameSelect} />
        </div>
    );
}

export default SearchBar;