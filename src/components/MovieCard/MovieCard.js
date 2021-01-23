import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovies } from '../../services/movieService';
import './MovieCard.css';

export default function MovieCard(props) {

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
                    <>
                    <Link key={movie.id} to={`/movies/${movie.id}`}>
                        <div className="MovieCard">
                            <img
                                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} 
                                alt={movie.original_title} 
                                />
                        </div>
                    </Link>
                    </>
                 )
    );
};