import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MdLocalShipping, MdPerson, MdEmail, MdMessage } from "react-icons/md";



const Contact = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (

        <section id='contact' className="flex items-center justify-center flex-col max-md:mt-0 scroll-mt-25">
            
            <h1 className="mb-4 mt-20">
                ── CONTACT ──
            </h1>

            <h1 className=" helveticaBold text-6xl text-black border-2 border-dashed border-amber-300 p-3 px-10 rounded-4xl max-md:text-3xl mb-15">
                Talk with us!
            </h1>
            
            <div className="pointer-events-none absolute left-0 top-880 max-md:hidden h-screen w-[800px] z-[1] opacity-70 !bg-[radial-gradient(circle_at_left_center,_#fff700_0%,_#ffd700_0%,_rgba(255,255,255,0)_45%)]"/>

 
                <motion.form 
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-6 bg-gray-100 border-2 border-primary border-dashed p-10 rounded-4xl">

            
                <div className="flex gap-5 text-gray-200 max-md:flex max-md:flex-col">
            
                    <div className="relative w-80">
                    <MdPerson className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary" />
                    <input
                        type="text"
                        placeholder="First Name"
                        className="w-full bg-black p-4 pl-10 rounded-2xl placeholder-gray-200/60 placeholder:text-[14px] text-gray-200 sequelFont !outline-none 
                        border-2 border-transparent focus:border-primary focus:ring-4 focus:ring-primary/40 transition duration-300"
                    />
                    </div>

            
                    <div className="relative w-80">
                    <MdPerson className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary" />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full bg-black p-4 pl-10 rounded-2xl placeholder-gray-200/60 placeholder:text-[14px] text-gray-200 sequelFont !outline-none 
                        border-2 border-transparent focus:border-primary focus:ring-4 focus:ring-primary/40 transition duration-300"
                    />
                    </div>
                </div>

                
                <div className="relative w-full max-w-[41rem]">
                    <MdEmail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary" />
                    <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-black p-4 pl-10 rounded-2xl placeholder-gray-200/60 placeholder:text-[14px] text-gray-200 sequelFont !outline-none 
                        border-2 border-transparent focus:border-primary focus:ring-4 focus:ring-primary/40 transition duration-300"
                    />
                </div>


                <div className="relative w-full max-w-[41rem]">
                    <MdMessage className="absolute left-4 top-6 text-primary" />
                    <textarea
                    rows="7"
                    placeholder="Write your message"
                    className="w-full bg-black p-4 pl-10 rounded-2xl placeholder-gray-200/60 placeholder:text-[15px] text-gray-200 sequelFont !outline-none 
                        border-2 border-transparent focus:border-primary focus:ring-4 focus:ring-primary/40 transition duration-300 resize-none"
                    ></textarea>
                </div>

                
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-44 h-12 relative !text-white text-2xl !bg-primary !rounded-2xl p-3  px-8 flex items-center justify-center gap-4 overflow-hidden group z-10 !outline-none place-self-end max-md:place-self-center transition-all">
                        <MdLocalShipping className="w-7 h-7 text-black transition-all duration-500 ease-in-out absolute left-4 top-1/2 -translate-y-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2" />
                        <span className="transition-opacity text-black sequelFont-Bold duration-500 ease-in-out group-hover:opacity-0 ml-10">
                        Send
                        </span>
                    </motion.a>
                </motion.form>  
           

        </section>



    )



}

export default Contact;