import { useState } from "react";
import Data from "./assets/mockData";
import Cover from "./components/Cover";
import Side from "./components/Side";

function App() {
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState({});

  const handleSelectedProduct = (product) => {
    setSelected((prevSelected) => {
      const newSelected = { ...prevSelected };
      
      // If quantity is 0, remove the item from the cart
      if (product.quantity <= 0) {
        delete newSelected[product.name];
      } else {
        // Update the product in the cart
        newSelected[product.name] = { 
          quantity: product.quantity, 
          price: product.price 
        };
      }
      return newSelected;
    });
  };
  const handleRemoveItem = (itemName) => {
    setSelected((prevSelected) => {
      const newSelected = { ...prevSelected };
      delete newSelected[itemName]; // Remove the item from the cart
      return newSelected;
    });
  };

  return (
    <div className="grid sm:grid-cols-[1fr,30rem] md:ml-[9rem] mx-6 md:mx-0 ">
      <div>
        <h1 className="font-bold text-5xl px-4 pt-9 mb-7">Desserts</h1>
        <Cover
          data={Data}
          handleSelectedProduct={handleSelectedProduct}
        />
      </div>
      <Side check={selected}
      handleRemoveItem={handleRemoveItem} />
    </div>
  );
}

export default App;
