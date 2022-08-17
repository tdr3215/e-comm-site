const Product = (props) => {
  const { name, description, imgURL } = props;

  return (
    <div>
      <div className="card">
        <img src={imgURL} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
