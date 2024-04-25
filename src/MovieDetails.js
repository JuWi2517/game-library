import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetails.css';

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const apiKey = 'd7ffd56e19cec6ed31c9c50da27ec0c9';

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=credits`;
            const response = await fetch(url);
            const data = await response.json();
            setMovie(data);
        };

        fetchMovieDetails();
    }, [id]);

    if (!movie) return null;

    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <div className="movie-details">
            <div className="description">
                <div className="poster">
                    <img src={posterUrl} alt={movie.title} />
                </div>
                <div className="details">
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <h3>Director</h3>
                    <p>{movie.credits.crew.find(person => person.job === 'Director').name}</p>
                </div>
            </div>
            <div className="cast">
                {movie.credits.cast.slice(0, 10).map(actor => (
                    <div className="actor" key={actor.cast_id}>
                        <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} />
                        <span>{actor.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieDetails;