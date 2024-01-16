import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
// import "./index.css";

// import reportWebVitals from "./reportWebVitals";
// import New from "./components/New.js";
// import Navbar from "./components/Navbar";
// import Login from "./components/Login";
// import Inventory from "./components/Inventorvy";
// import ProductDetails from "./components/ProductDetails";
// import Edit from "./components/Edit";
// import Error from "./components/Error";
// import Checkout from "./components/Checkout";
import { Register } from './components/Register';
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Router basename={"/"}>
//     <Navbar />
//     <Routes>
//       <Route name="Login" exact path="/" element={<Login />} />
//       <Route name="Register" path="/register" element={<Register />} />
//       <Route name="Home" path="/products" element={<Inventory />} />
//       <Route name="New" path="/new" element={<New />} />
//       <Route name="Error" path="/error" element={<Error />} />
//       <Route
//         name="ProductDetails"
//         path="products/:id"
//         element={<ProductDetails />}
//       />
//       <Route name="Edit" path="/products/:id/edit" element={<Edit />} />
//       <Route name="Checkout" path="/checkout" element={<Checkout />} />
//     </Routes>
//   </Router>
// );
const App: React.FC = () => (
  <Router basename="/">
    <Routes>
      <Route path="/register" element={<Register />} />
    </Routes>
  </Router>
);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
);
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
