import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBooks } from '../../services/bookService';
import './BookCard.css';

export default function BookCard(props) {

    const [ bookData, setBookData ] = useState({
        nowReading: {
            results: {
                books: [],
            }
        }
    });

    useEffect(() => {
        async function getBookData() {
            const { data } = await fetchBooks();
                setBookData({ nowReading: data });
        }

        getBookData();

    }, []);
    
    const booksArr = bookData.nowReading.results.books;

    return (
            booksArr.map(book => 
        <>
        <Link key={book.primary_isbn10} to={`/books/${book.primary_isbn10}`}>
            <div className="BookCard">
                    <img 
                        src={book.book_image} 
                        alt={book.title}
                    />
            </div>
        </Link>
        </>
        )
    );
};
