import { Link } from 'react-router-dom';

import './ContentCard.css';

function ContentCard (props) {


    return (
        <main className="Cards">
            <a href={props.url} className="content-link" target="_blank">
            <div className="ContentCard">
                {props.content}
            </div>
            </a>
        </main>
    );
};

export default ContentCard;