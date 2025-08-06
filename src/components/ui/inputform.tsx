const InputForm = ({ placeholder, type, width = "w-full", name, value, onChange, label }) => {
  const isDateOrTime = type === "date" || type === "time";

  const containerClasses = isDateOrTime
    ? "relative w-full max-w-xs md:max-w-full md:w-full max-md:block max-md:text-left max-md:ml-0"
    : `relative ${width}`;


  const inputClasses = `
    bg-black placeholder-gray-400 placeholder:text-[14px] text-gray-200 sequelFont !outline-none 
    border-2 border-transparent focus:border-primary focus:ring-4 focus:ring-primary/40 transition duration-300 
    max-md:w-full max-md:text-left
    ${isDateOrTime 
      ? "rounded-2xl max-md:rounded-lg p-3 pl-4 w-full md:w-auto md:p-4 md:pl-6 md:mx-auto" 
      : "rounded-2xl w-full p-4 pl-6"}
  `;

  return (
    <div className={containerClasses}>
      {label && (
        <label 
          htmlFor={name} 
          className="block mb-1 text-black text-left text-sm md:hidden"
        >
          {label}
        </label>
      )}
      <input
        id={name}
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
