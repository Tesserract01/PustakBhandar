import { NavLink, Link } from 'react-router-dom';
import { FaBookOpen, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { useStore } from '../context/StoreContext.jsx';
import { categories } from '../data/books.js';

export default function Navbar() {
  const { cartCount } = useStore();
  const shopCategories = categories.filter((category) => category !== 'All');
  const navClass = ({ isActive }) => `nav-link nav-link-base${isActive ? ' active' : ''}`;
  const navActionClass = ({ isActive }) =>
    `nav-link nav-link-base nav-icon-action${isActive ? ' active' : ''}`;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top main-navbar">
      <div className="container navbar-shell">
        <Link className="navbar-brand d-flex align-items-center gap-2 fw-bold mb-0" to="/">
          <FaBookOpen className="brand-icon" />
          PustakBhandar
        </Link>
        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse mt-3 mt-lg-0" id="mainNavbar">
          <ul className="navbar-nav ms-lg-4 me-auto mb-2 mb-lg-0 align-items-lg-center navbar-links">
            <li className="nav-item">
              <NavLink className={navClass} to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navClass} to="/shop">
                Shop
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link nav-link-base dropdown-toggle"
                id="categoryDropdown"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </button>
              <ul className="dropdown-menu" aria-labelledby="categoryDropdown">
                {shopCategories.map((category) => (
                  <li key={category}>
                    <Link className="dropdown-item" to={`/shop?category=${encodeURIComponent(category)}`}>
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav ms-lg-auto mb-2 mb-lg-0 align-items-lg-center navbar-actions">
            <li className="nav-item">
              <NavLink className={navActionClass} to="/cart" aria-label="Cart" title="Cart">
                <FaShoppingCart />
                {cartCount > 0 && (
                  <span className="badge rounded-pill text-bg-secondary nav-count nav-count-icon">
                    {cartCount}
                  </span>
                )}
                <span className="visually-hidden">Cart</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={navActionClass}
                to="/profile"
                aria-label="Profile"
                title="Profile"
              >
                <FaUserCircle />
                <span className="visually-hidden">Profile</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
