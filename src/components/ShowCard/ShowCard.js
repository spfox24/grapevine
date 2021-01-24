import { Link } from 'react-router-dom';
import './ShowCard.css';

export default function ShowCard(props) {

    return (
        <Link key={props.show.id} to={`/shows/${props.show.id}`}>
            <div className="ShowCard">
                <img
                    src={`https://image.tmdb.org/t/p/w300/${props.show.poster_path}`} 
                    alt={props.show.original_name} 
                    />
            </div>
        </Link>
    );
};