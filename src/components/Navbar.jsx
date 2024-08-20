import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/SearchSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="mx-6 flex flex-col lg:flex-row justify-between py-3 ">
      <div>
        <h3 className="text-gray-600 font-bold text-xl mb-3">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-black font-bold text-2xl mb-5">Pizza-Garage</h1>
      </div>
      <div>
        <input
          type="search"
          name="search"
          placeholder="Search here"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="outline-none rounded-lg p-3 border border-gray-400 text-sm w-full lg:w-[25vw]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
