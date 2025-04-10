import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full bg-gray-900 text-white shadow-md py-4'>
         <div className='flex justify-start gap-10 text-lg font-semibold ms-5'>
        <NavLink to={"/"}>
            Home 
        </NavLink>
        <NavLink to={"/pastes"}>
            Pastes 
        </NavLink>
    </div>
    </div>
   
  )
}

export default Navbar