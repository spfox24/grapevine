import BookCard from '../../components/BookCard/BookCard';
import './BooksPage.css';



export default function BooksPage(props) {

    return (
        <section className="t">
            <div className="headline">
                <h1 className="BookHeader">Now Reading</h1>
            </div>
            <div className="BookCards">
                <BookCard
                {...props}
                />
            </div>
            <div className="b">
        
            </div>
        </section> 
    );
};