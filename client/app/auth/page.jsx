'use client'
import React, { useState } from 'react'
import axios from 'axios'


const page = () => {
    const [control, setControl] = useState(true)

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const login = async() => {

    }

    const register = async() => {

    }




    return (
        <>
            {
                control === true ? (
                    <div className='sm:w-full md:w-1/2 lg:w-1/4 mx-auto h-auto mt-24'>
                        <div className=' w-full  bg-white  flex flex-col border-2  rounded-2xl  p-8  shadow-lg shadow-gray-500'>
                            <h1 className='mt-4 mb-8 text-gray-800 text-2xl font-roboto  '>Log In</h1>

                            <label htmlFor='login-email' className='content text-gray-600 mb-2 text-md' >Email</label>
                            <input  onChange={(e) => setEmail(e.target.value)} id='login-email' type='text' className='h-12 rounded-lg border-2 active:border-gray-400 outline-none font-roboto mb-4 text-sm p-2' />

                            <label htmlFor='login-password' className='content text-gray-600 mb-2 text-md ' >Password</label>
                            <input  onChange={(e) => setPassword(e.target.value)} id='login-password' type='password' className='h-12 rounded-lg border-2 active:border-gray-400 outline-none text-sm p-2' />
                            <button onClick={() => login()} className='mt-8 p-3 bg-purple-700 text-white   w-24 rounded-lg text-sm hover:bg-purple-500  '>Log In</button>
                            <button className='mt-8  font-roboto text-sm hover:text-gray-700 text-blue-500  ' onClick={() => setControl(false)}>Sign Up</button>

                        </div>
                    </div>

                ) : (
                    <div className='sm:w-full md:w-1/2 lg:w-1/4 mx-auto h-auto mt-24' >
                        <div className=' w-full h-auto bg-white  flex flex-col border-2  rounded-2xl  p-8  shadow-lg shadow-gray-500'>
                            <h1 className='mt-4 mb-8 text-gray-800 text-2xl font-roboto  '>Sign Up</h1>

                            <label htmlFor='username' className=' text-gray-600 mb-2 text-md' >Username</label>
                            <input  value={username} onChange={(e) => setUsername(e.target.value)} id='username' type='text' className='h-12 rounded-lg border-2 active:border-gray-400 outline-none text-sm p-2  mb-4' />

                            <label htmlFor='email' className=' text-gray-600 mb-2 text-md' >Email</label>
                            <input  onChange={(e) => setEmail(e.target.value)} id='email' type='email' className='h-12 rounded-lg border-2 active:border-gray-400 outline-none text-sm p-2 mb-4' />

                            <label htmlFor='password' className='content text-gray-600 mb-2 text-md ' >Password</label>
                            <input  onChange={(e) => setPassword(e.target.value)} id='password' type='password' className='h-12 rounded-lg border-2 active:border-gray-400 outline-none  mb-4 text-sm p-2' />
                            <button onClick={() => register()} className='mt-6 p-3 bg-purple-700 text-white   w-24 rounded-lg text-sm hover:bg-purple-500   '>Sign Up</button>
                            <button className='mt-8  content text-sm hover:text-gray-700 text-blue-500  ' onClick={() => setControl(true)}>Log In</button>

                        </div>
                    </div>
                )
            }

        </>
    )
}

export default page