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
    <div class='flex items-center mr-4' style={style}>
      <label>
        <input
          type='checkbox'
          id={id}
          name={name}
          value={value}
          onChange={setValue}
          class={`${
            color === "primary"
              ? "accent-blue-500"
              : color === "secondary"
              ? "accent-pink-500"
              : "bg-inherit"
          }`}
        />{" "}
        <span className='text-sm'>{label}</span>
      </label>
    </div>
  );
};
