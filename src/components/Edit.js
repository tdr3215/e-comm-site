import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/products";
const Edit = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imgURL, setimgURL] = useState("");
  const [currProduct, setCurrProduct] = useState("");

  const navigate = useNavigate();
  let newData = {
    id: id,
    name: name,
    description: description,
    price: price,
    imgURL: imgURL,
  };

  const handleUpdate = async () => {
    const res = await api.put(`/products/${id}`, newData);
    setCurrProduct(res.data);
    navigate("/products");
  };

  const findProduct = async () => {
    const res = await api.get(`/products/${id}`);
    return res.data;
  };
  useEffect(() => {
    const getProduct = async () => {
      const found = await findProduct();
      setCurrProduct(found);
    };
    getProduct();
  }, [currProduct]);

  //   JSX
  return (
    <div className="container">
      <div className="row">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              defaultValue={currProduct.name}
              onChange={(e) => {
                e ? setName(e.target.value) : setName(name);
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
              defaultValue={currProduct.description}
              onChange={(e) => {
                e
                  ? setDescription(e.target.value)
                  : setDescription(description);
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
              defaultValue={currProduct.price}
              onChange={(e) => {
                e ? setPrice(e.target.value) : setPrice(price);
              }}
              aria-label="Dollar amount (with dot and two decimal places)"
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group mb-3">
              <span className="input-group-text">https://example.com/img</span>
              <input
                type="text"
                className="form-control"
                id="basic-url"
                defaultValue={currProduct.imgURL}
                onChange={(e) => {
                  e ? setimgURL(e.target.value) : setimgURL(imgURL);
                }}
                aria-describedby="basic-addon3"
              />
            </div>
          </div>
        </form>
        <div>
          <button
            className="btn btn-success"
            type="submit"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
