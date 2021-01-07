import './Footer.css';

function Footer (props) {
    return (
    <footer className="Footer">
        Copyright &copy; All Rights Reserved {new Date().getFullYear()}
    </footer>
    )
};

export default Footer;