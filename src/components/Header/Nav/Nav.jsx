import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import './Nav.css'

export default function Nav() {
  return (
    <nav className="header__nav nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/">Shop</Link>
        </li>

        <li className="nav__item">
          <Link to="/cart">
            <ShoppingCart size={50} color="white" weight="fill" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
