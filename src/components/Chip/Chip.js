export const Chip = ({
  label = "hello",
  size = "sm",
  color = "primary",
  ratingIcon,
  style,
}) => {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;
  return (
    <div
      className={` max-w-fit flex justify-between items-center  border-2 text-black rounded-md px-1 py-1 gap-2 ${
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
      {label} {ratingIcon}
    </div>
  );
};
