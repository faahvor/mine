/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Down from "./Down";

import Image_src from "./Image_src";

const Cover = ({ data,setCount,count }) => {
  return (
    <div className="grid md:grid-cols-2  lg:grid-cols-3  gap-8 md:mr-[2rem]">
      {data.map((item, index) => (
        <div key={index}>
          <Image_src img={item} />
          <Down carts={item} words={item}  setCount={setCount} count={count}/>
        </div>
      ))}
    </div>
  );
};
export default Cover;
