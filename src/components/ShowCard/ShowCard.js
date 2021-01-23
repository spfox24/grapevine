import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchShows } from '../../services/showService';
import './ShowCard.css';

export default function ShowCard(props) {

    const [ showData, setShowData ] = useState({
        nowStreaming: {
            dates: {
                minimum: null,
                maximum: null
                },
            page: null,
            results: [],
            total_pages: null,
            total_results: null
        }
    });

    useEffect(() => {
        async function getShowData() {
          const { data } = await fetchShows();
            setShowData({ nowStreaming: data });
        }

        getShowData();

      }, []);

    return (
            showData.nowStreaming.results.map(show =>
                    <>
                    <Link key={show.id} to={`/shows/${show.id}`}>
                        <div className="ShowCard">
                            <img
                                src={`https://image.tmdb.org/t/p/w300/${show.poster_path}`} 
                                alt={show.original_name} 
                                />
                        </div>
                    </Link>
                    </>
                 )
    );
};