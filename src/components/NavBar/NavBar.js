import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../img/gvlogo.png';

const NavBar = (props) => {
    return (
        <nav className="NavBar">
            <ul className="links">
                <li className="Logo-link">
                    <Link to='/'>
                        <img src={logo} className="Logo" alt="logo"/>
                    </Link>
                </li>
                <li className="nav-link">
                    <Link to='/movies'className="NavBar-link">Movies</Link>
                </li>
                <li className="nav-link">
                    <Link to='/shows'className="NavBar-link">Shows</Link>
                </li>
                <li className="nav-link">
                    <Link to='/books'className="NavBar-link">Books</Link>
                </li>
                {
                    props.user ?
                    <>
                        <li className="nav-link">
                            <Link to='/dashboard' className="NavBar-link">My Grapevine</Link>
                        </li>
                        <li className="nav-link">
                            <Link to='' onClick={props.handleLogout} className="NavBar-link">Logout</Link>
                        </li>
                    </>
                    :
                    <>
                        <li className="nav-link">
                            <Link to='/login' className="NavBar-link">Login</Link>
                        </li>
                        <li className="nav-link">
                            <Link to='/signup' className="NavBar-link-signup">Signup</Link>
                        </li>
                    </>
                }
            </ul>
        </nav>
    );
};

export default NavBar;