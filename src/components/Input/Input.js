import React from "react";

export const Input = ({
  className,
  id,
  name,
  variant = "outlined",
  type = "text",
  size = "sm",
  value,
  onChange: setValue,
  fullWidth,
  style,
  placeholder = "Enter something here",
}) => {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;
  const newStyle = { ...style, padding: `${scale * 0.5}rem ${scale * 1}rem` };

  return (
    <div className={`${className} relative`}>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className={` font-normal rounded-xl outline-0 focus:border-[3px] focus:border-blue-500 focus:ring-0 focus:ring-inherit bg-white ${
          variant === "standard"
            ? "border-b-2 border-b-slate-300 "
            : variant === "filled"
            ? "border-b-2 border-b-gray-500 bg-blue-500"
            : "border-1 border-bcolor"
        } ${fullWidth ? "w-full" : ""}
        
       `}
        style={newStyle}
      />
    </div>
  );
};
