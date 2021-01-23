import { useState, useEffect } from 'react';
import { fetchBook } from '../../../services/bookService';
import './BookDetail.css';


export default function BookDetailPage(props) {

    const [ bookData, setBookData ] = useState({
            book: {},
    });
    
    const bookId = window.location.pathname.split('/')[2]
    
    useEffect(() => {
        async function getBookData() {
          const data = await fetchBook(bookId);
            setBookData({ book: data });
        }
    
        getBookData();
    
      }, [bookId]);

    const book = bookData.book.bookData;

    return (

        <main className="Page">
            <section className="BookDetail">
                <div className="BookPoster">
                    <img
                    src={book && book.book_image} 
                    alt={book && book.title} 
                    />
                </div>
                <div className="BookDesc">
                    <h1 className="book-title">{book && book.title}</h1>
                    <hr/>
                    <h3 className="book-author">{book && book.author}</h3>
                    <p className="book-text">{book && book.description}</p>
                </div>
            </section>
        </main>
    );
};