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
                        <Link to="/">About Us</Link>
                        <Link to="/">Terms of Service</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Social Media</h2>
                        <a href="https://www.facebook.com/">Facebook</a>
                        <a href="https://www.instagram.com/">Instagram</a>
                        <a href="https://twitter.com/">Twitter</a>
                        <a href="https://github.com/">GitHub</a>
                </div>
                <div className="footer-link-items">
                    <h2>Watch</h2>
                        <a href="https://www.netflix.com/">Netflix</a>
                        <a href="https://www.hulu.com/">Hulu</a>
                        <a href="https://www.primevideo.com/">Prime Video</a>
                        <a href="https://www.disneyplus.com/">Disney+</a>
                        <a href="https://www.hbomax.com/">HBO Max</a>
                </div>
                <div className="footer-link-items">
                    <h2>Read</h2>
                        <a href="https://www.scribd.com/">Scribd</a>
                        <a href="https://www.amazon.com/kindle-dbs/hz/subscribe/ku?*entries*=0&_encoding=UTF8&*Version*=1&shoppingPortalEnabled=true">Kindle Unlimited</a>
                        <a href="https://libbyapp.com/">Libby</a>
                        <a href="https://www.goodreads.com/">Goodreads</a>
                        <a href="https://www.bookofthemonth.com/">Book of the Month</a>
                </div>
                <div className="footer-link-items">
                    <h2>Listen</h2>
                        <a href="https://www.spotify.com/">Spotify</a>
                        <a href="https://www.apple.com/apple-music/">Apple Music</a>
                        <a href="https://www.audible.com/">Audible</a>
                        <a href="https://soundcloud.com/">SoundCloud</a>
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
                            aria-label="Facebook"
                        >
                            <i class="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/"
                            className="social-icon-link instagram" 
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://twitter.com/"
                            className="social-icon-link twitter" 
                            target="_blank"
                            aria-label="Twitter"
                        >
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="https://github.com/"
                            className="social-icon-link" 
                            target="_blank"
                            aria-label="GitHub"
                        >
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                    </div>
                </div>
            </section>
        </div>
        <small className="website-rights">
            Copyright &copy; All Rights Reserved {new Date().getFullYear()}
        </small>
    </div>
    )
};

export default Footer;