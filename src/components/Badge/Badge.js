export const Badge = ({
  label = "hello",
  color = "primary",
  ratingIcon,
  placeIcon = "right",
  style,
}) => {
  return (
    <div
      className={` max-w-fit text-black rounded-md px-2 py-1 text-center flex justify-between items-center text-sm ${
        color === "primary"
          ? "bg-[#E9EBFF]"
          : color === "secondary"
          ? "bg-[#1B2054]"
          : color === "success"
          ? "bg-green-300"
          : color === "error"
          ? "bg-red-500"
          : "bg-inherit"
      }`}
      style={style}
    >
      <div
        className={`w-full flex ${
          placeIcon === "left" ? "flex-row-reverse" : "flex-row"
        } items-center justify-between gap-1`}
      >
        <span>{label}</span>

        {placeIcon !== "hidden" && <div className=''>{ratingIcon}</div>}
      </div>
    </div>
  );
};
