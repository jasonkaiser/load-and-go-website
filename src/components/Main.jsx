import { MdLocalShipping } from "react-icons/md"
import WavyRoad from "./ui/WavyRoad";
import { TextReveal } from "./ui/text-reveal";
import { motion } from 'framer-motion';

const Main = () => {


    return (

        <section id='home' className="flex items-center justify-center h-screen flex-col"> 
                        
                        <WavyRoad/>
                        <div>                    
                            <TextReveal
                                className="text-8xl font-bold sequelFont max-md:text-5xl"
                                delay={0.05}
                                duration={0.6}
                                from="bottom"
                                split="letter"
                            >
                            Moving isn’t just
                            </TextReveal>

                            <TextReveal
                                className="text-8xl font-bold text-primary sequelFont-Bold max-md:text-6xl"
                                delay={0.05}
                                duration={0.6}
                                from="bottom"
                                split="letter"
                            >
                            transport
                            </TextReveal>
                        </div>

                    <motion.div 
                        initial={{x: "100%", opacity: 0}}   
                        animate={{x: 0, opacity: 1}}
                        transition={{ type: "spring", stiffness: 70, duration: 1}} 
                        className="sequelFont ml-65 mt-9 border-2 border-black border-dashed pb-1 rounded-4xl px-5 max-md:ml-0 z-10">
                        
                        <h2 className="text-5xl font-semibold py-3 max-md:text-3xl">it’s a new
                        <span className="font-bold text-primary sequelFont-Bold"> beginning
                        </span></h2>
                    </motion.div>

                    <motion.a 
                            href='#services'
                            whileHover={{scale : 1.05 }}
                            whileTap={{scale : 0.7}}
                            className="w-60 h-15 relative !text-white text-2xl !bg-black !rounded-4xl p-3 px-8 mt-40 flex items-center justify-center gap-4 overflow-hidden group z-10 !outline-none">
                        <MdLocalShipping
                            className="w-10 h-10 text-primary transition-all duration-500 ease-in-out absolute left-5 top-1/2 -translate-y-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2"/>
                            <span className="transition-opacity duration-500 ease-in-out group-hover:opacity-0 ml-8">
                            Start Now
                        </span>
                    </motion.a>

        </section>



    )



}

export default Main;