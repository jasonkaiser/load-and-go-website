import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdLocalShipping } from "react-icons/md";
import WavyRoad from "../ui/WavyRoad"
import { TextReveal } from "../ui/text-reveal";
import { motion } from "framer-motion";

const Main = ({ introComplete }) => {
  const location = useLocation();
  const [startAnimations, setStartAnimations] = useState(false);

  useEffect(() => {
    if (introComplete) {
      const timeout = setTimeout(() => {
        setStartAnimations(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [introComplete]);

  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.substring(1));
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <section id="home" className="flex items-center justify-center h-screen flex-col">
      <WavyRoad />

      {startAnimations && (
        <>
          <div>
            <TextReveal
              className="text-8xl font-bold sequelFont max-md:text-4xl"
              delay={0.05}
              duration={0.6}
              from="bottom"
              split="letter"
            >
              Umziehen ist nicht nur
            </TextReveal>

            <TextReveal
              className="text-8xl font-bold text-primary sequelFont-Bold max-md:text-6xl"
              delay={0.05}
              duration={0.6}
              from="bottom"
              split="letter"
            >
              Transport
            </TextReveal>
          </div>

          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 24,
              mass: 0.8,
              delay: 0.2,
            }}
            className="sequelFont ml-65 mt-9 border-2 border-black border-dashed pb-1 rounded-4xl px-5 max-md:ml-0 z-10"
          >
            <h2 className="text-5xl font-semibold py-3 max-md:text-3xl">
              es ist ein neuer{" "}
              <span className="font-bold text-primary sequelFont-Bold">Anfang</span>
            </h2>
          </motion.div>

          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.7 }}
            className="w-60 h-15 relative !text-white text-2xl !bg-black !rounded-4xl p-3 px-8 mt-40 flex items-center justify-center gap-4 overflow-hidden group z-10 !outline-none"
          >
            <MdLocalShipping
              className="w-10 h-10 text-primary transition-all duration-500 ease-in-out absolute left-5 top-1/2 -translate-y-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2"
            />
            <span className="transition-opacity duration-500 ease-in-out group-hover:opacity-0 ml-8">
              Jetzt starten
            </span>
          </motion.a>
        </>
      )}
    </section>
  );
};

export default Main;
