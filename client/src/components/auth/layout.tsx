import React from "react"
import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left Side - Branding */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex-col items-center justify-center p-10">
        <h1 className="text-5xl font-extrabold mb-6">YourBrand</h1>
        <p className="text-lg max-w-xs text-center">
          Welcome to YourBrand! Create an account and start your journey with us.
        </p>
      </div>

      {/* Right Side - Auth Form */}
      <div className="flex flex-1 items-center justify-center  p-6">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AuthLayout