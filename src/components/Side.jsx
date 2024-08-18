/* eslint-disable react/prop-types */
import Products from "./Products";

const Side = ({ check }) => {
  if (Object.keys(check).length === 0) {
    return (
      <div className="hidden flex-col bg-white p-8 mt-[5rem] lg:mr-[10rem] rounded-xl mb-[5rem] lg:mb-[48rem]">
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
    <div className="flex-col flex bg-white p-8 mt-[5rem] h-[20rem] lg:mr-[6rem] rounded-xl pb-[5rem] lg:pb-[40rem]">
       <h1 className="text-[#C83B0F] font-bold text-xl">Your Cart</h1>
    
      {Object.keys(check).map((item, index) => (
        <Products
          key={index}
          things={check[item].quantity} // Pass quantity
          me={item}
          price={check[item].price} // Pass price
        />
      ))}
   
    </div>
  );
};

export default Side;
