import { useState, useEffect } from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
import data from "../data/db.json";
import "../css/Inventory.css";
import api from "../api/products";

const Inventory = () => {
  const [inventory, setInventory] = useState([]);

  // API calls

  const getProducts = async () => {
    const res = await api.get("/products");
    return res.data;
  };

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
      <div className="row content mx-auto">
        <Link to={"/new"} className="btn btn-info">
          Add New Product
        </Link>
        <div className="col">
          <div className="row mt-4">
            <div className="col">
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
        </div>
      </div>
    </div>
  );
};
export default Inventory;
