import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
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

const handleSubmit = (finalStepData, options = {}) => {
  const rawData = { ...formData, ...finalStepData, service };


  if (options.skipSubmit) {
    setFormData(rawData);
    return;
  }

  const fullData = {
    fullName: rawData.fullName || "",
    phone: rawData.phone || "",
    email: rawData.email || "",
    date: rawData.date || "",
    time: rawData.time || "",

    country: rawData.country || "",
    city: rawData.city || "",
    zip: rawData.zip || "",
    pickupAddress: rawData.pickupAddress || "",
    dropoffAddress: rawData.dropoffAddress || "",
    instructions: rawData.instructions || "",

    service: rawData.service || "",

    itemType: rawData.itemType || "",
    boxSizes: rawData.boxSizes || "",
    pickupFloor: rawData.pickupFloor || "",
    dropoffFloor: rawData.dropoffFloor || "",
    specialItems: rawData.specialItems || "",

    estimatedBoxes: rawData.estimatedBoxes || "",
    packingMaterials: rawData.packingMaterials ? "Yes" : "No",
    fragileItems: rawData.fragileItems || "",

    quantity: rawData.quantity || "",
    disassembly: rawData.disassembly ? "Yes" : "No",
    toolsOrInstructions: rawData.toolsOrInstructions || "",

    locationDistance: rawData.locationDistance || "",
    urgency: rawData.urgency || "",
    accessNotes: rawData.accessNotes || "",

    hazardous: rawData.hazardous || "",
    indoor: rawData.indoor ? "Yes" : "No",

    notes: rawData.notes || "",
  };

  setIsSubmitting(true);
  setMessage("");

  console.log("Sending data to EmailJS:", fullData);

  emailjs
    .send("service_gtwypqa", "template_t3iw3jh", fullData, "Bl55RWTec1Qhzl1xv")
    .then(() => {
      setMessage("Your request has been sent successfully.");
      setIsSuccess(true);
      setStep(1);
      setFormData({});
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    })
    .catch(() => {
      setMessage("Failed to send request. Please try again.");
    })
    .finally(() => setIsSubmitting(false));
};


  return (
    <div className="mx-auto p-4 max-w-4xl w-full max-md:w-full">
      {isSuccess ? (
        <div className="bg-primary text-black rounded-2xl p-10 text-center text-lg font-semibold flex flex-col justify-center items-center">
          <AiFillCheckCircle size={64} />
          Your request has been sent successfully.
        </div>
      ) : (
        <div className="bg-gray-50 rounded-2xl border-2 border-dashed border-primary p-10">
          <div className="mb-6 text-lg font-semibold">
            <div className="flex justify-between items-center mb-10 max-md:flex-col max-md:items-start max-md:gap-10">
              {["Your Details", "Address Info", "Service Questions"].map((label, index) => {
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
                    {index < 2 && (
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

          {step === 1 && <StepOne updateFormData={updateFormData} onNext={nextStep} formData={formData} />}
          {step === 2 && <StepTwo updateFormData={updateFormData} onNext={nextStep} onBack={prevStep} formData={formData} />}
          {step === 3 && (
            <StepThree service={service} onBack={prevStep} onSubmit={handleSubmit} formData={formData} />
          )}

          {isSubmitting && (
            <p className="text-center text-gray-600 mt-4">Sending request...</p>
          )}
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
