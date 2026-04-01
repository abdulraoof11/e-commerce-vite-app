import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminSidebar from './sidebar'
import AdminHeader from './header'

const AdminLayout = () => {
  return (
    <div className='flex min-h-screen w-full'>
         {/* side bar */}
           <AdminSidebar/>
           {/* header  */}
            
            {/* main content */}
            <div className='flex flex-1 flex-col '>
               <AdminHeader/>
               <main className='flex-1 p-4 bg-gray-100 '>
                    <Outlet />
                    </main>
               
            </div>

            
       
    </div>
  )
}

export default AdminLayout