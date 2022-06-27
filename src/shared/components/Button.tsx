import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
}

export default function Button({
  children,
  fullWidth = false,
  ...rest
}: Props) {
  return (
    <button
      {...rest}
      className={`bg-purple-600 my-6 p-2 px-10 text-white rounded-md hover:bg-purple-800 focus:bg-purple-800 outline-none uppercase ${
        fullWidth ? "w-full" : ""
      }`}
    >
      {children}
    </button>
  );
}
