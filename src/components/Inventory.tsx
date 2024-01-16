import React, { useState, useEffect, ReactComponentElement } from 'react';
// import { auth, db, logout } from "../firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
// import {
//   query,
//   collection,
//   getDocs,
//   where,
//   setDoc,
//   doc,
//   getDoc,
// } from "firebase/firestore";
import { ProductCard } from './ProductCard';
import { Link } from 'react-router-dom';
import data from '../../api/data/db.json';
import '../css/Inventory.css';
import api from '../../api/products';
import { Product } from '../utils/types/Product';

const getProducts = async () => {
  const res = await api.get('/products');
  return res.data;
};

const Inventory: React.FC = () => {
  const [inventory, setInventory] = useState([]);
  // const [user, loading, error] = useAuthState(auth);
  const [q, setQ] = useState('');

  const filterProducts = async () => {
    try {
      const productList = await getProducts();
      const found = await productList.find(
        (p: React.FC) => p.name.toUpperCase() === q.toUpperCase()
      );
      navigate(`/products/${found.id}`);
    } catch (err) {
      console.error(err);
      navigate('/error');
    }
  };
  // API calls

  const navigate = useNavigate();

  // const fetchCart = async ()=>{

  // }

  useEffect(() => {
    // if (loading) return;
    // if (!user) return navigate('/');

    const getAllProducts = async () => {
      const allProducts = await getProducts();

      if (allProducts) {
        setInventory(allProducts);
      }
    };
    getAllProducts();
  }, []);

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
          inventory.map((p: Product, i: number) => {
            return (
              <ProductCard
                key={i}
                imgURL={p.imgURL}
                name={p.name}
                description={p.description}
                id={p.id}
                price={p.price}
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
            <Link to={'/'} className="btn btn-info" onClick={() => {}}>
              Signout
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export { getProducts, Inventory };
