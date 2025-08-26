import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/logo2.png";
import { Link } from "react-router-dom";

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
    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen mt-50 mb-[-30px]">
      <footer
        ref={ref}
        className="bg-gray-100 text-gray-800 py-10 rounded-t-4xl overflow-x-hidden"
      >
        <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center gap-8">
          <motion.img
            src={logo}
            alt="Logo"
            width={96}
            height={96}
            className="max-w-full h-auto"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
          />

          <motion.nav
            className="flex flex-wrap justify-center gap-10 sm:gap-12 text-gray-700 font-semibold text-lg max-sm:flex-col max-sm:items-center"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {[
              { label: "Startseite", href: "#home" },
              { label: "Über uns", href: "#about" },
              { label: "Dienstleistungen", href: "#services" },
              { label: "Kontakt", href: "#contact" }
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="hover:text-yellow-500 transition-colors"
                variants={fadeUp}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.nav>

          <hr className="w-full border-gray-300" />
        </div>

        <motion.div
          className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12 mt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600 text-sm"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
          }}
        >
 
          <motion.div className="flex flex-wrap gap-6 text-gray-500" variants={fadeUp}>
            <a
              href="https://www.instagram.com/transportloadgo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-yellow-500 transition-colors"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61579339652532"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-yellow-500 transition-colors"
            >
              <FaFacebook className="text-xl" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-yellow-500 transition-colors"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </motion.div>

          <Link to="/rulesA" className="text-yellow-500 hover:underline">
            Datenschutzerklärung
          </Link>

          <Link to="/rulesB" className="text-yellow-500 hover:underline">
            AGB
          </Link>

          <Link to="/rulesC" className="text-yellow-500 hover:underline">
            Impressum
          </Link>

          <motion.span variants={fadeUp}>
            (+49) 176 22789921
          </motion.span>

          <motion.span variants={fadeUp}>
            St.-Veit-Straße 56a München 81673
          </motion.span>
        
          <motion.div className="text-center md:text-right" variants={fadeUp}>
            &copy; {new Date().getFullYear()} Load & Go. Alle Rechte vorbehalten.
          </motion.div>
        </motion.div>
      </footer>
    </div>
  );
};

export default Footer;
