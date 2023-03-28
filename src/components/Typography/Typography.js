export const Typography = ({ children, style, variant = "default" }) => {
  console.log(variant);
  return (
    <div
      className={` leading-4 ${
        variant === "h1"
          ? "text-6xl"
          : variant === "h2"
          ? "text-4xl"
          : variant === "h3"
          ? "text-3xl"
          : variant === "h4"
          ? "text-2xl"
          : variant === "h5"
          ? "text-xl"
          : variant === "h6"
          ? "text-lg"
          : "text-base"
      }`}
      style={style}
    >
      {children}
    </div>
  );
};
