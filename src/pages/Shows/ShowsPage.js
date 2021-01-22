import ShowCard from '../../components/ShowCard/ShowCard';
import './ShowsPage.css';



export default function ShowsPage(props) {

    return (
        <section className="t">
            <div className="headline">
                <h1 className="ShowHeader">Now Streaming</h1>
            </div>
            <div className="ShowCards">
                <ShowCard 
                {...props}
                />
            </div>
            <div className="b">
        
            </div>
        </section> 
    );
};