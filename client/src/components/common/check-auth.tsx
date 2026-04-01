import React from "react"
import { Navigate, useLocation } from "react-router-dom"

interface CheckAuthProps {
  isAuthenticated: boolean
  user: any
  children: React.ReactNode
}

const CheckAuth = ({ isAuthenticated, user, children }: CheckAuthProps) => {
  const location = useLocation()

  // 1️⃣ Redirect unauthenticated users trying to access protected routes
  // Any /admin/* or /shop/* route requires authentication
  if (!isAuthenticated && (location.pathname.startsWith("/admin") || location.pathname.startsWith("/shop"))) {
    return <Navigate to="/auth/login" />
  }

  // 2️⃣ Redirect authenticated users away from login/register pages
  // Authenticated users should not see login/register; redirect based on role
  if (isAuthenticated && (location.pathname.includes("/login") || location.pathname.includes("/register"))) {
    return user?.role === "admin" ? (
      <Navigate to="/admin/dashboard" /> // Admin users go to admin dashboard
    ) : (
      <Navigate to="/shop/home" />       // Regular users go to shop home
    )
  }

  // 3️⃣ Protect admin routes: redirect non-admin users trying to access /admin/*
  if (location.pathname.startsWith("/admin") && user?.role !== "admin") {
    return <Navigate to="/shop/home" />  // Non-admin users are sent to shop home
  }

  // 4️⃣ Protect shop routes: redirect admin users trying to access /shop/*
  if (location.pathname.startsWith("/shop") && user?.role === "admin") {
    return <Navigate to="/admin/dashboard" /> // Admins are sent to admin dashboard
  }

  // 5️⃣ All other routes are allowed
  return <>{children}</>
}

export default CheckAuth