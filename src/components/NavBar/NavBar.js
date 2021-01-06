import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../img/gvlogo.png';

const NavBar = (props) => {
    return (
        <div className="NavBar">
            <div className="Logo-link">
                <Link to='/'>
                <img src={logo} className="Logo"/>
                </Link>
            </div>
                <ul className="links">
                    <li className="nav-link">
                        <Link to='/login' className="NavBar-link">Login</Link>
                    </li>
                    <li className="nav-link">
                        <Link to='/signup' className="NavBar-link">Signup</Link>
                    </li> 
                </ul>   
        </div>
    );
};

export default NavBar;