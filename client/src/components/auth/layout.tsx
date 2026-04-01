import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='flex min-h-screen w-full'>
      
      {/* Left Side */}
      <div className='w-1/2 bg-gray-200 flex items-center justify-center'>
        <h1 className='text-4xl font-bold'>Logo</h1>
      </div>

      {/* Right Side */}
      <div className='w-1/2 flex items-center justify-center'>
        <div className='w-2/3'>
          <Outlet />
        </div>
      </div>

    </div>
  )
}

export default AuthLayout