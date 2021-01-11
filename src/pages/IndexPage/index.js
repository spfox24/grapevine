import './IndexPage.css';
import { Link } from 'react-router-dom';
import ContentCard from '../../components/ContentCard';


const IndexPage = (props) => {
    return (
        <div className="Page">

            <div className="t">
                <div className="headline">
                    <h1 className="IndexHeader">Share bingeable content<br/> through the Grapevine</h1>
                </div>
                <div>
                    <Link to='/signup' className="signup-link">
                        <button className="Button">Get Started</button>
                    </Link>
                </div>
            </div>

            <div className="m">
                    <ContentCard 
                        id={1}
                        content="Movies"
                    />
                    <ContentCard 
                        id={2}
                        content="Shows"
                    />
                    <ContentCard 
                        id={3}
                        content="Books"
                    />
            </div>
            
            <div className="b">
                <h2 className="headline-bottom">Help grow our community by following us on any of our <br/>social media platforms</h2>
                <p className="text-content"><strong>Grapevine Social&copy;</strong> was designed to be a community driven application with what is trending now. Many times we get recommendations from friends or family for what content to stream, listen to, or read. <strong>Grapevine Social&copy;</strong> brings your community together all in one place. <br/>
                <br/>What will be your next great binge?</p>
            </div>

        </div>   
    );
};

export default IndexPage;