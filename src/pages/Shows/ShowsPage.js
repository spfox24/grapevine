import { useState, useEffect } from 'react';
import { fetchShows } from '../../services/showService';
import ShowCard from '../../components/ShowCard/ShowCard';
import './ShowsPage.css';



export default function ShowsPage(props) {

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

    async function handlePaginate(pageNum) {
        try {
            const { data } = await fetchShows(pageNum);
            setShowData({ nowStreaming: data });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        async function getShowData() {
          const { data } = await fetchShows();
            setShowData({ nowStreaming: data });
        }

        getShowData();

      }, []);

      const page = showData.nowStreaming.page;
      const totalPages = showData.nowStreaming.total_pages;

    return (
        <section className="t">
            <div className="headline">
                <h1 className="ShowHeader">Now Streaming</h1>
            </div>
            <>
            <div className="ShowCards">
            { showData.nowStreaming.results.map(show =>
                <ShowCard 
                {...props}
                show={show}
                />
                )}
            </div>
            </>
            <div className="b">
                <button onClick={() => handlePaginate(page - 1 == 0 ? 1 : page - 1)}>Previous</button>
                <button onClick={() => handlePaginate(page + 1 > totalPages ? totalPages : page + 1 )}>Next</button>
            </div>
        </section> 
    );
};