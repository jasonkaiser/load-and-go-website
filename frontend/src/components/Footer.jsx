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
      className="bg-gray-100 text-gray-300 py-8 w-[99.2vw] place-self-center mt-30 mb-[-30px] rounded-t-4xl overflow-hidden"
    >
      <div className="container mx-auto px-6 flex flex-col justify-between items-center gap-6">
        {/* Logo */}
        <motion.img
          src={logo}
          width={96}
          height={96}
          alt="Logo"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
        />

        {/* Navigation Links */}
        <motion.nav
          className="flex flex-wrap justify-center gap-20 !text-white sequelFont-Bold max-md:flex-col max-md:gap-5 mb-10"
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
          {["Home", "About", "Services", "Contact"].map((item, index) => (
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

        <hr className="w-[95vw] border-gray-500" />
      </div>

      <motion.div
        className="flex flex-col md:flex-row justify-between items-center mx-10 px-6 py-6 max-md:gap-10 text-gray-300"
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
        {/* Social Icons */}
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

        {/* Credits */}
        <motion.a
          href="https://www.linkedin.com/in/jason-kaiser-1922022b8/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black ml-35 max-md:ml-0"
          variants={fadeUp}
        >
          Site created by <strong className="text-primary">Jason Kaiser</strong>
        </motion.a>

        {/* Copyright */}
        <motion.div className="text-gray-900 text-sm text-center" variants={fadeUp}>
          &copy; {new Date().getFullYear()} Load and Go. All rights reserved.
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
