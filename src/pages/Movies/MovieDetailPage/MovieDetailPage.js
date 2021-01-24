import { useState, useEffect } from 'react';
import { fetchMovie } from '../../../services/movieService';
import { Link } from 'react-router-dom';

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
                <section className="MovieDesc">
                    <h1 className="movie-title">{movie.title}</h1>
                    <hr/>
                    <p className="movie-date">Released on: {new Date(movie.release_date).toLocaleDateString()}</p>
                    <p className="movie-text">{movie.overview}</p>
                    <div className="detail-links">
                        <Link className="mdetail-link" to="/movies">
                            Favorite <i class="fas fa-heart"></i>
                        </Link>
                    </div>
                </section>
            </section>
        </main>
    );
};