import { motion, useInView } from "framer-motion"
import { useRef } from "react"




const Contact = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (

        <section id='contact' className="flex items-center justify-center flex-col max-md:mt-0 scroll-mt-25">
            
            <h1 className="mb-4 mt-20">
                ── CONTACT ──
            </h1>

            <h1 className=" helveticaBold text-6xl text-black border-2 border-dashed border-amber-300 p-3 px-10 rounded-4xl max-md:text-3xl mb-35">
                Talk with us!
            </h1>


        </section>



    )



}

export default Contact;