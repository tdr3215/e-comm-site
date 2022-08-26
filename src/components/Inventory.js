import { useState, useEffect } from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
import data from "../data/db.json";
import "../css/Inventory.css";

const Inventory = () => {
  const [inventory, setInventory] = useState([]);

  const handleDelete = (id) => {
    // TODO: delete product from dattabase based off of id
  };

  const handleEdit = () => {
    // TODO: edit product and update database
  };

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        setInventory(data);
      });
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
                      imgURL={process.env.PUBLIC_URL + product.imgURL}
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
