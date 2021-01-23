import { useState, useEffect } from 'react';
import { fetchMovie } from '../../../services/movieService';

import './MovieDetailPage.css';


export default function MovieDetailPage(props) {

    const [ movieData, setMovieData ] = useState({
        movie: {
            title: '',
            overview: '',
        }
    });
    
    const movieId = window.location.pathname.split('/')[2]
    
    useEffect(() => {
        async function getMovieData() {
          const { data } = await fetchMovie(movieId);
            setMovieData({ movie: data });
        }
    
        getMovieData();
    
      }, [movieId]);
    
    const movie = movieData.movie

    return (
        <main className="Page">
            <section className="MovieDetail">
                <div className="MoviePoster">
                    <img
                    src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} 
                    alt={movie.original_title} 
                    />
                </div>
                <div className="MovieDesc">
                    <h1 className="movie-title">{movie.title}</h1>
                    <hr/>
                    <p className="movie-text">Released on: {new Date(movie.release_date).toLocaleDateString()}</p>
                    <p className="movie-text">{movie.overview}</p>
                </div>
            </section>
        </main>
    );
};