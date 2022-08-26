const New = () => {
  const handleSubmit = () => {
    // TODO: add info to json database
  };

  return (
    <div className="container">
      <div className="row">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Add product name here"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea className="form-control" id="description"></textarea>
          </div>
          <div className="input-group mb-3">
            <div></div>
            <span className="input-group-text">$</span>
            <span className="input-group-text">0.00</span>

            <input
              type="text"
              className="form-control"
              id="price"
              aria-label="Dollar amount (with dot and two decimal places)"
            />
          </div>
          <div className="input-group mb-3">
            <input type="file" className="form-control" id="imgURL" />
            <label className="input-group-text" htmlFor="imgURL">
              Upload
            </label>
          </div>
        </form>
        <div>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default New;
