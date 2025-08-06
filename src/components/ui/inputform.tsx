const InputForm = ({ placeholder, type, width = "w-full", name, value, onChange }) => {
  const isDateOrTime = type === "date" || type === "time";

  const containerClasses = isDateOrTime
    ? "relative max-w-xs w-auto md:max-w-full md:w-full max-md:block max-md:text-left max-md:ml-0"
    : `relative ${width}`;

  const inputClasses = `
    bg-black rounded-2xl placeholder-gray-200/60 placeholder:text-[14px] text-gray-200 sequelFont !outline-none 
    border-2 border-transparent focus:border-primary focus:ring-4 focus:ring-primary/40 transition duration-300 
    max-md:w-full max-md:text-left
    ${isDateOrTime ? "p-3 pl-4 w-auto md:w-full md:p-4 md:pl-6" : "w-full p-4 pl-6"}
  `;

  return (
    <div className={containerClasses}>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={inputClasses}
      />
    </div>
  );
};

export default InputForm;
