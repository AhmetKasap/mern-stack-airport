'use client'
import React, { useState } from 'react'
import { IoIosAirplane } from "react-icons/io";
import { RiFlightLandLine } from "react-icons/ri";
import { MdOutlineDateRange } from "react-icons/md";
import axios from 'axios';
import Flights from './Flights';





const FlightBooking = () => {

  const [checkButton, setCheckButton] = useState(true)
  const clicked = () => {
    setCheckButton(prevState => !prevState)
  }

  const [flights, setFlights] = useState()

  const access_key = "2eb6d081522e9b6d5b1d1963248fa5da"
  const url = "https://api.aviationstack.com/v1/flights"
  const api = async () => {
    setFlights("ahme")
    const response = await axios.get('https://api.aviationstack.com/v1/cities?access_key=2eb6d081522e9b6d5b1d1963248fa5da')
    console.log(response)
  }



  return (
    <>
      <div className='shadow-xl border rounded-md p-2 bg-white'>
        <div className='flex items-center justify-between mb-4'>

          <div className='flex items-center gap-1'>
            <IoIosAirplane className='bg-purple-900 rounded-full text-2xl text-white' />
            <h5>BOOK YOUR FLIGHT</h5>
          </div>

          {
            checkButton ? (
              <div className='  outline-none'>
                <button className='bg-purple-900 p-2 text-sm text-white hover:bg-purple-600 rounded-s-2xl'>Round trip</button>
                <button onClick={() => clicked()} className='bg-slate-200 p-2 text-sm text-purple-700 rounded-e-2xl'>One way</button>
              </div>
            ) : (
              <div className='  outline-none'>
                <button onClick={() => clicked()} className='bg-slate-200 p-2 text-sm text-purple-700 rounded-s-2xl'>Round trip</button>
                <button className='bg-purple-900 p-2 text-sm text-white hover:bg-purple-600 rounded-e-2xl'>One way</button>
              </div>
            )
          }
        </div>
        <div className='flex items-center justify-between gap-4'>
          {/* Gidiş noktası seçimi */}
          <div className="flex items-center w-1/4 border-2 outline-none rounded-s-2xl">
            <div className="pl-2 text-purple-800 text-xl">
              <RiFlightLandLine />
            </div>
            <input
              type="text"
              className="w-full p-2 text-sm border-none focus:outline-none"
              placeholder="Gidiş Noktası"
            />
          </div>

          {/* Dönüş noktası seçimi */}
          <div className="flex items-center w-1/4 border-2 outline-none rounded-e-2xl">
            <div className="pl-2 text-purple-800 text-xl">
              <RiFlightLandLine />
            </div>
            <input
              type="text"
              className="w-full p-2 text-sm border-none focus:outline-none"
              placeholder="Dönüş Noktası"
            />
          </div>

          {/* Gidiş tarihi seçimi */}
          <div className="flex items-center w-1/4 border-2 outline-none rounded-s-2xl">
            <div className="pl-2 text-purple-800 text-xl">
              <MdOutlineDateRange />
            </div>
            <input
              type="date"
              className="appearance-none w-full p-2 text-sm border-none focus:outline-none"
              placeholder="Gidiş Tarihi"
            />
          </div>

          {/* Dönüş tarihi seçimi */}
          <div className="flex items-center w-1/4 border-2 outline-none rounded-e-2xl">
            <div className="pl-2 text-purple-800 text-xl">
              <MdOutlineDateRange />
            </div>
            <input
              type="date"
              className="appearance-none w-full p-2 text-sm border-none focus:outline-none"
              placeholder="Dönüş Tarihi"
            />
          </div>
        </div>

        <div className='mt-4'>
          <button onClick={() => api()} className='bg-purple-900 rounded-md border text-sm   outline-none border-purple-900  text-white hover:bg-purple-600 p-3'>Show Flights</button>
        </div>

      </div>

      <Flights props={flights}></Flights>

    </>
  )
}

export default FlightBooking