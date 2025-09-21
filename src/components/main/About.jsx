import logo from '../../assets/logo-yellow.png';
import packageImage from '../../assets/package.webp';
import { MdLocationOn } from 'react-icons/md';
import Clients from '../ui/clients';
import AcordionData from './Special';
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const About = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.2, rootMargin: '0px 0px -100px 0px' });

    const ref2 = useRef(null);
    const isInView2 = useInView(ref2, { once: true, threshold: 0, rootMargin: '0px 0px 0px 0px' });

    return (

        <section id='about' className="flex items-center justify-center flex-col mt-20 max-md:mt-0 scroll-mt-25">
            
            <h3 className="mb-4">
                ── ÜBER UNS ──
            </h3>

            <h2 className=" helveticaBold text-6xl text-black border-2 border-dashed border-amber-300 p-3 px-10 rounded-4xl max-md:text-3xl mb-35">
                Wer sind wir?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

                <motion.div 
                        ref={ref2}
                        initial={{x: "-35%", opacity: 0}}   
                        animate={isInView2 ? {x: 0, opacity: 1} : {}}
                        transition={{ type: "tween", ease: "easeOut", duration: 0.8 }}
                        className="flex flex-col gap-5 items-start max-md:items-center">    
                    <div className='flex items-center gap-6 max-md:flex-col'>
                        <div className='bg-black rounded-2xl p-3'>
                            <img src={logo} width={65} height={65}></img>   
                        </div>
                        <div className='flex flex-col items-start max-md:items-center'>                        
                            <h4 className='sequelFont-Bold text-4xl text-black'>Load & Go Transport</h4>
                            
                            <div className='flex gap-2 mt-2'>

                                  <p className='text-gray-200 text-xs sequelFont-Bold flex gap-3 bg-black px-4 py-2 rounded-xl items-center border border-gray-200'>
                                  <MdLocationOn className="text-primary text-xl"/>
                                  München   -    Deutschland
                                  </p>
                            </div>
                        </div>
                    </div>
<ul className="helveticaRegular text-left text-[17px]  text-gray-800 list-disc pl-6 flex flex-col gap-4">
  <li>
    <strong>Schnell und zuverlässig </strong> – Bei uns müssen Sie nicht lange warten. Dank unserer Flexibilität und kurzfristigen Verfügbarkeit sind wir immer dann zur Stelle, wenn es eilig ist.

  </li>
  <li>
    <strong> Umzüge in und um München </strong> – Ob privater Umzug oder geschäftlicher Transport: Wir sind Ihr Ansprechpartner für schnelle und sichere Umzüge von oder nach München.

  </li>
  <li>
    <strong> Direkter Kontakt </strong> – Statt komplizierter Formulare erreichen Sie uns ganz einfach über WhatsApp oder per E-Mail. So können wir sofort auf Ihre Anfrage reagieren und Ihnen ein passendes Angebot machen.
  </li>

</ul>
           
                </motion.div>
                <div className="pointer-events-none absolute right-0 top-140 max-md:hidden h-screen w-[800px] z-[1] opacity-70 !bg-[radial-gradient(circle_at_right_center,_#fff700_0%,_#ffd700_0%,_rgba(255,255,255,0)_45%)]"/>
                <div className='flex justify-center flex-col items-center gap-3'>

                    <motion.div 
                        className='z-1'
                        ref={ref}
                        initial={{ scale: 0.3, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ type: "tween", ease: "easeOut", duration: 0.8 }}
                    >                    
                            <h3 className='text-primary helveticaBold text-7xl max-md:mt-10 '>
                                300+ 
                            <p className='text-black text-2xl'>
                                Zufriedene Kunden
                        </p></h3>
                    </motion.div>

                    <Clients className="z-1"/>
                    <img className="z-10 mt-10" src={packageImage} width={300} height={300}></img>
                </div>
            </div>
            
                <h2 className=" helveticaBold text-6xl text-black border-2 border-dashed border-amber-300 p-3 px-10 rounded-4xl max-md:text-3xl mb-35 mt-50 max-md:mt-20">
                    Was uns besonders macht!
                </h2>
                <div className="pointer-events-none absolute left-0 top-380 max-md:hidden h-screen w-[800px] z-[1] opacity-70 !bg-[radial-gradient(circle_at_left_center,_#fff700_0%,_#ffd700_0%,_rgba(255,255,255,0)_45%)]"/>

        </section>

    )
}

export default About;
