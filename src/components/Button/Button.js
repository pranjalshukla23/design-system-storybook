import React from "react";

export const Button = ({
  label = "Submit",
  color = "primary",
  size = "sm",
  variant = "contained",
  icon,
  onClick,
  onMouseOver,
  onMouseOut,
  style,
}) => {
  let scale = 1;
  if (size === "sm") scale = 0.95;
  if (size === "lg") scale = 1.5;
  const newStyle = { ...style, padding: `${scale * 0.5}rem ${scale * 1}rem` };
  return (
    <button
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      className={` text-base  font-bold rounded-lg w-52${
        color === "success"
          ? " text-white   bg-green-500"
          : color === "secondary"
          ? " text-white  bg-purple-400"
          : color === "error"
          ? " text-white   font-bold bg-red-500"
          : color === "primary"
          ? " text-white bg-[#1B2054]"
          : " text-black bg-none border-2"
      }

      ${
        variant === "text"
          ? "border-none bg-none text-black"
          : "border-none bg-[#1B2054] text-white"
      }

      `}
      style={newStyle}
    >
      <div className='w-full flex items-center justify-between'>
        <div className='w-3/4 flex justify-center items-center'>{label}</div>

        {icon}
      </div>
    </button>
  );
};

export default Button;
