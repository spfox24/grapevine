import './ContentCard.css';

function ContentCard (props) {


    return (
        <main className="Cards">
            <a href={props.url} className="content-link" target="_blank" rel="noreferrer">
            <div className="ContentCard">
                {props.content}
            </div>
            </a>
        </main>
    );
};

export default ContentCard;