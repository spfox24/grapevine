import { Link } from 'react-router-dom';
import './MovieCard.css';

export default function MovieCard(props) {

    return (
        <Link key={props.movie.id} to={`/movies/${props.movie.id}`}>
            <div className="MovieCard">
                <img
                    src={`https://image.tmdb.org/t/p/w300/${props.movie.poster_path}`} 
                    alt={props.movie.original_title} 
                    />
            </div>
        </Link>
    );
};