import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../img/gvlogo.png';

const NavBar = (props) => {
    const [ click, setClick ] = useState(false)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className="NavBar">
            <Link to='/' 
                className="Logo-link" 
                onClick={closeMobileMenu}>
                <img src={logo} className="Logo" alt="logo"/>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'links active' : 'links'}>
                <li className="nav-link">
                    <Link to='/movies'
                        className="NavBar-link"
                        onClick={closeMobileMenu}>
                        Movies
                    </Link>
                </li>
                <li className="nav-link">
                    <Link to='/shows'
                        className="NavBar-link"
                        onClick={closeMobileMenu}>
                        Shows
                    </Link>
                </li>
                <li className="nav-link">
                    <Link to='/books'
                        className="NavBar-link"
                        onClick={closeMobileMenu}>
                        Books
                    </Link>
                </li>
                {
                    props.user ?
                    <>
                        <li className="nav-link">
                            <Link to='/dashboard' 
                                className="NavBar-link"
                                onClick={handleClick}>
                                My Grapevine
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to='' onClick={props.handleLogout} className="NavBar-link">Logout</Link>
                        </li>
                    </>
                    :
                    <>
                        <li className="nav-link">
                            <Link to='/login' 
                                className="NavBar-link"
                                onClick={closeMobileMenu}>
                                Login
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to='/signup' 
                                className="NavBar-link-signup"
                                onClick={closeMobileMenu}>
                                Signup
                            </Link>
                        </li>
                    </>
                }
            </ul>
        </nav>
    );
};

export default NavBar;