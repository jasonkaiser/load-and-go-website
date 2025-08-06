const InputForm = ({ placeholder, type, width = 'w-full', name, value, onChange }) => {
  return (
    <div className={`relative ${width}`}>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}               
        onChange={onChange}         
        className="w-full bg-black p-4 pl-6 rounded-2xl placeholder-gray-200/60 placeholder:text-[14px] text-gray-200 sequelFont !outline-none 
        border-2 border-transparent focus:border-primary focus:ring-4 focus:ring-primary/40 transition duration-300 max-md:w-full"
      />
    </div>
  );
};

export default InputForm;
