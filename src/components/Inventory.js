import { useState } from "react";
import Product from "./Product";
import scarf from "../images/scarf.png";
import sweater from "../images/sweater.png";
import hat from "../images/hat.png";
const Inventory = () => {
  // TODO: generate an empty array in state
  //   console.log(hat);

  console.log(scarf);
  const [inventory, setInventory] = useState([]);

  // TODO: add btn for creating new product

  const showAll = () => {
    setInventory([
      {
        id: 1,
        name: "Scarf",
        description: "Don't let the storm stop you from making snow angels",
        imgURL: scarf,
      },
      {
        id: 2,
        name: "Sweater",
        description: "A fluffy sweater ready for winter",
        imgURL: sweater,
      },
      {
        id: 3,
        name: "Hat",
        description: "A cozy hat to keep you warm at a campfire",
        imgURL: hat,
      },
    ]);
  };

  // TODO: add functionality for individual page for each product

  return (
    <div className="container">
      <div className="row content mx-auto">
        <button className="btn btn-info" onClick={showAll}>
          Populate Page
        </button>
        <div className="col">
          <div className="row mt-4">
            <div className="col">
              {inventory.map((product) => {
                return (
                  <Product
                    key={product.id}
                    imgURL={product.imgURL}
                    name={product.name}
                    description={product.description}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Inventory;
