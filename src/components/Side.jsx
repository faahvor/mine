/* eslint-disable react/prop-types */
import Products from "./Products";

const Side = ({ check,handleRemoveItem }) => {
const totalItems = Object.keys(check).reduce((total,item)=>{
  return total + check[item].quantity
},0)

  if (Object.keys(check).length === 0) {
    return (
      <div className="flex flex-col bg-white p-8 mt-[5rem] lg:mr-[10rem] rounded-xl mb-[5rem] lg:mb-[48rem]">
        <img
          src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1723192574/illustration-empty-cart_vwtvtq.svg"
          alt=""
        />
        <h1 className="flex justify-center text-[#5f2a1b] font-semibold">
          Your added items will appear here
        </h1>
      </div>
    );
  }

  return (
    <div className="flex-col flex bg-white p-8 mt-[5rem]  lg:mr-[6rem] rounded-xl   mb-[50rem]">
       <h1 className="text-[#C83B0F] font-bold text-xl">Your Cart <span>{totalItems}</span> </h1>
    
      {Object.keys(check).map((item, index) => (
        <Products
          key={index}
          things={check[item].quantity} // Pass quantity
          me={item}
          price={check[item].price} // Pass price
          onRemove={handleRemoveItem}
        />
      ))}
      <div className="flex justify-center items-center mt-4">
    <button className=" text-center bg-[#C83B0F] py-2 px-[3rem] w-[10rem] rounded-full text-white">Checkout</button>
    </div>
    </div>
  );
};

export default Side;
