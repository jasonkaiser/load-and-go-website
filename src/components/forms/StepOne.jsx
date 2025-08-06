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

  // Sync with formData when component mounts or when navigating back
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
    if (!data.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!data.phone.trim()) newErrors.phone = "Phone is required";
    if (!data.email.trim()) newErrors.email = "Email is required";
    if (!data.date.trim()) newErrors.date = "Date is required";
    if (!data.time.trim()) newErrors.time = "Time is required";
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
        placeholder="Full Name"
        value={data.fullName}
        onChange={handleChange}
      />
      {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}

      <InputForm
        name="phone"
        type="tel"
        placeholder="Phone"
        value={data.phone}
        onChange={handleChange}
      />
      {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

      <InputForm
        name="email"
        type="email"
        placeholder="Email"
        value={data.email}
        onChange={handleChange}
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      <InputForm
        name="date"
        type="date"
        placeholder="Date"
        value={data.date}
        onChange={handleChange}
      />
      {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}

      <InputForm
        name="time"
        type="time"
        placeholder="Time"
        value={data.time}
        onChange={handleChange}
      />
      {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}

      <button
        type="submit"
        className="sequelFont-Bold !bg-primary text-black px-6 py-3 rounded-xl mt-4 self-end max-md:self-center !outline-none"
      >
        Next
      </button>
    </form>
  );
};

export default StepOne;
