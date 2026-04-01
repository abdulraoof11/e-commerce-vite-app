import * as React from "react"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { cn } from "@/lib/utils"

interface InputProps extends React.ComponentProps<"input"> {
  type?: string
  placeholder?: string
  showPasswordToggle?: boolean // enable toggle for password
}

export function Input({ type = "text", className, showPasswordToggle = false, ...props }: InputProps) {
  const [showPassword, setShowPassword] = useState(false)

  // Determine the actual input type
  const inputType = type === "password" && showPasswordToggle ? (showPassword ? "text" : "password") : type

  return (
    <div className="relative w-full">
      <input
        type={inputType}
        className={cn(
          "h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
          type === "password" && showPasswordToggle ? "pr-10" : "", // space for icon
          className
        )}
        {...props}
      />

      {/* Password toggle icon */}
      {type === "password" && showPasswordToggle && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center text-muted-foreground hover:text-foreground"
          tabIndex={-1} // prevent button from receiving focus
        >
          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </button>
      )}
    </div>
  )
}