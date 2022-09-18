import { useState, useEffect } from "react";
import { auth, db, logout } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import {
  query,
  collection,
  getDocs,
  where,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import Product from "./Product";
import { Link } from "react-router-dom";
import data from "../data/db.json";
import "../css/Inventory.css";
import api from "../api/products";

const getProducts = async () => {
  const res = await api.get("/products");
  return res.data;
};

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const [q, setQ] = useState("");

  const filterProducts = async () => {
    try {
      const productList = await getProducts();
      const found = await productList.find(
        (p) => p.name.toUpperCase() === query.toUpperCase()
      );
      navigate(`/products/${found.id}`);
    } catch (err) {
      console.error(err);
      navigate("/error");
    }
  };
  // API calls

  const navigate = useNavigate();

  // const fetchCart = async ()=>{

  // }

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");

    const getAllProducts = async () => {
      const allProducts = await getProducts();

      if (allProducts) {
        setInventory(allProducts);
      }
    };
    getAllProducts();
  }, [user, loading]);

  return (
    <div className="container">
      <div className="row">
        <form
          className="d-flex mb-5 mt-5"
          role="search"
          onSubmit={filterProducts}
        >
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
            }}
          />

          <button className="btn btn-success" type="submit">
            Search
          </button>
        </form>
        {data &&
          inventory.map((product, i) => {
            return (
              <Product
                key={i}
                imgURL={product.imgURL}
                name={product.name}
                description={product.description}
                id={product.id}
              />
            );
          })}
      </div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link className="btn btn-warning" to="/new">
            Add New Product
          </Link>
          <div className="mx-auto">
            <Link to={"/"} className="btn btn-info" onClick={logout}>
              Signout
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export { getProducts };
export default Inventory;
