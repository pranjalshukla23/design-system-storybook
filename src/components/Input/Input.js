import React from "react";

export const Input = ({
  id,
  name,
  variant = "outlined",
  type = "text",
  size = "md",
  val,
  setValue,
  fullWidth,
  style,
  placeholder = "Enter something here",
}) => {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;
  const newStyle = { ...style, padding: `${scale * 0.5}rem ${scale * 1}rem` };

  return (
    <>
      <input
        id={id}
        name={name}
        style={newStyle}
        type={type}
        value={val}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className={` rounded-md outline-none ${
          variant === "standard"
            ? "border-b-2 border-b-slate-300 "
            : variant === "filled"
            ? "border-b-2 border-b-gray-500 bg-blue-500"
            : "border-2 border-gray-300"
        } ${fullWidth ? "w-full" : ""}
        
       `}
      />
    </>
  );
};
