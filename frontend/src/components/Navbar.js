import './Navbar.css';
import {Link} from 'react-router-dom';


const Navbar = ({click}) => {
    return(
        <nav className="navbar">
            <div className="navbar__logo">
                <h2>Shopping experince</h2>

            </div>

            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className="cart__link">
                    <i className="fas fa-shopping-cart"></i>
                    <span>
                    cart
                    </span>
                    <span className="cartlogo__badge">0</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                   shop
                    </Link>
                </li>
            </ul>
             <div className="hamburger__menu" onClick={click}>
                 <div></div>
                 <div></div>
                 <div></div>
             </div>
        </nav>
    )
}

export default Navbar
