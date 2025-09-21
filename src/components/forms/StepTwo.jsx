import { useState, useEffect } from "react";
import InputForm from "../ui/InputForm"; 

const StepTwo = ({ updateFormData, onBack, onSubmit, formData }) => {
  const [data, setData] = useState({
    message: "",
  });

  useEffect(() => {
    if (formData) setData((prev) => ({ ...prev, ...formData }));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    updateFormData(data);
    onSubmit(data);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Ihre Anfrage</h2>

      <InputForm
        name="message"
        type="textarea"
        value={data.message}
        onChange={handleChange}
        rows={8} // bigger box for detailed description
        placeholder="Beschreiben Sie genau, was Sie von diesem Service wünschen..."
        className="!bg-black !text-gray-200 placeholder:!text-gray-400 !rounded-2xl !p-4 !outline-none border-2 border-transparent focus:!border-primary focus:!ring-4 focus:!ring-primary/40 transition-all"
      />

      <div className="flex justify-between mt-4">
        <button
          onClick={onBack}
          className="!bg-gray-200 !text-white !px-8 !py-3 !rounded-xl hover:!bg-gray-300 transition-colors"
        >
          Zurück
        </button>

        <button
          onClick={handleSubmit}
          className="!bg-primary !text-black !font-semibold !px-8 !py-3 !rounded-xl hover:!bg-yellow-400 transition-colors"
        >
          Anfrage senden
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
