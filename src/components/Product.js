import { Link } from "react-router-dom";
import "../css/Product.css";

const Product = (props) => {
  const { name, description, imgURL, id } = props;

  return (
    <div className="col-lg-4">
      <div className="card mb-4">
        <img src={imgURL} className="card-img-top pt-3" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>

          <Link to={`/products/${id}`} className="btn btn-info">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
