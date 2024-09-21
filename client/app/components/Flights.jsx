'use client'
import React from 'react'
import { TbPlaneDeparture } from "react-icons/tb";
import { LiaPlaneArrivalSolid } from "react-icons/lia";
import { TbPlaneInflight } from "react-icons/tb";




const Flights = ({ props }) => {
    return (
        <>
            {
                props && props.data && props.data.map(flight => {
                    return (
                        <div className='flex gap-8 mt-8'>
                            {/*listelenen uçuşları göster ve reservasyon yap. */}

                            <div className=' w-2/3 '>
                                <div className='border outline-none bordew rounded-lg  bg-white  p-8 mt-4 '>
                                    <h1 className='text-sm font-medium'>{flight.from.city} - {flight.to.city}</h1>

                                    <div className='flex '>

                                        <div className='flex flex-col justify-center gap-1 mt-4 w-1/5 '>
                                            <div className='flex items-center gap-2'>
                                                <TbPlaneDeparture className='' />
                                                <p>Departure</p>
                                            </div>
                                            <p>{flight.departureTime}</p>
                                            <p>Airport : {flight.from.code}</p>
                                        </div>
                                        <div className='w-1/5 flex flex-col'>
                                            <hr className='text-purple-900'></hr>
                                        </div>
                                        <div className='flex flex-col items-center  gap-1 mt-4  w-1/5 '>
                                            <h1>{flight.airline}</h1>
                                            <TbPlaneInflight className='text-purple-800 text-xl ' />
                                            <p>{ flight.totalTime} ({flight.stops}) </p>
                                        </div>
                                        <div className='w-1/5'>
                                            <hr></hr>
                                        </div>
                                        <div className='flex flex-col justify-center items-end gap-1 mt-4 w-1/5 '>
                                            <div className='flex items-center gap-2'>
                                                <LiaPlaneArrivalSolid />
                                                <p>Arrival</p>
                                            </div>
                                            <p>{flight.arrivalTime}</p>
                                            <p>Airport : {flight.to.code}</p>
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
                                    <option>Highest Price</option>
                                </select>

                                <h1 className='text-md font-bold mb-2 mt-2'>Arrival Time</h1>
                                <div>
                                    <input className='border bg-purple-900' type='radio' name="time" />
                                    <span className='ml-2 text-sm'>5:00 AM - 11.59</span>
                                </div>
                                <div>
                                    <input className='border bg-purple-900' type='radio' name="time" />
                                    <span className='ml-2 text-sm'>5:00 AM - 11.59</span>
                                </div>

                                <h1 className='text-md font-bold mb-2 mt-4'>Stops</h1>
                                <div className='flex mb-2'>
                                    <input className='border bg-purple-900' type='radio' />
                                    <span className='ml-2 text-sm'>Non Stop</span>
                                    <span className='text-sm ml-auto'>$230</span>
                                </div>
                                <div className='flex mb-2'>
                                    <input className='border bg-purple-900' type='radio' />
                                    <span className='ml-2 text-sm'>Non Stop</span>
                                    <span className='text-sm ml-auto'>$230</span>
                                </div>
                                <div className='flex mb-2'>
                                    <input className='border bg-purple-900' type='radio' />
                                    <span className='ml-2 text-sm'>Non Stop</span>
                                    <span className='text-sm ml-auto'>$230</span>
                                </div>

                                <h1 className='text-md font-bold mb-2 mt-4'>Airlines Included</h1>
                                <div className='flex mt-2'>
                                    <input className='border bg-purple-900' type='radio' />
                                    <span className='ml-2 text-sm'>Alitalia</span>
                                    <span className='text-sm ml-auto'>$230</span>
                                </div>
                                <div className='flex mt-2'>
                                    <input className='border bg-purple-900' type='radio' />
                                    <span className='ml-2 text-sm'>Lufthansa</span>
                                    <span className='text-sm ml-auto'>$230</span>
                                </div>




                            </div>

                        </div>
                    )

                })



            }



        </>
    )
}

export default Flights
