import { useState, useEffect } from "react";
import InputForm from "../ui/InputForm";

const StepOne = ({ updateFormData, onNext, formData }) => {
  const [data, setData] = useState({
    fullName: "",
    phone: "",
    email: "",
    country: "",
    city: "",
    zip: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (formData) setData((prev) => ({ ...prev, ...formData }));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // clear error on change
  };

  const validate = () => {
    const newErrors = {};

    if (!data.fullName.trim()) newErrors.fullName = "Bitte geben Sie Ihren Namen ein.";
    if (!data.phone.trim()) newErrors.phone = "Bitte geben Sie Ihre Telefonnummer ein.";
    if (!data.email.trim()) {
      newErrors.email = "Bitte geben Sie Ihre E-Mail ein.";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) {
      newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      updateFormData(data);
      onNext();
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Ihre Daten</h2>

      <InputForm
        name="fullName"
        type="text"
        value={data.fullName}
        onChange={handleChange}
        placeholder="Vollständiger Name"
      />
      {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}

      <InputForm
        name="phone"
        type="text"
        value={data.phone}
        onChange={handleChange}
        placeholder="Telefonnummer"
      />
      {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

      <InputForm
        name="email"
        type="email"
        value={data.email}
        onChange={handleChange}
        placeholder="E-Mail"
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      <InputForm
        name="country"
        type="text"
        value={data.country}
        onChange={handleChange}
        placeholder="Land"
      />

      <InputForm
        name="city"
        type="text"
        value={data.city}
        onChange={handleChange}
        placeholder="Stadt"
      />

      <InputForm
        name="zip"
        type="text"
        value={data.zip}
        onChange={handleChange}
        placeholder="PLZ"
      />

      <InputForm
        name="address"
        type="text"
        value={data.address}
        onChange={handleChange}
        placeholder="Adresse"
      />

      <div className="flex justify-end">
        <button
          onClick={handleNext}
          className="!bg-primary !text-white !font-semibold !px-8 !py-3 !rounded-xl hover:!bg-yellow-400 transition-colors"
        >
          Weiter
        </button>
      </div>
    </div>
  );
};

export default StepOne;
