"use client";

import { useTheme } from "@mui/material";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "ghost" | "outline";
  size?: "small" | "medium" | "large";
  children: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  fullWidth?: boolean;
}

export function Button({
  variant = "solid",
  size = "medium",
  children,
  startIcon,
  endIcon,
  fullWidth = false,
  className = "",
  disabled = false,
  ...props
}: Readonly<ButtonProps>) {
  // Size classes
  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-2.5 text-base",
    large: "px-8 py-3 text-lg",
  };
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  // Base classes
  const baseClasses =
    `relative inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer hover:shadow ${isDark ? "hover:shadow-secondary hover:shadow-lg" : ""}`;

  // Variant classes
  const variantClasses = {
    solid:
      "bg-gradient-to-br from-primary to-secondary text-white hover:from-primary-dark hover:to-secondary-dark hover:scale-105 hover:shadow active:scale-95 shadow-lg shadow-secondary/25",
    ghost:
      `bg-transparent hover:bg-primary/5 hover:scale-105 hover:shadow ${isDark ? "hover:text-white hover:bg-white/5 text-secondary-dark" : "text-primary"} active:bg-primary/10 active:scale-95`,
    outline:
      `border-2 bg-transparent color-primary hover:bg-secondary/10 hover:scale-105 hover:shadow ${isDark ? "hover:text-white hover:bg-white/5 border-secondary text-secondary" : "text-primary"} active:bg-primary/10 active:scale-95`,
  };

  return (
    <button
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {startIcon && <span className="flex items-center">{startIcon}</span>}
      <span>{children}</span>
      {endIcon && <span className="flex items-center">{endIcon}</span>}
    </button>
  );
}
