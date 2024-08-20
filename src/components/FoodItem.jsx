import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData";
import toast, { Toaster } from "react-hot-toast";
const FoodItem = () => {
  const handleToast = (name) => toast.success(`Added ${name}`);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-center gap-10 flex-wrap my-10 lg:justify-start mx-6">
        {FoodData.map((food, index) => {
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
