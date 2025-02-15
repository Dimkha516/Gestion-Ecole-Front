// src/components/ui/button.jsx
import React from "react"
import PropTypes from "prop-types"
import { cn } from "@/lib/utils"

const buttonVariants = {
  default: "bg-slate-900 text-white hover:bg-slate-800",
  destructive: "bg-red-500 text-white hover:bg-red-600",
  outline: "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900",
  secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
  ghost: "hover:bg-slate-100 hover:text-slate-900",
  link: "text-slate-900 underline-offset-4 hover:underline"
}

const buttonSizes = {
  default: "h-10 px-4 py-2",
  sm: "h-9 px-3",
  lg: "h-11 px-8",
  icon: "h-10 w-10"
}

const Button = React.forwardRef(({
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}, ref) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 disabled:pointer-events-none disabled:opacity-50",
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
})
Button.displayName = "Button"

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(Object.keys(buttonVariants)),
  size: PropTypes.oneOf(Object.keys(buttonSizes)),
  children: PropTypes.node,
}
Button.displayName = "Button"

export { Button, buttonVariants }