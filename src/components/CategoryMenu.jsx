import React from "react";

const CategoryMenu = () => {
  return (
    <div className="ml-5 mt-5">
      <h1 className="text-xl font-bold ">Find the best food</h1>
      <div className="flex gap-5 mt-4 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button className="px-3 py-2 bg-gray-200 hover:bg-green-500 hover:text-white rounded-lg font-bold duration-100">
          All
        </button>
        <button className="px-3 py-2 bg-gray-200 hover:bg-green-500 hover:text-white rounded-lg font-bold duration-100">
          Lunch
        </button>
        <button className="px-3 py-2 bg-gray-200 hover:bg-green-500 hover:text-white rounded-lg font-bold duration-100">
          Breakfast
        </button>
        <button className="px-3 py-2 bg-gray-200 hover:bg-green-500 hover:text-white rounded-lg font-bold duration-100">
          Dinner
        </button>
        <button className="px-3 py-2 bg-gray-200 hover:bg-green-500 hover:text-white rounded-lg font-bold duration-100">
          Snacks
        </button>
      </div>
    </div>
  );
};

export default CategoryMenu;
