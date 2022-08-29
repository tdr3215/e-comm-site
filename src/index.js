import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import New from "./components/New";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Inventory from "./components/Inventory";
import ProductDetails from "./components/ProductDetails";
import Edit from "./components/Edit";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Navbar />
    <Routes>
      <Route name="Landing" exact path="/" element={<Landing />} />
      <Route name="Home" path="/products" element={<Inventory />} />
      <Route name="New" path="/new" element={<New />} />
      <Route
        name="ProductDetails"
        path="products/:id"
        element={<ProductDetails />}
      />
      <Route name="Edit" path="/products/:id/edit" element={<Edit />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
