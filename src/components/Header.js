import React from 'react'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
    
    <div className='bg-slate-200 shadow-md flex flex-row justify-between items-center py-3 px-[190px] '>
   <div className='flex flex-wrap text-sm sm:text-[23px] font-semibold '>
    <span className='text-slate-500'>RAAS</span>
    <span className='text-slate-700'>Estate</span>
   </div>
   
    <form className='bg-slate-100 p-2 rounded-[4px] flex justify-between items-center'>
        <input placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64 '/>
        <FaSearch className=" text-slate-600 "/>
    </form>
    <div>
   <ul className='flex gap-5'>
    <Link to="/">
    <li className='hidden sm:inline hover:underline'>Home</li>
    </Link>
    <Link to="/about">
    <li className='hidden sm:inline hover:underline'>About</li>
    </Link>
    <Link to="/sign-in ">
    <li className=' hover:underline inline'>Sign In</li>
    </Link>
   </ul>
   </div>
   </div>
   </>
  )
}
