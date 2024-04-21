import React from 'react';


function GameList({ games, onGameSelect }) {
    return (
        <div className="GameList">
            <h3>Search Results:</h3>
            <ul>
                {games.map((game, index) => (
                    <li key={index} onClick={() => onGameSelect(game)}>
                        {game.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GameList;