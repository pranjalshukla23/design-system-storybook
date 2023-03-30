import React from "react";

export const Button = ({
  label = "Submit",
  color = "primary",
  size = "lg",
  icon,
  onClick,
  onMouseOver,
  onMouseOut,
  style,
  placeIcon = "right",
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
      className={` text-base  font-bold rounded-lg ${
        size === "sm" ? "w-32" : size === "md" ? "w-52" : "w-60"
      }
        ${
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

      `}
      style={newStyle}
    >
      <div
        className={`w-full flex ${
          placeIcon === "left" ? "flex-row-reverse" : "flex-row"
        } items-center justify-between gap-1`}
      >
        <span className='w-full  flex justify-center items-center'>
          {label}
        </span>

        {placeIcon !== "hidden" && <>{icon}</>}
      </div>
    </button>
  );
};

export default Button;
