import { useState, useEffect } from "react";
import InputForm from "../ui/inputform";

const StepOne = ({ onNext, updateFormData, formData }) => {
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    fullName: "",
    phone: "",
    email: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    setData({
      fullName: formData.fullName || "",
      phone: formData.phone || "",
      email: formData.email || "",
      date: formData.date || "",
      time: formData.time || "",
    });
  }, [formData]);

  const validate = (data) => {
    const newErrors = {};
    if (!data.fullName.trim()) newErrors.fullName = "Vollständiger Name ist erforderlich";
    if (!data.phone.trim()) newErrors.phone = "Telefonnummer ist erforderlich";
    if (!data.email.trim()) newErrors.email = "E-Mail ist erforderlich";
    if (!data.date.trim()) newErrors.date = "Datum ist erforderlich";
    if (!data.time.trim()) newErrors.time = "Uhrzeit ist erforderlich";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    updateFormData(data);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-md:items-center">
      <InputForm
        name="fullName"
        type="text"
        placeholder="Vollständiger Name"
        value={data.fullName}
        onChange={handleChange}
      />
      {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}

      <InputForm
        name="phone"
        type="tel"
        placeholder="Telefonnummer"
        value={data.phone}
        onChange={handleChange}
      />
      {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

      <InputForm
        name="email"
        type="email"
        placeholder="E-Mail"
        value={data.email}
        onChange={handleChange}
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      <div className="mt-10 flex flex-col gap-5 place-self-center">
        <InputForm
          label="Datum auswählen"
          name="date"
          type="date"
          placeholder="Datum"
          value={data.date}
          onChange={handleChange}
        />
        {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}

        <InputForm
          label="Uhrzeit auswählen"
          name="time"
          type="time"
          placeholder="Uhrzeit"
          value={data.time}
          onChange={handleChange}
        />
        {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
      </div>

      <button
        type="submit"
        className="sequelFont-Bold !bg-primary text-black px-6 py-3 rounded-xl mt-4 self-end max-md:self-center !outline-none"
      >
        Weiter
      </button>
    </form>
  );
};

export default StepOne;
