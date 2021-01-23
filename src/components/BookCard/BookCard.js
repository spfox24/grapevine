import { useEffect, useState } from 'react';
import { fetchBooks } from '../../services/bookService';
import './BookCard.css';

export default function BookCard(props) {

    const [ bookData, setBookData ] = useState({
            nowReading: {
                results: {
                    lists: [{
                        books: [],
                    }],
                },
            }
    });

    useEffect(() => {
        async function getBookData() {
            const { data } = await fetchBooks();
                setBookData({ nowReading: data });
        }

        getBookData();

    }, []);
    
    const booksArr = bookData.nowReading.results.lists[0].books;

    return (
            booksArr.map(book => 
        <>
            <div className="BookCard">
                    <img 
                        src={book.book_image} 
                        alt={book.title}
                    />
            </div>
        </>
        )
    );
};
