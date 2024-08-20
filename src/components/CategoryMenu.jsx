import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/CategorySlice";
const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const selectedCateory = useSelector((state) => state.category.category);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };
  useEffect(() => {
    listUniqueCategories();
  }, []);
  return (
    <div className="ml-5 mt-5">
      <h1 className="text-xl font-bold ">Find the best food</h1>
      <div className="flex gap-5 mt-4 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 bg-gray-200 hover:bg-green-500 hover:text-white rounded-lg font-bold duration-100 ${
            selectedCateory === "All" && "bg-green-500 text-white"
          } `}
        >
          All
        </button>
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={`px-3 py-2 bg-gray-200 hover:bg-green-500 hover:text-white rounded-lg font-bold duration-100  ${
                selectedCateory === category && "bg-green-500 text-white"
              } `}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
