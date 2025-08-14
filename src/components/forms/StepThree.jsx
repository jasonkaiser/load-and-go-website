import { useState, useEffect } from "react";
import InputForm from "../ui/inputform";

const formSchema = {
  "Kleine und große Umzüge": [
    { name: "itemType", type: "text", placeholder: "Was möchten Sie transportieren?", required: true },
    { name: "boxSizes", type: "text", placeholder: "Kartongrößen oder Menge" },
    { name: "pickupFloor", type: "text", placeholder: "Abhol-Etage (Aufzug/Treppe?)" },
    { name: "dropoffFloor", type: "text", placeholder: "Liefer-Etage (Aufzug/Treppe?)" },
    { name: "specialItems", type: "text", placeholder: "Empfindliche/schwere Gegenstände (z. B. Klavier, Safe)?" },
  ],
  "Verpackungsservice": [
    { name: "itemType", type: "text", placeholder: "Was soll verpackt werden?", required: true },
    { name: "estimatedBoxes", type: "text", placeholder: "Geschätzte Kartonanzahl", required: true },
    { name: "packingMaterials", type: "checkbox", label: "Verpackungsmaterialien bereitstellen?" },
    { name: "fragileItems", type: "text", placeholder: "Empfindliche/besondere Gegenstände?" },
  ],
  "Möbelmontage & -demontage": [
    { name: "itemType", type: "text", placeholder: "Art der Möbel", required: true },
    { name: "quantity", type: "number", placeholder: "Wie viele Stück?", required: true },
    { name: "disassembly", type: "checkbox", label: "Demontageservice benötigt?" },
    { name: "toolsOrInstructions", type: "text", placeholder: "Werkzeuge/Anweisungen erforderlich?" },
  ],
  "Express-Umzüge": [
    { name: "itemType", type: "text", placeholder: "Was muss transportiert werden?", required: true },
    { name: "locationDistance", type: "text", placeholder: "Entfernung in km (ca.)", required: true },
    {
      name: "urgency",
      type: "select",
      options: ["", "sofort", "24h", "geplant"],
      placeholder: "Dringlichkeit auswählen",
    },
    { name: "accessNotes", type: "text", placeholder: "Zugang- oder Parkhinweise?" },
  ],
  "Entsorgung alter Möbel": [
    { name: "itemType", type: "text", placeholder: "Zu entsorgende Gegenstände", required: true },
    { name: "quantity", type: "text", placeholder: "Wie viele Stück?" },
    { name: "pickupFloor", type: "text", placeholder: "In welcher Etage befindet es sich?" },
    { name: "hazardous", type: "text", placeholder: "Gefährliche Materialien?" },
    { name: "indoor", type: "checkbox", label: "Befindet sich das Möbelstück drinnen?" },
  ],
  "Reinigungsservice": [
    { name: "cleaningType", type: "select", options: ["", "Wohnung", "Büro", "Fenster", "Teppiche"], placeholder: "Art der Reinigung auswählen", required: true },
    { name: "areaSize", type: "text", placeholder: "Größe der Fläche (m²)" },
    { name: "cleaningDate", type: "date", placeholder: "Gewünschtes Reinigungsdatum" },
    { name: "timeSlot", type: "select", options: ["", "Morgen", "Nachmittag", "Abend"], placeholder: "Bevorzugte Uhrzeit" },
    { name: "specialRequests", type: "textarea", placeholder: "Besondere Anforderungen oder Hinweise" },
    { name: "pets", type: "checkbox", label: "Befinden sich Haustiere vor Ort?" },
  ],
  default: [
    { name: "notes", type: "textarea", placeholder: "Erzählen Sie uns mehr über Ihre Anfrage", required: true },
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
          newErrors[field.name] = "Dieses Feld ist erforderlich";
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
          Zurück
        </button>
        <button
          type="submit"
          className="sequelFont-Bold !bg-primary text-black px-6 py-3 rounded-xl !outline-none"
        >
          Weiter
        </button>
      </div>
    </form>
  );
};

export default StepThree;
