export const Card = ({ children, style }) => {
  return (
    <div
      className={`w-72 rounded-2xl flex flex-col justify-between items-center   box-border shadow-2xl gap-2 p-4 text-black border-2 border-slate-100`}
      style={style}
    >
      {children}
    </div>
  );
};
