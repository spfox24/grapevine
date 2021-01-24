import { useState, useEffect } from 'react';
import { fetchMovies } from '../../services/movieService';
import MovieCard from '../../components/MovieCard/MovieCard';
import './MoviesPage.css';

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

    async function handlePaginate(pageNum) {
        try {
            const { data } = await fetchMovies(pageNum);
            setMovieData({ nowPlaying: data });
        } catch (error) {
            console.log(error)
        } 
    }

    useEffect(() => {
        async function getMovieData() {
          const { data } = await fetchMovies();
            setMovieData({ nowPlaying: data });
        }
        getMovieData();

      }, []);

      const page = movieData.nowPlaying.page;
      const totalPages = movieData.nowPlaying.total_pages;

    return (
        <section className="t">
            <div className="headline">
                <h1 className="MovieHeader">Now Playing</h1>
            </div>
            <>
            <div className="MovieCards">
            { movieData.nowPlaying.results.map(movie => 
                <MovieCard
                movie={movie} 
                {...props}
                />
            )}
            </div>
            </>
            <div className="b">
                <button onClick={() => handlePaginate(page - 1 == 0 ? 1 : page - 1)}>Previous</button>
                <button onClick={() => handlePaginate(page + 1 > totalPages ? totalPages : page + 1 )}>Next</button>
            </div>
        </section> 
    );
};