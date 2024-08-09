import React from "react";
const Description = ({ describe }) => {
  return (
    <div className="flex flex-col pt-8">
      <h1 className="text-[#a09e9d] text-sm">{describe.type}</h1>
      <h3 className="font-bold text-sm">{describe.name}</h3>
      <h2 className="text-[#C83B0F] font-bold">{describe.price}</h2>
    </div>
  );
};
export default Description;
