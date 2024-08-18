/* eslint-disable react/prop-types */
const Button = ({ setCount, count ,product,handleSelectedProduct}) => {
  const increment = () => {
    setCount(count + 1);
    handleSelectedProduct(product);
  };
  const decrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  return (
    <div className="relative flex justify-center ">
      <button
        className=" bg-[#C83B25] flex justify-between gap-6 px-4 py-3 lg:py-2 md:py-1 absolute 
      bottom-[-20px] md:bottom-[-14px] lg:text-sm md:text-[10px] text-sm font-semibold rounded-full"
      >
        <span
          className="hover:bg-white rounded-full border-2 border-white px-2"
          onClick={decrement}
        >
          -
        </span>
        <span>{count}</span>
        <span
          className="hover:bg-white rounded-full border-2 border-white px-2"
          onClick={increment}
        >
          +
        </span>
      </button>
    </div>
  );
};
export default Button;
