import { Typography } from "../Typography";

export const Icon = ({ icon }) => {
  return (
    <div className='flex flex-col text-3xl w-48 h-24 items-center justify-center gap-4 bg-slate-100 shadow-lg'>
      {icon.component}
      <Typography
        style={{
          color: "gray",
        }}
      >
        {icon.name}
      </Typography>
    </div>
  );
};
