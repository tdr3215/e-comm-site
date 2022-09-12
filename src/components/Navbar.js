import { Link, useNavigate } from "react-router-dom";
import "../css/Navbar.css";
import { getProducts } from "../components/Inventory";
import { useState } from "react";
import Error from "./Error";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filterProducts = async () => {
    try {
      const productList = await getProducts();
      const found = await productList.find(
        (p) => p.name.toUpperCase() === query.toUpperCase()
      );
      navigate(`/products/${found.id}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Thread-a-Day Market
          </Link>

          <ul className="navbar-nav justify-content-evenly mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link to="/products" className="nav-link">
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
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            <button
              onClick={filterProducts}
              className="btn btn-outline-success"
              type="submit"
            >
              Search
            </button>
            <Link className="btn btn-warning " to="/new">
              Add New Product
            </Link>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
