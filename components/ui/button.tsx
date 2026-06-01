import * as React from "react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline";
  size?: "sm" | "lg";
}

export function Button({
  variant = "default",
  size = "sm",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const variants = {
    default: "bg-brand-gradient text-white",
    ghost: "bg-transparent hover:bg-white/10",
    outline: "border border-border bg-transparent",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      className={`
        rounded-lg
        font-medium
        transition
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
