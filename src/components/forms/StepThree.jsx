import { useState, useEffect } from "react";
import InputForm from "../ui/inputform";

const formSchema = {
  "Small and Large Moves": [
    { name: "itemType", type: "text", placeholder: "What are you moving?", required: true },
    { name: "boxSizes", type: "text", placeholder: "Box sizes or quantity" },
    { name: "pickupFloor", type: "text", placeholder: "Pickup floor (elevator/stairs?)" },
    { name: "dropoffFloor", type: "text", placeholder: "Drop-off floor (elevator/stairs?)" },
    { name: "specialItems", type: "text", placeholder: "Fragile/heavy items (e.g. piano, safe)?" },
  ],
  "Packing service": [
    { name: "itemType", type: "text", placeholder: "What needs to be packed?", required: true },
    { name: "estimatedBoxes", type: "text", placeholder: "Estimated box quantity", required: true },
    { name: "packingMaterials", type: "checkbox", label: "Need packing materials provided?" },
    { name: "fragileItems", type: "text", placeholder: "Any fragile/special items?" },
  ],
  "Furniture assembly & disassembly": [
    { name: "itemType", type: "text", placeholder: "Type of furniture", required: true },
    { name: "quantity", type: "number", placeholder: "How many items?", required: true },
    { name: "disassembly", type: "checkbox", label: "Need disassembly service?" },
    { name: "toolsOrInstructions", type: "text", placeholder: "Any tools/instructions needed?" },
  ],
  "Express moves": [
    { name: "itemType", type: "text", placeholder: "What needs to be moved?", required: true },
    { name: "locationDistance", type: "text", placeholder: "Distance in km (approx)", required: true },
    {
      name: "urgency",
      type: "select",
      options: ["", "asap", "24h", "scheduled"],
      placeholder: "Select urgency",
    },
    { name: "accessNotes", type: "text", placeholder: "Any access or parking notes?" },
  ],
  "Disposal of old furniture": [
    { name: "itemType", type: "text", placeholder: "Item(s) to dispose of", required: true },
    { name: "quantity", type: "text", placeholder: "How many items?" },
    { name: "pickupFloor", type: "text", placeholder: "Which floor is it on?" },
    { name: "hazardous", type: "text", placeholder: "Any hazardous materials?" },
    { name: "indoor", type: "checkbox", label: "Is the furniture indoors?" },
  ],
  default: [
    { name: "notes", type: "textarea", placeholder: "Tell us more about your request", required: true },
  ],
};

const StepThree = ({ service, onBack, onSubmit, formData }) => {
  const [localData, setLocalData] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const initialFields = formSchema[service] || formSchema.default;
    const initialState = {};
    initialFields.forEach(field => {
      initialState[field.name] = formData[field.name] ?? (field.type === "checkbox" ? false : "");
    });
    setLocalData(initialState);
  }, [formData, service]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLocalData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const currentSchema = formSchema[service] || formSchema.default;
    const newErrors = {};

    currentSchema.forEach(field => {
      if (field.required) {
        const value = localData[field.name];
        if (
          value === undefined ||
          (typeof value === "string" && !value.trim()) ||
          (typeof value === "number" && value === "")
        ) {
          newErrors[field.name] = "This field is required";
        }
      }
    });

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    onSubmit(localData);
  };

  const renderFields = () => {
    const currentSchema = formSchema[service] || formSchema.default;

    return currentSchema.map(field => {
      if (field.type === "checkbox") {
        return (
          <label
            key={field.name}
            className="flex items-center gap-2 text-sm text-gray-400 bg-black p-5 w-full rounded-2xl"
          >
            <input
              type="checkbox"
              name={field.name}
              checked={localData[field.name]}
              onChange={handleChange}
            />
            {field.label}
          </label>
        );
      }

      if (field.type === "select") {
        return (
          <select
            key={field.name}
            name={field.name}
            className="w-full p-3 rounded-xl bg-black text-gray-400 focus:border-primary !outline-none border-2 border-transparent focus:ring-4 focus:ring-primary/40 transition duration-300"
            value={localData[field.name]}
            onChange={handleChange}
          >
            <option value="">{field.placeholder}</option>
            {field.options.slice(1).map((option) => (
              <option key={option} value={option}>{option.toUpperCase()}</option>
            ))}
          </select>
        );
      }

      if (field.type === "textarea") {
        return (
          <textarea
            key={field.name}
            name={field.name}
            placeholder={field.placeholder}
            className="w-full !outline-none p-4 rounded-2xl bg-black text-gray-200 placeholder:text-gray-400 border-2 border-transparent focus:border-primary focus:ring-4 focus:ring-primary/40 transition"
            rows="4"
            value={localData[field.name]}
            onChange={handleChange}
          />
        );
      }

      return (
        <div key={field.name}>
          <InputForm
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            value={localData[field.name]}
            onChange={handleChange}
          />
          {errors[field.name] && (
            <p className="text-red-500 text-sm">{errors[field.name]}</p>
          )}
        </div>
      );
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {renderFields()}

      <div className="flex justify-between gap-20 mt-4">
        <button
          type="button"
          onClick={() => {
            onSubmit(localData, { skipSubmit: true });
            onBack();
          }}
          className="sequelFont-Bold text-sm text-white !bg-gray-300 px-6 py-3 rounded-xl !outline-none"
        >
          Back
        </button>
        <button
          type="submit"
          className="sequelFont-Bold !bg-primary text-black px-6 py-3 rounded-xl !outline-none"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default StepThree;
