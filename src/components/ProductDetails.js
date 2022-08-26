import { useParams } from "react-router-dom";
import data from "../data/db.json";
const ProductDetails = () => {
  let { id } = useParams();
  id = parseInt(id);

  return (
    <div>
      <div className="container">
        {data &&
          data.products.map((p) => {
            if (p.id === parseInt(id)) {
              return (
                <div className="row align-items-center">
                  <div className="col-md-4 mx-auto">
                    <h1>{p.name}</h1>
                    <img
                      className="img"
                      src={process.env.PUBLIC_URL + p.imgURL}
                      style={{ width: "500px" }}
                    />
                  </div>

                  {/* Card */}
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body">
                        <h6 className="card-subtitle mb-2">#{p.name}</h6>
                        <p className="card-text">{p.description}</p>
                        <span>${p.price}</span>
                      </div>
                    </div>
                    <button className="btn btn-warning">Add to Cart</button>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default ProductDetails;
