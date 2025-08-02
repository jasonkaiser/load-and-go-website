import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo2.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer
      ref={ref}
      className="bg-gray-100 text-gray-300 py-8 w-screen overflow-hidden mt-30 mb-[-30px] rounded-t-4xl place-self-center"

    >
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6">
       
        <motion.img
          src={logo}
          width={96}
          height={96}
          alt="Logo"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
        />

       
        <motion.nav
          className="flex flex-wrap justify-center gap-10 max-sm:gap-5 !text-white sequelFont-Bold max-md:flex-col mb-10"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {["Home", "About", "Services", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:!text-primary transition-colors"
              variants={fadeUp}
            >
              {item}
            </motion.a>
          ))}
        </motion.nav>

        <hr className="w-full max-w-screen border-gray-500" />
      </div>

      <motion.div
        className="w-full px-4 md:px-6 py-6 flex flex-col md:flex-row justify-between items-center max-md:gap-10 text-gray-300 max-w-screen-xl mx-auto"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.4,
            },
          },
        }}
      >
       
        <motion.div className="flex gap-5 text-gray-400" variants={fadeUp}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:!text-primary transition-colors"
          >
            <FaInstagram className="text-xl" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:!text-primary transition-colors"
          >
            <FaFacebook className="text-xl" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:!text-primary transition-colors"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </motion.div>

    
        <motion.a
          href="https://www.linkedin.com/in/jason-kaiser-1922022b8/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black ml-0 md:ml-10"
          variants={fadeUp}
        >
          Site created by <strong className="text-primary">Jason Kaiser</strong>
        </motion.a>

     
        <motion.div
          className="text-gray-900 text-sm text-center mt-4 md:mt-0"
          variants={fadeUp}
        >
          &copy; {new Date().getFullYear()} Load and Go. All rights reserved.
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
