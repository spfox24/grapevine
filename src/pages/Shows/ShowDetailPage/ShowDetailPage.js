import { useState, useEffect } from 'react';
import { fetchShow } from '../../../services/showService';
import { Link } from 'react-router-dom';
import './ShowDetailPage.css';


export default function ShowDetailPage(props) {

    const [ showData, setShowData ] = useState({
        show: {
            original_name: '',
            overview: '',
        }
    });
    
    const showId = window.location.pathname.split('/')[2]
    
    useEffect(() => {
        async function getShowData() {
          const { data } = await fetchShow(showId);
            setShowData({ show: data });
        }
    
        getShowData();
    
      }, [showId]);
    
    const show = showData.show

    return (
        <main className="Page">
            <section className="ShowDetail">
                <div className="ShowPoster">
                    <img
                    src={`https://image.tmdb.org/t/p/w300/${show.poster_path}`} 
                    alt={show.original_name} 
                    />
                </div>
                <div className="ShowDesc">
                    <h1 className="movie-title">{show.original_name}</h1>
                    <hr/>
                    <p>{show.overview}</p>
                    <div className="detail-links">
                        <Link className="sdetail-link" to="/shows">
                                Favorite <i class="fas fa-heart"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};