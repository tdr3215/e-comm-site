import Product from "./Product";

const Inventory = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3-md">
          <Product
            name="Sweater"
            description="A fluffy sweater ready for winter"
            imgURL="https://images.unsplash.com/photo-1581497396202-5645e76a3a8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          />
        </div>
      </div>
    </div>
  );
};
export default Inventory;
