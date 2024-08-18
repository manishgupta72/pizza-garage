import React from "react";
import { IoMdClose } from "react-icons/io";
const Cart = () => {
  return (
    <div className="fixed right-0 top-0 bg-white w-full  lg:w-[20vw] h-full p-10">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl text-gray-800">My Order</h1>
        <span className="border border-gray-300 p-1 hover:text-red-300 hover:border-red-300 font-bold cursor-pointer">
          <IoMdClose />
        </span>
      </div>
    </div>
  );
};

export default Cart;
