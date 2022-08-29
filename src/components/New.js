import { useNavigate } from "react-router-dom";
import api from "../api/products";
import { useState } from "react";
import { v4 as uuid } from "uuid";
const New = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [imgURL, setimgURL] = useState("");

  const data = {
    id: uuid(),
    name: name,
    description: description,
    price: price,
    imgURL: imgURL,
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const postProduct = await api.post("http://localhost:8000/products", data);
    if (postProduct) {
      navigate("/products");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              className="form-control"
              name="name"
              placeholder="Add product name here"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              name="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">$</span>
            <span className="input-group-text">0.00</span>

            <input
              type="number"
              className="form-control"
              name="price"
              value={price}
              aria-label="Dollar amount (with dot and two decimal places)"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group mb-3">
              <span className="input-group-text">https://example.com/img</span>
              <input
                value={imgURL}
                onChange={(e) => {
                  setimgURL(e.target.value);
                }}
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
              />
            </div>
          </div>
        </form>
        <div>
          <button
            className="btn btn-success"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default New;
