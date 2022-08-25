import { useParams } from "react-router-dom";
import data from "../data/db.json";
const ProductDetails = () => {
  let { id } = useParams();
  id = parseInt(id);

  return (
    <div>
      <div className="container">
        <div className="row">
          {data &&
            data.map((p) => {
              if (p.id === parseInt(id)) {
                return (
                  <>
                    <h1>{p.name}</h1>
                    <img src={process.env.PUBLIC_URL + p.imgURL} />
                    <p>{p.description}</p>
                    <span>${p.price}</span>
                  </>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
