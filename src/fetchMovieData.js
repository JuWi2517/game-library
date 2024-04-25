async function fetchPopularMovies(query) {
    const apiKey = 'd7ffd56e19cec6ed31c9c50da27ec0c9'; // replace with your TMDB API key
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

    if (query) {
        url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    return data.results;
}

export default fetchPopularMovies;