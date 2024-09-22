import Link from 'next/link'
import React from 'react'

import { RiStarSLine } from "react-icons/ri";
const stars = new Array(6).fill(null)


const Score = () => {
  return (
    <>

      <div className='flex items-center justify-between pl-8 pr-8'>
        <div className='flex gap-6 items-center w-1/2'>
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
            Edit Search
          </Link>

        </div>

        <div className='flex gap-6'>
          {
            stars.map((_, index)=> {
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