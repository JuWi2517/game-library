import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieCard from "./MovieCard";
import fetchPopularMovies from "./fetchMovieData";
import "./HomePage.css"

function HomePage() {
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            navigate('/');
        }

        const handleUnload = () => {
            localStorage.removeItem('isLoggedIn');
        };

        window.addEventListener('unload', handleUnload);

        return () => {
            window.removeEventListener('unload', handleUnload);
        };
    }, [navigate]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchPopularMovies(searchQuery);
            setMovies(data);
        };

        fetchData();
    }, [searchQuery]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="homepage-container">
            <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search for a movie..." />
            <div className="movie-list">
                {movies.map((movie, index) => (
                    <MovieCard
                        key={index}
                        movie={movie}
                    />
                ))}
            </div>
        </div>
    );
}

export default HomePage;

