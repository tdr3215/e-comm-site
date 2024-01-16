import { Link, useNavigate } from 'react-router-dom';
import '../css/Navbar.css';
import { getProducts } from './Inventory';
import { useEffect, useState } from 'react';
// import Error from "./Error";
import profilePic from '../images/knit.png';
import shoppingCart from '../images/shopping-cart.png';
import React from 'react';
// import { auth, db } from "../firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { query, collection, getDocs, where } from "firebase/firestore";

const Navbar: React.FC = () => {
  const [name, setName] = useState('');
  // const [user, loading, error] = useAuthState(auth);
  // const navigate = useNavigate();

  // const fetchUserName = async () => {
  //   try {
  //     const usersRef = collection(db, "users");
  //     const q = query(usersRef, where("uid", "==", user?.uid));
  //     const doc = await getDocs(q);
  //     const data = doc.docs[0].data();
  //     setName(data.name);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  useEffect(() => {
    // if (loading) return;
    // if (!user) return navigate("/");
    // fetchUserName();
  }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand">
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
          <div className="justify-content-center">
            <img className="icon img-fluid" src={profilePic} />
            <span className="mx-2">{name}</span>
            <Link to={'/checkout'}>
              <img className="icon img-fluid mx-5" src={shoppingCart} />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
