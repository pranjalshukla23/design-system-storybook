import React from "react";
export const Card = ({ children, style }) => {
  return (
    <div
      className={`w-72 rounded-2xl flex flex-col justify-between items-center   box-border shadow-3xl gap-2.5 p-4 text-black`}
      style={style}
    >
      {children}
    </div>
  );
};
