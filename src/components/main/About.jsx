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
            
            <h1 className="mb-4">
                ── ÜBER UNS ──
            </h1>

            <h1 className=" helveticaBold text-6xl text-black border-2 border-dashed border-amber-300 p-3 px-10 rounded-4xl max-md:text-3xl mb-35">
                Wer sind wir?
            </h1>
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
                            <h1 className='sequelFont-Bold text-4xl text-black'>Load & Go Transport</h1>
                            
                            <div className='flex gap-2 mt-2'>

                                  <p className='text-gray-200 text-xs sequelFont-Bold flex gap-3 bg-black px-4 py-2 rounded-xl items-center border border-gray-200'>
                                  <MdLocationOn className="text-primary text-xl"/>
                                  München   -    Deutschland
                                  </p>
                            </div>
                        </div>
                    </div>
                    <p className="helveticaRegular text-left text-[17px] max-md:text-center text-gray-600">
                        Bei <strong className='text-black'>Load Go Transport</strong> glauben wir, dass Umziehen mehr ist als nur Logistik – es ist Leben in Bewegung. 
                        Jeder Karton enthält mehr als nur Gegenstände; 
                        er bewahrt Erinnerungen, Meilensteine und Neuanfänge. Als stolzes Familienunternehmen mit Sitz in München 
                        verleihen wir jedem Umzug eine persönliche Note, egal wie groß oder klein, nah oder fern. 
                        Im Laufe der Jahre haben wir mehr als <strong className='text-black'>300 Kunden</strong> 
                        in ganz Deutschland und Europa dabei unterstützt, reibungslos in ihre neuen Wohnungen, Büros und Lebensabschnitte zu starten.
                        Ob ein kurzfristiger Umzug, ein Fernumzug oder eine einfache Möbel­lieferung – 
                        wir behandeln jede Fahrt mit derselben Sorgfalt und Hingabe, wie wir es für unsere eigene Familie tun würden.
                    </p>            
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
                            <h1 className='text-primary helveticaBold text-7xl max-md:mt-10 '>
                                300+ 
                            <p className='text-black text-2xl'>
                                Zufriedene Kunden
                        </p></h1>
                    </motion.div>

                    <Clients className="z-1"/>
                    <img className="z-10 mt-10" src={packageImage} width={300} height={300}></img>
                </div>
            </div>
            
                <h1 className=" helveticaBold text-6xl text-black border-2 border-dashed border-amber-300 p-3 px-10 rounded-4xl max-md:text-3xl mb-35 mt-50 max-md:mt-20">
                    Was uns besonders macht!
                </h1>
                <div className="pointer-events-none absolute left-0 top-380 max-md:hidden h-screen w-[800px] z-[1] opacity-70 !bg-[radial-gradient(circle_at_left_center,_#fff700_0%,_#ffd700_0%,_rgba(255,255,255,0)_45%)]"/>

        </section>

    )
}

export default About;
