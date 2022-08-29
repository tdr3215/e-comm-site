import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/products";
const Edit = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imgURL, setimgURL] = useState("");
  const navigate = useNavigate();

  const handleUpdate = async (p) => {
    await api.put(`/products/${id}`, {
      name,
      description,
      price,
      imgURL,
    });
    navigate(`/products/${id}`);
  };

  useEffect(() => {
    api
      .get(`/products/${id}`)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setName(data.name);
        setDescription(data.description);
        setPrice(data.price);
        setimgURL(data.imgURL);
      });
  }, []);

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
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              className="form-control"
              name="name"
              defaultValue={name}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              name="description"
              defaultValue={description}
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
              defaultValue={price}
              onChange={(e) => {
                setPrice(e.target.value);
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
                defaultValue={imgURL}
                onChange={(e) => {
                  setimgURL(e.target.value);
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
