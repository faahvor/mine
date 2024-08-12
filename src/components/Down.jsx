import React, { useState } from "react";
import Cart from "./Cart";
import Description from "./Description";
import Button from "./Button";
const Down = ({ carts, words }) => {
 

  const [seconBtn, setSeconBtn] = useState(false);

  const handleClick = () => {
    setSeconBtn(true);
  };

  return (
    <div>
      {seconBtn === true ? (
        <Button  />
      ) : (
        <Cart onClick={handleClick} check={carts} />
      )}

      <Description describe={words} />
    </div>
  );
};
export default Down;
