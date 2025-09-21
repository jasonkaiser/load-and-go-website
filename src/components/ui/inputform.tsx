const InputForm = ({ placeholder, type, width = "w-full", name, value, onChange, label, rows = 4 }) => {
  const isDateOrTime = type === "date" || type === "time";

  const containerClasses = isDateOrTime
    ? "relative w-full max-w-xs md:max-w-full md:w-full max-md:block max-md:text-left max-md:ml-0"
    : `relative ${width}`;

  const commonClasses = `
    bg-black placeholder-gray-400 placeholder:text-[14px] text-gray-200 sequelFont !outline-none 
    border-2 border-transparent focus:border-primary focus:ring-4 focus:ring-primary/40 transition duration-300 
    max-md:w-full max-md:text-left
  `;

  const inputClasses = isDateOrTime
    ? `rounded-2xl max-md:rounded-2xl p-4 pl-4 w-full md:w-full md:p-4 md:pl-6 md:mx-auto ${commonClasses}`
    : `rounded-2xl w-full p-4 pl-6 ${commonClasses}`;

  return (
    <div className={containerClasses}>
      {label && (
        <label 
          htmlFor={name} 
          className="block mb-1 text-white text-center text-sm md:hidden"
        >
          {label}
        </label>
      )}

      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows}
          className={`rounded-2xl w-full p-4 !outline-none bg-black text-gray-200 placeholder-gray-400 border-2 border-transparent focus:border-primary focus:ring-4 focus:ring-primary/40 transition-all`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={inputClasses}
        />
      )}
    </div>
  );
};

export default InputForm;
