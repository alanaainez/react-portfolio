import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
            <ul>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to= "/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            </nav>
        </header>
    );
}

export default Header;