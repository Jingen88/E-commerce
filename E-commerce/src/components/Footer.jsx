import React from 'react'
import {assets} from '../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>
    <div className='flex flex-rows justify-around sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt='logo'/>
            <p className='w-1/3 md:w-1/3 text-gray-600'>
            Celebrating individuality through style. 
            Join our community of fashion enthusiasts.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <Link to='/'>
                <li>Home</li>
                </Link>
                <Link to='/about'>
                <li>About Us</li>
                </Link>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-212-457-8790</li>
                <li>contact@info.szaloki</li>
                    </ul>
                </div>    

    </div>
    <div>
    <hr/>
    <p className='py-5 text-sm text-center'>© 2025 Szaloki. All rights reserved.</p>

</div>
</>
  )
}

export default Footer