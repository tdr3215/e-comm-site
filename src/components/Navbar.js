import { Link } from "react-router-dom";
import "../css/Navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Thread-a-Day Market
          </Link>

          <ul className="navbar-nav justify-content-evenly mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/patterns" className="nav-link">
                Patterns
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
