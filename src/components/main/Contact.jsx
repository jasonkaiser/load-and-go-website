import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MdLocalShipping, MdPerson, MdEmail, MdMessage } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "Vorname ist erforderlich";
    if (!form.lastName.trim()) newErrors.lastName = "Nachname ist erforderlich";
    if (!form.email.trim()) newErrors.email = "E-Mail ist erforderlich";
    if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "E-Mail ist ungültig";
    if (!form.message.trim()) newErrors.message = "Nachricht ist erforderlich";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    emailjs.send(
      "service_qzajoow",
      "template_t8vyyai",
      {
        from_name: `${form.firstName} ${form.lastName}`,
        from_email: form.email,
        message: form.message,
      },
      "Bl55RWTec1Qhzl1xv"
    ).then(() => {
      setSuccess(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    }, (error) => {
      console.error("E-Mail Fehler:", error.text);
    });
  };

  return (
    <section id="contact" className="flex items-center justify-center flex-col max-md:mt-0 scroll-mt-25">
      <h3 className="mb-4 mt-20">── KONTAKT ──</h3>
      <h2 className=" helveticaBold text-6xl text-black border-2 border-dashed border-primary p-3 px-10 rounded-4xl max-md:text-3xl mb-15">
        Sprich mit uns!
      </h2>

      <div className="pointer-events-none absolute left-0 top-880 max-md:hidden h-screen w-[800px] z-[1] opacity-70 !bg-[radial-gradient(circle_at_left_center,_#fff700_0%,_#ffd700_0%,_rgba(255,255,255,0)_45%)]" />

      {success ? (
        <div className="bg-primary text-black rounded-2xl p-10 text-center text-lg font-semibold flex flex-col justify-center items-center">
          <AiFillCheckCircle size={64} />
          Deine Anfrage wurde erfolgreich gesendet.
        </div>
      ) : (
        <motion.form
          ref={ref}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 bg-gray-100 border-2 border-primary border-dashed p-10 rounded-4xl"
        >
          <div className="flex gap-5 text-gray-200 max-md:flex max-md:flex-col">
            <div className="relative w-80">
              <MdPerson className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary" />
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                type="text"
                placeholder="Vorname"
                className="w-full bg-black p-4 pl-10 rounded-2xl placeholder-gray-200/60 placeholder:text-[14px] text-gray-200 sequelFont !outline-none 
                border-2 border-transparent focus:border-primary focus:ring-4 focus:ring-primary/40 transition duration-300"
              />
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
            </div>

            <div className="relative w-80">
              <MdPerson className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary" />
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                type="text"
                placeholder="Nachname"
                className="w-full bg-black p-4 pl-10 rounded-2xl placeholder-gray-200/60 placeholder:text-[14px] text-gray-200 sequelFont !outline-none 
                border-2 border-transparent focus:border-primary focus:ring-4 focus:ring-primary/40 transition duration-300"
              />
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
            </div>
          </div>

          <div className="relative w-full max-w-[41rem]">
            <MdEmail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary" />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="E-Mail"
              className="w-full bg-black p-4 pl-10 rounded-2xl placeholder-gray-200/60 placeholder:text-[14px] text-gray-200 sequelFont !outline-none 
              border-2 border-transparent focus:border-primary focus:ring-4 focus:ring-primary/40 transition duration-300"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="relative w-full max-w-[41rem]">
            <MdMessage className="absolute left-4 top-6 text-primary" />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="7"
              placeholder="Schreibe deine Nachricht"
              className="w-full bg-black p-4 pl-10 rounded-2xl placeholder-gray-200/60 placeholder:text-[15px] text-gray-200 sequelFont !outline-none 
              border-2 border-transparent focus:border-primary focus:ring-4 focus:ring-primary/40 transition duration-300 resize-none"
            ></textarea>
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="w-44 h-12 relative !text-white text-2xl !bg-primary !rounded-2xl p-3 px-8 flex items-center justify-center gap-4 overflow-hidden group z-10 !outline-none place-self-end max-md:place-self-center transition-all"
          >
            <MdLocalShipping className="w-7 h-7 text-black transition-all duration-500 ease-in-out absolute left-4 top-1/2 -translate-y-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2" />
            <span className="transition-opacity text-black sequelFont-Bold duration-500 ease-in-out group-hover:opacity-0 ml-10">
              Senden
            </span>
          </motion.button>
        </motion.form>
      )}
    </section>
  );
};

export default Contact;
