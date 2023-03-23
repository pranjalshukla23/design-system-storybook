export const Card = ({ children, style }) => {
  return (
    <div
      className={`w-72 rounded-2xl flex flex-col justify-between items-center bg-slate-100  box-border shadow-6xl gap-4 p-4 text-black border-2`}
      style={style}
    >
      {children}
    </div>
  );
};
