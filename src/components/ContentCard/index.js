import { Link } from 'react-router-dom';
import './ContentCard.css';


function ContentCard (props) {

    return (
        <main className="Cards">
             <Link to={props.url} className="content-link">
                <div className="ContentCard">
                    {props.content}
                </div>
             </Link>
        </main>
    );
};

export default ContentCard;