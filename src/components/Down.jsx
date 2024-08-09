import React, { useState } from "react";
import Cart from "./Cart";
import Description from "./Description";
import Button from "./Button";
const Down = ({ carts, words }) => {
  console.log(carts);

  const [seconBtn, setSeconBtn] = useState(false);
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setSeconBtn(true);
  };
  const display = (id) => {
    setActive(true);
    seconBtn(id)
  };
  return (
    <div>
      {seconBtn === true ? <Button/>
      
      : <Cart onClick={handleClick} check={carts} />}

      <Description describe={words} />
    </div>
  );
};
export default Down;
