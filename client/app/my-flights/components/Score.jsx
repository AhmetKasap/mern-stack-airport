import Link from 'next/link'
import React from 'react'

import { RiStarSLine } from "react-icons/ri";
const stars = new Array(6).fill(null)
const starsFor = new Array(5).fill(null)



const Score = () => {
  return (
    <>

      <div className='sm:flex sm:flex-col  md:flex md:flex-col lg:flex lg:flex-row xl:flex xl:flew-row items-center justify-between '>
        <div className='flex gap-2 items-center sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2'>
          <div className='border rounded-md p-1 pl-4 pr-4 text-center text-sm content'>
            Times
          </div>
          <div className='border rounded-md p-1 pl-4 pr-4 text-center text-sm content'>
            Stops
          </div>
          <div className='border rounded-md p-1 pl-4 pr-4 text-center text-sm content'>
            Airlines
          </div>
          <div className='border rounded-md p-1 pl-4 pr-4 text-center text-sm content'>
            Airports
          </div>
          <div className='border rounded-md p-1 pl-4 pr-4 text-center text-sm content'>
            Amenities
          </div>
          <Link href="" className='font text-blue-500 text-sm'>
            Edit 
          </Link>

        </div>

        <div className='flex gap-10 mt-2'>
          {
            starsFor.map((_, index)=> {
              return(
                <div key={index} className='flex w-12 flex-wrap '>
          
                {stars.map((_, index) => (
                    <RiStarSLine key={index} className='text-md ' />
                  ))}
              </div>
              )
            }) 
          }
        </div>
      </div>


    </>
  )
}

export default Score