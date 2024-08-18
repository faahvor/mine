/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const Products = ({ things, me }) => {
  if (!me) {
    return null;
  }
  return (
    <div className=" flex-col bg-white p-8 mt-[5rem] lg:mr-[6rem] rounded-xl mb-[5rem] lg:mb-[40rem]">
      <h1 className="text-[#C83B0F] font-bold text-xl">Your Carts 0</h1>
      <div className="flex flex-col">
        <h3 className="flex h-8 justify-between ">
          <p className="text-black font-semibold">{things}</p>
          <span className="text-center h-8 w-8 rounded-full border-2 mb-[8rem] border-grey-400 text-xl font-medium">
            x
          </span>
        </h3>

        <div>
          <p className="flex gap-6">
            <span className="text-[#C83B0F] font-semibold">{things}X</span>
            <span>@{me}</span>
            <span className="text-[#C83B0F] font-semibold">${me}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
