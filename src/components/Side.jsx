import React from "react"
import Products from "./Products";



const Side =()=>{
    return(
        <div>
        <div className=" hidden  flex-col bg-white p-8 mt-[5rem] lg:mr-[10rem] rounded-xl mb-[5rem] lg:mb-[48rem]">
         <img src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1723192574/illustration-empty-cart_vwtvtq.svg" alt="" />
         <h1 className="flex justify-center text-[#958783] font-semibold">your added items will appear here</h1>
        </div>
        <Products/>
        

        </div>
    )
}
export default Side