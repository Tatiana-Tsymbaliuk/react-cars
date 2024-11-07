import { NavLink } from 'react-router-dom';
import logo from '../../icons/logo.png';
import '../Header/Header.css';
export const Header = () => {
  return (
    <nav className="Header">
      <div>
        <img className="logoImg" src={logo} alt="logo" />
      </div>
      <ul className="Nav">
        <li>
          <NavLink className="HomeLink" activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="HomeLink" activeClassName="active" to="/catalog">
            Catalog
          </NavLink>
        </li>
        <li className="HomeLink">
          <NavLink
            className="HomeLink"
            activeClassName="active"
            to="/favorites"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
