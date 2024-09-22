'use client'
import React, { useEffect, useState } from 'react'
import { TbPlaneDeparture } from "react-icons/tb";
import { LiaPlaneArrivalSolid } from "react-icons/lia";
import { TbPlaneInflight } from "react-icons/tb";




const Flights = ({ props }) => {

    const [priceFilter, setPriceFilter] = useState()
    const [stopFilter, setStopFilter] = useState()
    const [times, setTimes] = useState()
    const [airlinesFilter, setAirlinesFilter] = useState()
    const [filters, setFilters] = useState()
    useEffect(() => {
        const allFilters = async () => {
            let filtered = props && props.data

            if (priceFilter === "lowest") {
                filtered = filtered.sort((a, b) => a.price - b.price)
            } else if (priceFilter === "highset") {
                filtered = filtered.sort((a, b) => b.price - a.price)
            }

            if (stopFilter) filtered = filtered.filter(flight => flight.stops === stopFilter)

            if (airlinesFilter) filtered = filtered.filter(flight => flight.airline === airlinesFilter)

            setFilters(filtered)
        }
        allFilters()

    }, [priceFilter, stopFilter, airlinesFilter])


    const [data,setData] = useState()
    useEffect(() => {

        if(filters === undefined) setData(props && props.data)
        else setData(filters)

    },[filters,props])
  

    return (
        <>
            <div className='flex gap-8 mt-8'>
                {/*listelenen uçuşları göster ve reservasyon yap. */}
                <div className=' w-2/3  '>
                    {

                        data && data.map(flight => {
                            return (
                                <>
                                    <div className=' w-full outline-none border-2 rounded-lg  bg-white border-gray-100 shadow-2xl shadow-gray-300 p-8 mt-4 '>
                                        <h1 className='text-sm font-medium'>{flight.from.city} - {flight.to.city}</h1>

                                        <div className='flex '>
                                            <div className='flex flex-col justify-center gap-1 mt-4 w-1/5 '>
                                                <div className='flex items-center gap-2'>
                                                    <TbPlaneDeparture className='' />
                                                    <p className='font-light text-sm'>Departure</p>
                                                </div>
                                                <p className='content font-bold'>{flight.departureTime} AM</p>
                                                <p className='font-light text-sm '>Airport : {flight.from.code}</p>
                                            </div>

                                            <div className='w-1/5 flex flex-col justify-center items-center '>
                                                <hr className='w-1/2 border-t border-purple-800 '></hr>
                                            </div>

                                            <div className='flex flex-col  gap-1 mt-4 w-1/5 items-center'>
                                                <h1 className='text-sm font-bold'>{flight.airline}</h1>
                                                <TbPlaneInflight className='text-purple-800 text-xl ' />
                                                <p className='font-light text-sm'>{flight.totalTime} ({flight.stops})</p>
                                            </div>

                                            <div className='w-1/5 flex flex-col justify-center items-center '>
                                                <hr className='w-1/2 border-t border-purple-800 '></hr>
                                            </div>

                                            <div className='flex flex-col justify-center items-end gap-1 mt-4 w-1/5 '>
                                                <div className='flex items-center gap-2'>
                                                    <LiaPlaneArrivalSolid />
                                                    <p className='text-sm font-light'>Arrival</p>
                                                </div>
                                                <p className='font-bold content'>{flight.arrivalTime} AM</p>
                                                <p className='font-light text-sm'>Airport : {flight.to.code}</p>
                                            </div>
                                        </div>


                                        <div className='flex flex-col mt-8'>
                                            <p className='text-purple-600 content font-bold'>Price : ${flight.price}</p>
                                            <p className='text-sm content mt-1 text-gray-500'>Round Trip</p>
                                        </div>

                                        <div className='flex -m-8  justify-end '>
                                            <button className='border pl-8 pr-8 p-4 rounded-l-xl text-white bg-purple-900 text-sm'>Book Flight</button>
                                        </div>

                                    </div>
                                    <button className='p-3 underline underline-offset-1 bg-gray-200 text-purple-900 text-sm rounded-b-lg'>Check the details</button></>

                            )
                        })
                    }

                </div>


                {/*uçuşları filtrele */}
                {
                    props ? (

                        <div className='w-1/3 bg-white '>
                            <h1 className='text-md font-bold mb-2'>Sort by :</h1>

                            <select
                                className='border w-full mb-4 text-sm p-2 rounded-lg'
                                onChange={(e) => setPriceFilter(e.target.value)} // onChange ile değer alıyoruz
                            >
                                <option value="lowest">Lowest Price</option>
                                <option value="highset">Highest Price</option>
                            </select>

                            <h1 className='text-md font-bold mb-2 mt-2'>Arrival Time</h1>
                            <div>
                                <input className='border bg-purple-900' type='radio' name="time" />
                                <span className='ml-2 text-sm'>5:00 AM - 11.59 AM</span>
                            </div>
                            <div>
                                <input className='border bg-purple-900' type='radio' name="time" />
                                <span className='ml-2 text-sm'>5:00 AM - 11.59 AM</span>
                            </div>

                            <h1 className='text-md font-bold mb-2 mt-4'>Stops</h1>
                            <div className='flex mb-2'>
                                <input onClick={() => setStopFilter('Nonstop')} className='border bg-purple-900' type='radio' name='stop' />
                                <span className='ml-2 text-sm'>Non Stop</span>
                                <span className='text-sm ml-auto'>$230</span>
                            </div>
                            <div className='flex mb-2'>
                                <input onClick={() => setStopFilter('1 Stop')} className='border bg-purple-900' type='radio' name='stop' />
                                <span className='ml-2 text-sm'>1 Stop</span>
                                <span className='text-sm ml-auto'>$230</span>
                            </div>
                            <div className='flex mb-2'>
                                <input onClick={() => setStopFilter('2 Stop')} className='border bg-purple-900' type='radio' name='stop' />
                                <span className='ml-2 text-sm'>2 Stop</span>
                                <span className='text-sm ml-auto'>$230</span>
                            </div>

                            <h1 className='text-md font-bold mb-2 mt-4'>Airlines Included</h1>
                            <div className='flex mt-2'>
                                <input onClick={() => setAirlinesFilter('Alitalia')} className='border bg-purple-900' type='radio' name='airlines' />
                                <span className='ml-2 text-sm'>Alitalia</span>
                                <span className='text-sm ml-auto'>$230</span>
                            </div>
                            <div className='flex mt-2'>
                                <input onClick={() => setAirlinesFilter('Lufthansa')} className='border bg-purple-900' type='radio' name='airlines' />
                                <span className='ml-2 text-sm'>Lufthansa</span>
                                <span className='text-sm ml-auto'>$230</span>
                            </div>
                            <div className='flex mt-2'>
                                <input onClick={() => setAirlinesFilter('Air France')} className='border bg-purple-900' type='radio' name='airlines' />
                                <span className='ml-2 text-sm'>Air France</span>
                                <span className='text-sm ml-auto'>$230</span>
                            </div>
                            <div className='flex mt-2'>
                                <input onClick={() => setAirlinesFilter('Air Italy')} className='border bg-purple-900' type='radio' name='airlines' />
                                <span className='ml-2 text-sm'>Air Italy</span>
                                <span className='text-sm ml-auto'>$230</span>
                            </div>
                            <div className='flex mt-2'>
                                <input onClick={() => setAirlinesFilter('American Airlines')} className='border bg-purple-900' type='radio' name='airlines' />
                                <span className='ml-2 text-sm'>American Airlines</span>
                                <span className='text-sm ml-auto'>$230</span>
                            </div>





                        </div>
                    ) : ("")
                }

            </div>

        </>
    )
}

export default Flights

