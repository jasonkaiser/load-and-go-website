import { useState, useEffect } from "react";
import InputForm from "../ui/inputform";

const StepTwo = ({ onNext, onBack, updateFormData, formData }) => {
  const [localData, setLocalData] = useState({
    country: "",
    city: "",
    zip: "",
    pickupAddress: "",
    dropoffAddress: "",
    instructions: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setLocalData({
      country: formData.country || "",
      city: formData.city || "",
      zip: formData.zip || "",
      pickupAddress: formData.pickupAddress || "",
      dropoffAddress: formData.dropoffAddress || "",
      instructions: formData.instructions || "",
    });
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!localData.country.trim()) newErrors.country = "Country is required";
    if (!localData.city.trim()) newErrors.city = "City is required";
    if (!localData.zip.trim()) newErrors.zip = "Zip Code is required";
    if (!localData.pickupAddress.trim()) newErrors.pickupAddress = "Pickup Address is required";
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
    updateFormData(localData);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-md:items-center">
      <InputForm
        name="country"
        type="text"
        placeholder="Country"
        value={localData.country}
        onChange={handleChange}
      />
      {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}

      <InputForm
        name="city"
        type="text"
        placeholder="City"
        value={localData.city}
        onChange={handleChange}
      />
      {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}

      <InputForm
        name="zip"
        type="text"
        placeholder="Zip Code"
        value={localData.zip}
        onChange={handleChange}
      />
      {errors.zip && <p className="text-red-500 text-sm">{errors.zip}</p>}

      <InputForm
        name="pickupAddress"
        type="text"
        placeholder="Pickup Address"
        value={localData.pickupAddress}
        onChange={handleChange}
      />
      {errors.pickupAddress && <p className="text-red-500 text-sm">{errors.pickupAddress}</p>}

      <InputForm
        name="dropoffAddress"
        type="text"
        placeholder="Drop-off Address (optional)"
        value={localData.dropoffAddress}
        onChange={handleChange}
      />

      <textarea
        name="instructions"
        placeholder="Special Instructions (optional)"
        className="w-full p-4 !outline-none rounded-2xl bg-black text-gray-200 placeholder:text-gray-400 border-2 border-transparent focus:border-primary focus:ring-4 focus:ring-primary/40 transition"
        rows="4"
        value={localData.instructions}
        onChange={handleChange}
      />

      <div className="flex justify-between gap-20 mt-4">
        <button
          type="button"
          onClick={() => {
            updateFormData(localData); // save progress before going back
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

export default StepTwo;
