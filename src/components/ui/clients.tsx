import { motion, useInView } from "framer-motion"
import { useRef } from "react"




export default function Component() {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true }) 

  return (
    <motion.div 
        ref={ref}
        initial={{y: "230%", opacity: 0}}   
        animate={isInView ? {y: 0, opacity: 1} : {}}
        transition={{ type: "spring", stiffness: 80, duration: 1.5}} 
        className="flex -space-x-[1.2rem] bg-black py-2 px-3 rounded-full">
      <img
        className="rounded-full ring-1 ring-background shadow-xl shadow-primary"
        src="avatar-80-03.jpg"
        width={50}
        height={50}
        alt="Avatar 01"
      />
      <img
        className="ring-background rounded-full ring-1 shadow-xl shadow-primary"
        src="avatar-3.jpg"
        width={50}
        height={50}
        alt="Avatar 02"
      />
      <img
        className="ring-background rounded-full ring-1 shadow-xl shadow-primary"
        src="avatar-2.jpg"
        width={50}
        height={50}
        alt="Avatar 03"
      />
      <img
        className="ring-background rounded-full ring-1 shadow-xl shadow-primary"
        src="avatar-1.jpg"
        width={50}
        height={50}
        alt="Avatar 04"
      />
    </motion.div>
  )
}
