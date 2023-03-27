import React from "react";

export const Input = ({
  id,
  name,
  variant = "outlined",
  type = "text",
  size = "sm",
  value,
  onChange: setValue,
  fullWidth,
  style,
  icon,
  placeholder = "Enter something here",
}) => {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;
  const newStyle = { ...style, padding: `${scale * 0.5}rem ${scale * 1}rem` };

  return (
    <div className='relative'>
      <input
        id={id}
        name={name}
        style={newStyle}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className={` rounded-xl outline-none ${
          variant === "standard"
            ? "border-b-2 border-b-slate-300 "
            : variant === "filled"
            ? "border-b-2 border-b-gray-500 bg-blue-500"
            : "border-1 border-bcolor"
        } ${fullWidth ? "w-full" : ""}
        
       `}
      />
      <div className='absolute top-3 right-0'>{icon}</div>
    </div>
  );
};
