
import React from 'react';

function GameDetails({ game }) {
    if (!game) {
        return null;
    }

    return (
        <div className="GameDetails">
            <h2>{game.name}</h2>
            <p>Description: {game.description}</p>
            <p>Release Date: {game.releaseDate}</p>
            <p>Developers: {game.developers.join(', ')}</p>
            <p>Publishers: {game.publishers.join(', ')}</p>
            <p>Genres: {game.genres.join(', ')}</p>
            <p>Metacritic Score: {game.metacriticScore}</p>
            <p>User Reviews: {game.userReviews}</p>
            <p>Total Achievements: {game.totalAchievements}</p>
            <p>Minimum System Requirements:</p>
            <ul>
                <li>OS: {game.systemRequirements.os}</li>
                <li>Processor: {game.systemRequirements.processor}</li>
                <li>Memory: {game.systemRequirements.memory}</li>
                <li>Graphics: {game.systemRequirements.graphics}</li>
                <li>Storage: {game.systemRequirements.storage}</li>
            </ul>
            
        </div>
    );
}

export default GameDetails;