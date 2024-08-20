import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItem = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  const handleToast = (name) => toast.success(`Added ${name}`);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-center gap-10 flex-wrap my-10 lg:justify-start mx-6">
        {FoodData.filter((food) => {
          if (category === "All") {
            return food.name
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase());
          } else {
            return (
              category === food.category &&
              food.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((food, index) => {
          return (
            <FoodCard
              key={index}
              id={food.id}
              name={food.name}
              img={food.img}
              rating={food.rating}
              price={food.price}
              desc={food.desc}
              handleToast={handleToast}
            />
          );
        })}
      </div>
    </>
  );
};

export default FoodItem;
