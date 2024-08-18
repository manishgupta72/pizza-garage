import React from 'react'
import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
const ItemCard = () => {
  return (
    <>
    <div className='flex gap-2 shadow-md rounded-lg p-2 mb-3 mt-3 '>
        <MdDeleteOutline className='absolute right-7 text-xl cursor-pointer hover:text-red-500'/>
        <img className='w-[50px] h-[50px] hover:scale-110 transition-all duration-150 ' src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5" alt="" />
    
    <div className='leading-5'>
        <h2 className='font-bold text-gray-800 mb-1'>Onion Pizza</h2>
        <div className='flex justify-between'>
           <span className='text-green-500 font-bold'>₹120</span>
        <div className='flex absolute right-7 gap-1'>
          <IoIosAdd className=' cursor-pointer text-2xl border-2 border-gray-700 p-1 rounded-md hover:text-gray-100 hover:bg-green-400 hover:border-0 transition-all duration-150 ease-linear'/>
          <span className='px-1 font-semibold'>1</span>
          <FiMinus className=' cursor-pointer text-2xl border-2 border-gray-700 p-1 rounded-md hover:text-gray-100 hover:bg-green-400 hover:border-0 transition-all duration-150 ease-linear'/>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default ItemCard