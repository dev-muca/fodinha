import { twMerge } from "tailwind-merge";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({ className, ...props }: InputProps) {
  const defaultClass = twMerge(
    "w-full border rounded px-2 py-1 outline-white text-white",
    className
  );

  return <input className={defaultClass} {...props} />;
}
