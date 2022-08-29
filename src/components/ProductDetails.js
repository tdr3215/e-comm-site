import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import api from "../api/products";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState("");

  const findProduct = async () => {
    const res = await api.get(`/products/${id}`);
    return res.data;
  };

  const navigate = useNavigate();
  useEffect(() => {
    const findByID = async () => {
      const found = await findProduct();
      if (found) {
        setProduct(found);
      }
    };
    findByID(id);
  }, []);

  const delProduct = async () => {
    await api.delete(`/products/${id}`);
    navigate("/products");
  };

  return (
    <div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 mx-auto">
            <h1>{product.name}</h1>
            <img
              className="img"
              src={product.imgURL}
              style={{ maxWidth: "32rem" }}
            />
          </div>

          {/* Card */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h6 className="card-subtitle mb-2">#{product.name}</h6>
                <p className="card-text">{product.description}</p>
                <span>${product.price}</span>
              </div>
            </div>
            <button className="btn btn-info">Add to Cart</button>
            <Link to={`/products/${id}/edit`} className="btn btn-warning">
              Edit
            </Link>
            <a href="#" onClick={delProduct} className="btn btn-danger">
              Delete
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
