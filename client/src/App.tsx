import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './components/auth/layout'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import AdminLayout from './components/admin-view/layout'
import AdminDashboard from './pages/admin-view/dashboard'
import AdminProducts from './pages/auth/products'
import AdminOrders from './pages/auth/orders'
import AdminFeatures from './pages/auth/features'
import ShoppingLayout from './components/shopping-view/layout'
import NOT_FOUND from './pages/not-found'
import ShoppingHome from './pages/shopping-view/home'
import ShoppingListing from './pages/shopping-view/listing'
import ShoppingCheckOut from './pages/shopping-view/checkout'
import ShoppingAccount from './pages/shopping-view/account'

const App = () => {
  return (
    <div><Routes >
      <Route path='/auth' element={<AuthLayout/>}>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
      </Route>
      <Route path='admin' element={<AdminLayout/>}>
      <Route path='dashboard' element={<AdminDashboard/>}/>
      <Route path='products' element={<AdminProducts/>}/>
      <Route path='orders' element={<AdminOrders/>}/>
      <Route path='features' element={<AdminFeatures/>}/>
     
      </Route>
      <Route path='/shop' element={<ShoppingLayout/>}>
      <Route path='home' element={<ShoppingHome/>}/>
      <Route path='listing' element={<ShoppingListing/>}/>
      <Route path='checkout' element={<ShoppingCheckOut/>}/>
      <Route path='account' element={<ShoppingAccount/>}/>
      </Route>
      <Route path='*' element={<NOT_FOUND/>}/>
      </Routes></div>
  )
}

export default App