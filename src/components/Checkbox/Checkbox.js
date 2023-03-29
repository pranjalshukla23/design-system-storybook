export const Checkbox = ({
  label = "hello",
  id,
  name,
  value,
  onChange: setValue,
  color = "primary",
  style,
}) => {
  return (
    <div style={style}>
      <label className='flex justify-between items-center gap-2 max-w-fit '>
        <input
          type='checkbox'
          id={id}
          name={name}
          value={value}
          onChange={setValue}
          class={`${
            color === "primary" ? "text-[#1B2054]" : "text-pink-600"
          } focus:ring-0 rounded-full w-5 h-5 border-2 border-[#1B2054]`}
        />{" "}
        <span className='leading-3'>{label}</span>
      </label>
    </div>
  );
};
