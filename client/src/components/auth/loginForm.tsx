import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "../ui/input"

const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login submitted:", form)
    // Call your API to log the user in
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md space-y-4"
    >
      <h2 className="text-2xl font-semibold text-center">Login</h2>

      {/* Email */}
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      {/* Password */}
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
          showPasswordToggle
        />
      </div>

      {/* Submit Button */}
      <Button type="submit" className="w-full mt-2">
        Login
      </Button>
    </form>
  )
}

export default LoginForm