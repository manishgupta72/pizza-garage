import React from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
const Cart = () => {
  return (
    <div className="fixed right-0 top-0 bg-white w-full  lg:w-[20vw] h-full p-10">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl text-gray-800">My Order</h1>
        <span className="border border-gray-300 p-1 hover:text-red-300 hover:border-red-300 font-bold cursor-pointer">
          <IoMdClose />
        </span>
      </div>
      <ItemCard/>
      <div className="absolute bottom-0">
        <h3 className="font-semibold text-gray-800">Items : </h3>
        <h3 className="font-semibold text-gray-800">Total Amount : </h3>
        <hr className=" w-[90vw] lg:w-[18vw] my-2"/>
        <button className="bg-green-500 px-3 font-bold text-white py-2 rounded-lg mb-2 w-[90vw] lg:w-[18vw] mb-5">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
