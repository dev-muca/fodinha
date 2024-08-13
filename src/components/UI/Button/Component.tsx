import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode;
  className?: string;
}

export default function Button({ children, className, ...props }: ButtonProps) {
  const defaultClass = twMerge(
    "rounded border border-white bg-white font-semibold text-black px-2 py-1",
    className
  );

  return (
    <button className={defaultClass} {...props}>
      {children}
    </button>
  );
}
