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
                        <Link to="/">Facebook</Link>
                        <Link to="/">Instagram</Link>
                        <Link to="/">Twitter</Link>
                        <Link to="/">GitHub</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Watch</h2>
                        <Link to="/">Netflix</Link>
                        <Link to="/">Hulu</Link>
                        <Link to="/">Prime Video</Link>
                        <Link to="/">Disney+</Link>
                        <Link to="/">HBO Max</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Read</h2>
                        <Link to="/">Scribd</Link>
                        <Link to="/">Kindle Unlimited</Link>
                        <Link to="/">Libby</Link>
                        <Link to="/">Goodreads</Link>
                        <Link to="/">Book of the Month</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Listen</h2>
                        <Link to="/">Spotify</Link>
                        <Link to="/">Apple Music</Link>
                        <Link to="/">Audible</Link>
                        <Link to="/">SoundCloud</Link>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            <img src={logo} className="logo-footer" alt="logo"/>
                        </Link>
                    
                    <small className="website-rights">
                        Copyright &copy; All Rights Reserved {new Date().getFullYear()}
                    </small>
                    
                    <div className="social-icons">
                        <Link className="social-icon-link facebook" 
                            to="/" 
                            target="_blank"
                            aria-label="Facebook"
                        >
                            <i class="fab fa-facebook"></i>
                        </Link>
                        <Link className="social-icon-link instagram" 
                            to="/" 
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <i class="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link twitter" 
                            to="/" 
                            target="_blank"
                            aria-label="Twitter"
                        >
                            <i class="fab fa-twitter"></i>
                        </Link>
                        <Link className="social-icon-link" 
                            to="/" 
                            target="_blank"
                            aria-label="GitHub"
                        >
                            <i class="fab fa-github"></i>
                        </Link>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    )
};

export default Footer;