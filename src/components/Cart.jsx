import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToCart } from "../redux/CartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const [activeCart, setActiveCart] = useState(false);
  const [empty, setEmpty] = useState(true);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  const navigate = useNavigate();
  const setCartEmpty = () => {
    setTimeout(() => {
      dispatch(setToCart([]));
    }, 3000);
  };
  return (
    <>
      <div
        className={`fixed right-0 top-0 bg-white w-full  lg:w-[25vw] h-full p-5 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 ease-linear z-[500] `}
      >
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl text-gray-800">My Order</h1>
          <span className="border rounded-md border-gray-300 p-1 hover:text-red-300 hover:border-red-300 font-bold cursor-pointer">
            <IoMdClose onClick={() => setActiveCart(!activeCart)} />
          </span>
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return (
              <ItemCard
                key={food.id}
                id={food.id}
                name={food.name}
                img={food.img}
                price={food.price}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h2 className="text-xl text-center font-bold mt-10">
            Your cart is empty
          </h2>
        )}

        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800 lg:mx-5">
            Items : {totalQty}
          </h3>
          <h3 className="font-semibold text-gray-800 lg:mx-5">
            Total Amount :{totalPrice}
          </h3>
          <hr className=" w-[90vw] lg:w-[20vw] lg:mx-5 my-2" />
          <button
            onClick={() => {
              navigate("/success");
              setCartEmpty();
            }}
            className="bg-green-500 lg:mx-5 font-bold text-white py-2 rounded-lg  w-[90vw] lg:w-[20vw] mb-5"
          >
            Checkout
          </button>
        </div>
      </div>
      <HiMiniShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`fixed bottom-6 right-4 text-5xl rounded-full cursor-pointer bg-white shadow-md p-3 ${
          totalQty > 0 && "animate-bounce delay-500 transition-all"
        } `}
      />
    </>
  );
};

export default Cart;
