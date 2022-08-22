import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import New from "./components/New";
import Navbar from "./components/Navbar";
import Inventory from "./components/Inventory";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Navbar />
    <Routes>
      <Route name="Home" exact path="/" element={<Inventory />} />
      <Route name="New" path="/new" element={<New />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
