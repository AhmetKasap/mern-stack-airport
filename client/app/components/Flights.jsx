'use client'
import React from 'react'
import { TbPlaneDeparture } from "react-icons/tb";
import { LiaPlaneArrivalSolid } from "react-icons/lia";
import { TbPlaneInflight } from "react-icons/tb";




const Flights = ({ props }) => {
    return (
        <>
            <div className='flex gap-8 mt-8'>
                {/*listelenen uçuşları göster ve reservasyon yap. */}
                <div className=' w-2/3 '>
                    <div className='border rounded-lg  bg-white  p-8 mt-4 '>
                        <h1 className='text-sm font-medium'>Milano - Madrid</h1>

                        <div className='flex '>

                            <div className='flex flex-col justify-center gap-1 mt-4 w-1/5 '>
                                <div className='flex items-center gap-2'>
                                    <TbPlaneDeparture className='' />
                                    <p>Departure</p>
                                </div>
                                <p>7:30 AM</p>
                                <p>Airport : MXP</p>
                            </div>
                            <div className='w-1/5 flex flex-col'>
                                <hr className='text-purple-900'></hr>
                            </div>
                            <div className='flex flex-col items-center  gap-1 mt-4  w-1/5 '>
                                <h1>Alitalia</h1>
                                <TbPlaneInflight className='text-purple-800 text-xl ' />
                                <p>2h 25m (nonstop) </p>
                            </div>
                            <div className='w-1/5'>
                                <hr></hr>
                            </div>
                            <div className='flex flex-col justify-center items-end gap-1 mt-4 w-1/5 '>
                                <div className='flex items-center gap-2'>
                                    <LiaPlaneArrivalSolid />
                                    <p>Arrival</p>
                                </div>
                                <p>9.55 AM</p>
                                <p>Airport : MAD</p>
                            </div>
                        </div>

                        <div className='flex -m-8  justify-end mt-6'>
                            <button className='border pl-8 pr-8 p-4 rounded-l-xl text-white bg-purple-900 text-sm'>Book Flight</button>
                        </div>

                    </div>
                    <button className='p-3 underline underline-offset-1 bg-gray-200 text-purple-900 text-sm rounded-b-lg'>Check the details</button>
                </div>

                {/*uçuşları filtrele */}
                <div className='w-1/3 bg-white '>
                    <h1 className='text-md font-bold mb-2'>Sort by :</h1>

                    <select className='border w-full mb-4 text-sm p-2 rounded-lg'>
                        <option>Lowest Price</option>
                    </select>
                    
                    <h1 className='text-md font-bold mb-2'>Arrival Time</h1>
                    <div>
                        <input className='border bg-purple-900' type='radio' name="time"/> 
                        <span className='ml-2 text-sm'>5:00 AM - 11.59</span> 
                    </div>
                    <div>
                        <input className='border bg-purple-900' type='radio' name="time"/> 
                        <span className='ml-2 text-sm'>5:00 AM - 11.59</span> 
                    </div>

                  
                    
                  
                </div>

            </div>

            {props}
        </>
    )
}

export default Flights