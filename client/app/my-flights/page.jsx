import React from 'react'
import Navbar from '../components/Navbar'
import Score from './components/Score'
import MyFlights from './components/MyFlights'

const page = () => {
  return (
    <>  
      <div className='w-11/12 mx-auto mt-8 gap-4'>
        <Navbar></Navbar>
        <Score></Score>
        <MyFlights></MyFlights>
      </div>
    </>
  )
}

export default page