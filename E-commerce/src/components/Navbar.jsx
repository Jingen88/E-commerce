import React from 'react'
import {assets} from '../assets/frontend_assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-4 font-medium '>
        <img src={assets.logo} className='w-[13rem]' alt='logo'/>
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
<NavLink to='/' className='flex flex-col items-center gap-1'>
    <p>HOME</p>
    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
</NavLink>
<NavLink to='/collection' className='flex flex-col items-center gap-1'>
    <p>COLLECTION</p>
    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
</NavLink>
<NavLink to='/about' className='flex flex-col items-center gap-1'>
    <p>ABOUT</p>
    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
</NavLink>
<NavLink to='/contact' className='flex flex-col items-center gap-1'>
    <p>CONTACT</p>
    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
</NavLink>
        </ul>
        <div className='flex items-center gap-5'>
        <img src={assets.search_icon} className='w-5 cursor-pointer' alt='search icon'/>
        <div className='group relative'>
        <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="profile icon"/>
        </div>
        </div>

    </div>
  )
}

export default Navbar