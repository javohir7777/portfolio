import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link
          className="navbar-brand mx-3 navbar__brand"
          id="navbar__brand"
          to="/"
        >
          Portfolio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-grow-0"
          id="navbarSupportedContent"
        >
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0 my-2 navbar__nav"
            id="navbar__nav"
          >
            <li className="nav-item navbar__item">
              <Link to="/" className="nav-link navbar__link mx-3">
                Asosiy
              </Link>
            </li>
            <li className="nav-item navbar__item">
              <Link to="/projects" className="nav-link navbar__link mx-3">
                Skills
              </Link>
            </li>
            <li className="nav-item navbar__item">
              <Link to="/experience" className="nav-link navbar__link mx-3">
                Loyihalarim
              </Link>
            </li>
            <li className="nav-item navbar__item">
              <Link to="/contact" className="nav-link navbar__link mx-3">
                Bog'lanish
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
