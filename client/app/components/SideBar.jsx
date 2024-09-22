import Image from 'next/image';
import React from 'react';
import { IoCarSportOutline } from "react-icons/io5";
import { LuHotel } from "react-icons/lu";
import { BsUmbrella } from "react-icons/bs";




const SideBar = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='relative'>
        <Image className='border rounded-xl' width={500} height={500} src="/img/side-bar-1.jpg" alt="Side Bar 1" />
        <div className='absolute bottom-2 left-2 text-white  bg-opacity-50 p-2 rounded text-xl'>
        <IoCarSportOutline  className='text-3xl'/>

          CAR RENTALS

        </div>
      </div>

      <div className='relative'>
        <Image className='border rounded-xl' width={500} height={300} src="/img/side-bar-2.jpg" alt="Side Bar 2" />
        <div className='absolute bottom-2 left-2 text-white text-xl title bg-opacity-50 p-2 rounded'>
        <LuHotel className='text-3xl'/>

          HOTELS
        </div>
      </div>

      <div className='relative'>
        <Image className='border rounded-xl' width={500} height={300} src="/img/side-bar-3.jpg" alt="Side Bar 3" />
        <div className='absolute bottom-2 left-2 text-white  bg-opacity-50 p-2 rounded text-xl'>
        <BsUmbrella className='text-3xl'/>

          TRAVEL PACKAGES
        </div>
      </div>
    </div>
  );
};

export default SideBar;
