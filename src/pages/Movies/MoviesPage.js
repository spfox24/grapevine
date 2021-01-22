import { useEffect, useState } from 'react';
import { fetchMovies } from '../../services/movieService';

export default function MoviesPage(props) {

    const [ movieData, setMovieData ] = useState({
        nowPlaying: {
            dates: {
                minimum: null,
                maximum: null
                },
            page: null,
            results: [],
            total_pages: null,
            total_results: null
        }
    });

    useEffect(() => {
        async function getMovieData() {
          const { data } = await fetchMovies();
            setMovieData({ nowPlaying: data });
        }

        getMovieData();

      }, []);

    return (
            movieData.nowPlaying.results.map(movie =>
                     <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.original_title} />
                 )
    );
};