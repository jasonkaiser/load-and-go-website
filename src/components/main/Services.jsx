import logo from '../../assets/logo-yellow.png';
import packageImage from '../../assets/package.webp';
import { Gauge, Rocket, Zap, BadgeEuro, Users, Truck } from 'lucide-react';
import { MdLocationOn } from 'react-icons/md';
import Clients from '../ui/clients';
import AcordionData from './Special';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Cards from '../ui/cards';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="services"
      className="flex items-center justify-center flex-col mt-40 max-md:mt-20 scroll-mt-25"
    >
     
      <div className="pointer-events-none absolute right-0 top-620 max-md:hidden h-screen w-[800px] z-[1] opacity-70 !bg-[radial-gradient(circle_at_right_center,_#fff700_0%,_#ffd700_0%,_rgba(255,255,255,0)_45%)]" />

      <h3 className="mb-4">── DIENSTLEISTUNGEN ──</h3>

      <h2 className="helveticaBold text-6xl text-black border-2 border-dashed border-amber-300 p-3 px-10 rounded-4xl max-md:text-3xl mb-25 max-md:mb-10">
        Unsere Dienstleistungen
      </h2>

      <div className="relative w-full mx-auto px-4 max-md:px-1 max-md:py-5 justify-self-center">

        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
              delay: 0.1,
            }}
          >
            <Cards />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
