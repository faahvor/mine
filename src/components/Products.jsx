/* eslint-disable react/prop-types */

const Products = ({ things }) => {
  return (
    <div className=" flex-col bg-white p-8 mt-[5rem] lg:mr-[6rem] rounded-xl mb-[5rem] lg:mb-[40rem]">
      <h1 className="text-[#C83B0F] font-bold text-xl">Your Carts 0</h1>
      <div className="flex flex-col">
        <p className="flex h-8 justify-between ">
          <p className="text-black font-semibold">{things}</p>
          <span className="text-center h-8 w-8 rounded-full border-2 mb-[8rem] border-grey-400 text-xl font-medium">
            x
          </span>
        </p>
        <p className="flex gap-6">
          <span className="text-[#C83B0F] font-semibold">
            {(things * things).toFixed(2)}X
          </span>
          <span>@{things}</span>
          <span className="text-[#C83B0F] font-semibold">${things}</span>
        </p>
      </div>
    </div>
  );
};

export default Products;
