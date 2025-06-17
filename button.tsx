// button.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export function Button({ className, variant = "default", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center px-4 py-2 text-sm font-medium rounded-md",
        variant === "outline" ? "border border-gray-300" : "bg-blue-600 text-white",
        className
      )}
      {...props}
    />
  );
}
