import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../img/gvlogo.png';

const NavBar = (props) => {
    return (
        <nav className="NavBar">
            <ul className="links">
                <li className="Logo-link">
                    <Link to='/'>
                        <img src={logo} className="Logo"/>
                    </Link>
                </li>
                <li className="nav-link">
                    <Link to='/login' className="NavBar-link">Login</Link>
                </li>
                <li className="nav-link">
                <Link to='' className="NavBar-link">Logout</Link>
                </li>
                <li className="nav-link">
                    <Link to='/signup' className="NavBar-link">Signup</Link>
                </li>
                <li className="nav-link">
                    <Link to='/dashboard' className="NavBar-link">My Grapevine</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;