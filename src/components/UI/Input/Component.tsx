import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({ className, ...props }: InputProps) {
  const defaultClass = twMerge(
    "w-full border rounded px-2 py-1 outline-white",
    className
  );

  return <input className={defaultClass} {...props} />;
}
