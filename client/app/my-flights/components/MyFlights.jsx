'use client'

import React, { useEffect, useState } from 'react'
import { GrCircleAlert } from "react-icons/gr";
import { BsTriangleHalf } from "react-icons/bs";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';

const MyFlights = () => {

    const notify = (message) => toast(message)

    const [flights, setFlights] = useState()
    console.log(flights)

    useEffect(() => {

        const token = Cookies.get('token')
        if(!token) toast("please login")

        const myReservations = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/v1/reservation', {
                    headers : {Authorization: `Bearer ${token}`}
                })
                if(response.data.success === true) {
                    setFlights(response.data)
                }else {
                    toast("error")
                }
                
            } catch (error) {
                toast("error")
            }
            
        }

        myReservations()

    },[])
    

    return (
        <>
            <ToastContainer />

            
            <div className='flex justify-between mt-8'>
                <div className='content'>Sort By : <b className='font-medium'>Recommended </b> </div>
                <div className='flex items-center justify-center gap-2'>
                    <GrCircleAlert className='text-md text-blue-500' />
                    <p>Avg Fare : $225</p>
                </div>
            </div>


            {
                flights && flights.data && flights.data.map(flight => {
                    return(
                        <div className='border bg-white border-gray-200 shadow-xl mt-4 p-8 rounded-md'>
                        <div className='flex items-center gap-8'>
                            <BsTriangleHalf className='text-red-500 border rounded-full text-5xl p-2' />
                            <h1 className='text-xl title font-medium text-gray-500'>{flight.departureTime} - {flight.arrivalTime}</h1>
                        </div>
        
                        <div className='mt-2 flex justify-between items-center'>
                            <div className='flex w-1/3 justify-between'>
                                <div className='flex flex-col gap-1 ml-20'>
                                    <h5 className='text-sm content'>{flight.airline}</h5>
                                    <span className='text-sm content text-blue-500'>Flight Details</span>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h5 className='text-sm content'>{flight.stops}</h5>
                                    <span className='text-sm content text-gray-500'>{flight.totalTime}</span>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h5 className='text-sm content'>{flight.from.code} to {flight.to.code}</h5>
                                    <span className='text-sm content text-gray-500'>DL 1443</span>
                                </div>
                            </div>
        
                            <div className='flex w-2/3 gap-3 justify-end'>
                                <div className='border flex flex-col rounded-md p-6 gap-4 w-24'>
                                    <h1 className='font-bold title'>${flight.price}</h1>
                                    <p className='text-sm content text-gray-500'>Main</p>
                                </div>
                                <div className='border flex flex-col rounded-md p-6 gap-4 w-24'>
                                    <h1 className='font-bold title'>$204</h1>
                                    <p className='text-sm content text-gray-500'>Comfort+</p>
                                </div>
                                <div className='border flex flex-col rounded-md p-6 gap-4 bg-gray-100 text-center w-24'>
                                    <h1 className='font-bold title text-center'>- - - -</h1>
                                </div>
                                <div className='border flex flex-col rounded-md p-6 gap-4 w-24'>
                                    <h1 className='font-bold title'>$386</h1>
                                    <p className='text-sm content text-gray-500'>D One</p>
                                </div>
                                <div className='border flex flex-col rounded-md p-6 gap-4 bg-gray-100 text-center w-24'>
                                    <h1 className='font-bold title text-center'>- - - -</h1>
                                </div>
        
                            </div>
                        </div>
        
        
                    </div>
                    

                    )
                })
            }


          

        </>
    )
}

export default MyFlights