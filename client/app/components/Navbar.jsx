import Link from 'next/link'
import React from 'react'
import { IoAirplaneOutline } from "react-icons/io5";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { PiArrowCircleUpLeftLight } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";
import { FaPlane } from "react-icons/fa6";
import { CiPlane } from "react-icons/ci";
import { IoIosAirplane } from "react-icons/io";







const Navbar = () => {
  return (
    <>
      <div className='flex mt-6 mb-6'>
        <div className='flex w-1/2 '>
          <div className='flex items-center gap-2'>
            <IoIosAirplane  className='bg-purple-900 rounded-full text-2xl text-white' />
            <Link href="/" className=' roboto-slab-medium'>PLANE SCAPE</Link>
          </div>
        </div>

        <div className='flex justify-end w-1/2  gap-4'>
          <div className='flex items-center gap-1'>
            <PiArrowCircleUpLeftLight className='text-xl bg-purple-900 text-white rounded-full'/>
            <Link href="/deals">Deals</Link>
          </div>
          <div className='flex items-center gap-1'>
            <RiCompassDiscoverLine className='text-xl bg-purple-900 text-white rounded-full' />
            <Link href="/discover">Discover</Link>
          </div>
          <div className='flex gap-1 items-center'>
          <FaUserCircle  className='text-xl bg-purple-900 text-white rounded-full'  />
            <Link href="/profile">Profile</Link>
          </div>
        </div>

      </div>

      <Link href="/my-flights">My Flights</Link>
    </>
  )
}

export default Navbar