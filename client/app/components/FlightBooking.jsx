'use client'
import React, { useState, useEffect } from 'react'
import { IoIosAirplane } from "react-icons/io";
import { RiFlightLandLine } from "react-icons/ri";
import { MdOutlineDateRange } from "react-icons/md";
import axios from 'axios';
import Flights from './Flights';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FlightBooking = () => {
  const notify = (message) => toast(message)

  //!one way and rount trip button control
  const [checkButton, setCheckButton] = useState(true)
  const clicked = () => {
    setCheckButton(prevState => !prevState)
  }


  //! tarih validasyonu
  const [minDate, setMinDate] = useState("")
  useEffect(() => {
    const today = new Date()
    const formattedDate = today.toISOString().split("T")[0]
    setMinDate(formattedDate)
    setToDate(formattedDate)
    setFromsDate(formattedDate)
  }, [])


  //!tarihi al

  const [fromsDate, setFromsDate] = useState()
  const [toDate, setToDate] = useState()


  //!arama önerileri için dropdonw menu kontrolü
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  const [isDropdownVisible2, setIsDropdownVisible2] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev)
  }
  const toggleDropdown2 = () => {
    setIsDropdownVisible2((prev) => !prev)
  }

  const handleDepartureOptionClick = (option) => {
   
    setDeparture(option)
    setIsDropdownVisible((prev) => !prev)
  }
  const handleArrivalOptionClick = (option) => {
    setArrival(option)
    setIsDropdownVisible2((prev) => !prev)
  }

  const [departure, setDeparture] = useState()
  const [arrival, setArrival] = useState()


  const [cities, setCities] = useState([])
  useEffect(() => {
    const getCities = async () => {
      const response = await axios.get('http://localhost:5001/api/v1/flights/cities')
      setCities(response)
    }
    getCities()
  }, [])


  const [airlinesFilterForDeparture, setAirlinesFilterForDeparture] = useState([])
  const [airlinesFilterForArrival, setAirlinesFilterForArrival] = useState([])
  useEffect(() => {
    cities && cities.data &&cities.data.filter(city => {
      if (city.toLowerCase().includes(departure.toLowerCase())) setAirlinesFilterForDeparture(city)
    })
  }, [departure])
  useEffect(() => {
    cities && cities.data && cities.data.filter(city => {
      if (city.toLowerCase().includes(arrival.toLowerCase())) setAirlinesFilterForArrival(city)
    })
  }, [arrival])


  //!uçuşları listele
  const [flights, setFlights] = useState()
  const showFlights = async () => {
    try {
      if(departure && arrival) {
        const response = await axios.get(`http://localhost:5001/api/v1/flights?departure=${departure}&arrival=${arrival}&fromDate=${fromsDate}&toDate=${toDate}`)
        setFlights(response)
      }
      else{
        console.log("değer gir")
        notify("please select departure and arrival destinations")
      }
      
    } catch (error) {
      console.log(error.response.data)
      notify("flight not found")
    }
   
    
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
              <div className='outline-none'>
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
        <ToastContainer />

        <div className='flex items-center justify-between gap-4'>
          {/* Gidiş noktası seçimi */}
          <div className="relative w-1/4">
            {/* Input alanı */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <RiFlightLandLine className="text-purple-800 text-xl" />
              </div>
              <input
                type="text"
                className="w-full p-2 pl-10 border-2 outline-none rounded-s-2xl"
                placeholder="Departure"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                onClick={toggleDropdown} // Inputa tıklandığında dropdown'u aç
              />
            </div>

            {/* Dropdown Menü */}
            {isDropdownVisible && departure && airlinesFilterForDeparture && (
              <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg">

                <li
                  onClick={() => handleDepartureOptionClick(airlinesFilterForDeparture)}
                  className="p-2 cursor-pointer hover:bg-gray-100"
                >
                  {airlinesFilterForDeparture} {/* airline objesinin ilgili alanını render ediyorum */}
                </li>
              </ul>
            )}
          </div>


          {/* Dönüş noktası seçimi */}
          <div className="relative w-1/4">
            {/* Input alanı */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <RiFlightLandLine className="text-purple-800 text-xl" />
              </div>
              <input
                type="text"
                className="w-full p-2 pl-10 border-2 outline-none rounded-e-2xl"
                placeholder="Arrival"
                value={arrival}
                onChange={(e) => setArrival(e.target.value)}
                onClick={toggleDropdown2} // Inputa tıklandığında dropdown'u aç
              />
            </div>

            {/* Dropdown Menü */}
            {isDropdownVisible2 && arrival && airlinesFilterForArrival && (
              <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg">

                <li
                  onClick={() => handleArrivalOptionClick(airlinesFilterForArrival)}
                  className="p-2 cursor-pointer hover:bg-gray-100"
                >
                  {airlinesFilterForArrival} {/* airline objesinin ilgili alanını render ediyorum */}
                </li>
              </ul>
            )}
          </div>

          {/* Gidiş tarihi seçimi */}
          <div className="flex items-center w-1/4 border-2 outline-none rounded-s-2xl">
            <div className="pl-2 text-purple-800 text-xl">
              <MdOutlineDateRange />
            </div>
            <input
              type="date"
              className="appearance-none w-full p-2 text-sm border-none focus:outline-none"
              value={fromsDate}
              min={minDate}
              onChange={(e) => setFromsDate(e.target.value)}

            />
          </div>

          {/* Dönüş tarihi seçimi */}
          <div className="flex items-center w-1/4 border-2 outline-none rounded-e-2xl">
            <div className="pl-2 text-purple-800 text-xl">
              <MdOutlineDateRange />
            </div>
            <input
              type="date"
              value={toDate}
              className="appearance-none w-full p-2 text-sm border-none focus:outline-none rounded-e-2xl"
              min={minDate}
              onChange={(e) => setToDate(e.target.value)}

            />
          </div>

        </div>

        <div className='mt-4'>
          <button onClick={() => showFlights()} className='bg-purple-900 rounded-md border text-sm   outline-none border-purple-900  text-white hover:bg-purple-600 p-3'>Show Flights</button>
        </div>

      </div>

      <Flights props={flights}></Flights>

    </>
  )
}

export default FlightBooking