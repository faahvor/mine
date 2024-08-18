/* eslint-disable react/prop-types */
const Products = ({ things, me, price }) => {
  return (
    <>
     <div >
      <div className="flex flex-col">
        <h3 className="flex h-8 justify-between">
          <p className="text-black font-semibold">{me}</p>
          <span className="text-center h-8 w-8 rounded-full border-2 border-grey-400 text-xl font-medium">
            x{things}
          </span>
        </h3>
        <div>
          <p className="flex gap-6">
            <span className="text-[#C83B0F] font-semibold">{things}X</span>
            <span>@{me}</span>
            <span className="text-[#C83B0F] font-semibold">${price * things}</span>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Products;
