/* eslint-disable react/prop-types */
import Products from "./Products";
const Side = ({ count, check }) => {
  console.log("Check prop in Side:", check);
  if (check.length === 0) {
    return (
      <div className=" hidden  flex-col bg-white p-8 mt-[5rem] lg:mr-[10rem] rounded-xl mb-[5rem] lg:mb-[48rem]">
        <img
          src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1723192574/illustration-empty-cart_vwtvtq.svg"
          alt=""
        />
        <h1 className="flex justify-center text-[#5f2a1b] font-semibold">
          your added items will appear here
        </h1>
      </div>
    );
  }

  return (
    <div>
     {Object.keys(check).map((item, index) => (
        <Products
          key={index}
          things={check[item]} // Pass quantity
          me={item}
        />
      ))}
    </div>
  );
};
export default Side;
