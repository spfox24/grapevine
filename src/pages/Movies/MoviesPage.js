import MovieCard from '../../components/MovieCard/MovieCard';
import './MoviesPage.css';



export default function MoviesPage(props) {

    return (
        <section className="t">
            <div className="headline">
                <h1 className="MovieHeader">Now Playing</h1>
            </div>
            <div className="MovieCards">
                <MovieCard 
                {...props}
                />
            </div>
            <div className="b">
        
            </div>
        </section> 
    );
};