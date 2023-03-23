import React from "react";

export const Button = ({
  label = "click here",
  color = "primary",
  size = "md",
  variant = "contained",
  onClick,
  onMouseOver,
  onMouseOut,
  style,
}) => {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;
  const newStyle = { ...style, padding: `${scale * 0.5}rem ${scale * 1}rem` };
  return (
    <button
      style={newStyle}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      className={` text-center text-2xl border-2 rounded-md w-52 ${
        color === "success"
          ? "border-1 rounded-md border-inherit bg-green-500 text-black"
          : color === "secondary"
          ? "border-0 text-black bg-blue-400"
          : color === "error"
          ? "border-2 border-red-500 rounded-md text-black font-bold bg-red-500"
          : "border-0 bg-none text-black"
      }

      ${
        variant === "text"
          ? "border-0 text-black"
          : variant === "contained"
          ? "bg-blue-400 text-black rounded-md"
          : variant === "outlined"
          ? "border-2 border-blue-400 text-black bg-inherit"
          : ""
      }

      `}
    >
      {label}
    </button>
  );
};

export default Button;
