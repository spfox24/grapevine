import './Footer.css';
import logo from '../../img/gvlogo.png';
import { Link } from 'react-router-dom';

function Footer (props) {
    return (
        
    <div className="footer-container">
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>Navigation</h2>
                        <Link to="/signup">Signup</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/movies">Movies</Link>
                        <Link to="/shows">Shows</Link>
                        <Link to="/books">Books</Link>
                        <Link to="/">About Us</Link>
                        <Link to="/">Terms of Service</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Social Media</h2>
                        <a href="https://www.facebook.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Facebook"
                        >Facebook</a>
                        <a href="https://www.instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                        >Instagram</a>
                        <a href="https://twitter.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Twitter"
                        >Twitter</a>
                        <a href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >GitHub</a>
                </div>
                <div className="footer-link-items">
                    <h2>Watch</h2>
                        <a href="https://www.netflix.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Netflix"
                        >Netflix</a>
                        <a href="https://www.hulu.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Hulu"
                        >Hulu</a>
                        <a href="https://www.primevideo.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Prime Video"
                        >Prime Video</a>
                        <a href="https://www.disneyplus.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Disney+"
                        >Disney+</a>
                        <a href="https://www.hbomax.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="HBO Max"
                        >HBO Max</a>
                </div>
                <div className="footer-link-items">
                    <h2>Read</h2>
                        <a href="https://www.scribd.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Scribd"
                        >Scribd</a>
                        <a href="https://www.amazon.com/kindle-dbs/hz/subscribe/ku?*entries*=0&_encoding=UTF8&*Version*=1&shoppingPortalEnabled=true"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Kindle Unlimited"
                        >Kindle Unlimited</a>
                        <a href="https://libbyapp.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Libby"
                        >Libby</a>
                        <a href="https://www.goodreads.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Goodreads"
                        >Goodreads</a>
                        <a href="https://www.bookofthemonth.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Book of the Month"
                        >Book of the Month</a>
                </div>
                <div className="footer-link-items">
                    <h2>Listen</h2>
                        <a href="https://www.spotify.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Spotify"
                        >Spotify</a>
                        <a href="https://www.apple.com/apple-music/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Apple Music"
                        >Apple Music</a>
                        <a href="https://www.audible.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Audible"
                        >Audible</a>
                        <a href="https://soundcloud.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="SoundCloud"
                        >SoundCloud</a>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            <img src={logo} className="logo-footer" alt="logo"/>
                        </Link>
                    
                    <div className="social-icons">
                        <a href="https://www.facebook.com/"
                            className="social-icon-link facebook" 
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Facebook"
                        >
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/"
                            className="social-icon-link instagram" 
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://twitter.com/"
                            className="social-icon-link twitter" 
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Twitter"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://github.com/"
                            className="social-icon-link" 
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                    </div>
                </div>
            </section>
        </div>
        <small className="website-rights">
            &copy; Grapevine All Rights Reserved {new Date().getFullYear()}
        </small>
    </div>
    )
};

export default Footer;