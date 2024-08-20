import React from "react";
import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart, incrementQty, decrementQty } from "../redux/CartSlice";
import toast, { Toaster } from "react-hot-toast";
const ItemCard = ({ id, img, price, name, qty }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3 mt-3 ">
        <MdDeleteOutline
          onClick={() => {
            dispatch(removeFromCart({ id })),
              toast(`${name} Removed!`, {
                icon: "👋",
              });
          }}
          className="absolute right-7 text-xl cursor-pointer hover:text-red-500"
        />
        <img
          className="w-[50px] h-[50px] hover:scale-110 transition-all duration-150 "
          src={img}
          alt=""
        />

        <div className="leading-5">
          <h2 className="font-bold text-gray-800 mb-1">{name}</h2>
          <div className="flex justify-between">
            <span className="text-green-500 font-bold">₹{price}</span>
            <div className="flex absolute right-7 gap-1">
              <IoIosAdd
                onClick={() => dispatch(incrementQty({ id }))}
                className=" cursor-pointer text-2xl border-2 border-gray-700 p-1 rounded-md hover:text-gray-100 hover:bg-green-400 hover:border-0 transition-all duration-150 ease-linear"
              />
              <span className="px-1 font-semibold">{qty}</span>
              <FiMinus
                onClick={() =>
                  qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
                }
                className=" cursor-pointer text-2xl border-2 border-gray-700 p-1 rounded-md hover:text-gray-100 hover:bg-green-400 hover:border-0 transition-all duration-150 ease-linear"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
