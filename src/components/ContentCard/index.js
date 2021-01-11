import { Link } from 'react-router-dom';

import './ContentCard.css';

function ContentCard (props) {


    return (
        <main className="Cards">
            <div className="ContentCard">
                {props.content}
            </div>
        </main>
    );
};

export default ContentCard;