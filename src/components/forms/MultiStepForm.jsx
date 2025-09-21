import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import emailjs from "@emailjs/browser";
import { AiFillCheckCircle } from "react-icons/ai";

const MultiStepForm = ({ service }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleSubmit = (finalStepData) => {
    const rawData = { ...formData, ...finalStepData, service };

    const fullData = {
      fullName: rawData.fullName || "",
      phone: rawData.phone || "",
      email: rawData.email || "",
      country: rawData.country || "",
      city: rawData.city || "",
      zip: rawData.zip || "",
      address: rawData.address || "",
      message: rawData.message || "",
      service: rawData.service || "",
    };

    setIsSubmitting(true);
    setMessage("");

    emailjs
      .send("service_qzajoow", "template_t3iw3jh", fullData, "Bl55RWTec1Qhzl1xv")
      .then(() => {
        setMessage("✅ Ihre Anfrage wurde erfolgreich gesendet.");
        setIsSuccess(true);
        setStep(1);
        setFormData({});
        setTimeout(() => {
          window.location.href = "/";
        }, 3000);
      })
      .catch(() => {
        setMessage("❌ Senden fehlgeschlagen. Bitte versuchen Sie es erneut.");
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="mx-auto p-4 max-w-4xl w-full max-md:w-full">
      {isSuccess ? (
        <div className="bg-primary text-black rounded-2xl p-10 text-center text-lg font-semibold flex flex-col justify-center items-center">
          <AiFillCheckCircle size={64} />
          Ihre Anfrage wurde erfolgreich gesendet.
        </div>
      ) : (
        <div className="bg-gray-50 rounded-2xl border-2 border-dashed border-primary p-10">
          {/* Step Indicator */}
          <div className="mb-6 text-lg font-semibold">
            <div className="flex justify-between items-center mb-10 max-md:flex-col max-md:items-start max-md:gap-10">
              {["Ihre Daten", "Ihre Anfrage"].map((label, index) => {
                const isActive = step === index + 1;
                const isCompleted = step > index + 1;

                return (
                  <div key={label} className="flex-1 flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold 
                        ${isCompleted ? "!bg-primary text-white" : isActive ? "border-2 border-primary text-primary" : "bg-gray-300 text-white"}`}
                    >
                      {index + 1}
                    </div>
                    <div className={`text-sm ${isActive ? "text-primary font-medium" : "text-gray-400"}`}>
                      {label}
                    </div>
                    {index < 1 && (
                      <div className="flex-1 h-1 bg-gray-300 mx-2 relative">
                        <div
                          className={`absolute top-0 left-0 h-1 transition-all duration-300 ${
                            step > index + 1 ? "bg-primary w-full" : step === index + 1 ? "bg-primary w-1/2" : "bg-gray-300 w-0"
                          }`}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Steps */}
          {step === 1 && <StepOne updateFormData={updateFormData} onNext={nextStep} formData={formData} />}
          {step === 2 && <StepTwo updateFormData={updateFormData} onBack={prevStep} onSubmit={handleSubmit} formData={formData} />}

          {/* Status */}
          {isSubmitting && <p className="text-center text-gray-600 mt-4">Anfrage wird gesendet...</p>}
          {message && (
            <p className={`text-center mt-4 font-medium ${message.includes("✅") ? "text-black" : "text-red-500"}`}>
              {message}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
