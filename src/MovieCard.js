import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
    const navigate = useNavigate();
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const handleClick = () => {
        navigate(`/movie/${movie.id}`);
    };

    return (
        <div className="movie-card" onClick={handleClick}>
            <img src={posterUrl} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>Rating: {movie.vote_average}</p>
        </div>
    );
};

export default MovieCard;