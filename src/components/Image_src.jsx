import React from "react";
import Cart from "./Cart";

const Image_src = ({ img }) => {
  return (
    <div>
      <img
        className="w-[25rem] rounded-2xl"
        srcSet={`${img.mobile} 375w, ${img.tablet} 768w, ${img.desktop} 1440w`}
        sizes="(max-width: 375px) 375px, (max-width: 768px) 768px, 1440px"
        src={img.desktop} // Fallback to desktop image
        alt=""
      />
      
    </div>
  );
};

export default Image_src;
{
  /* */
}
