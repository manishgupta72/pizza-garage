import React from "react";
import { MdStar } from "react-icons/md";
const FoodCard = ({ img, name, price, rating, desc }) => {
  return (
    <div className="font-bold w-[250px] p-5 bg-white flex flex-col rounded-lg gap-3">
      <img
        className="w-auto h-[130px] hover:scale-110 transition-all duration-300 cursor-grab ease-in-out "
        src={img}
        alt=""
      />
      <div className="flex justify-between text-sm">
        <h2>{name.slice(0, 18)}..</h2>
        <span className="text-green-500 ">₹{price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>
      <div className="flex items-center justify-between">
        <span className="flex items-center">
          <MdStar className="mr-1 text-yellow-400" /> {rating}
        </span>
        <button className="p-2 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm">
          Add to card
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
