import { useState } from "react";
import Data from "./assets/mockData";
import Cover from "./components/Cover";
import Side from "./components/Side";

function App() {
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState({});

  const handleSelectedProduct = (product) => {
    setSelected(prevSelected => {
      const newSelected = { ...prevSelected };
      if (newSelected[product.name]) {
        newSelected[product.name].quantity += 1; // Increment quantity
      } else {
        newSelected[product.name] = { quantity: 1, price: product.price }; // Add new product with quantity 1
      }
      return newSelected;
    });
  };

  return (
    <div className="grid sm:grid-cols-[1fr,30rem] md:ml-[9rem] mx-6 md:mx-0 ">
      <div>
        <h1 className="font-bold text-5xl px-4 pt-9 mb-7">Desserts</h1>
        <Cover
          data={Data}
          setCount={setCount}
          count={count}
          handleSelectedProduct={handleSelectedProduct}
        />
      </div>
      <Side check={selected} />
    </div>
  );
}

export default App;
