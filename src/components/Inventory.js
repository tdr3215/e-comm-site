import { useState, useEffect } from "react";
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

  // API calls

  useEffect(() => {
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
    </div>
  );
};

export { getProducts };
export default Inventory;
