import InputForm from '@/components/ui/inputform.js'
import MultiStepForm from '../components/forms/MultiStepForm.jsx';



const ServiceA = () => {

    return (


        <section id='serviceA' className="flex items-center justify-center flex-col mt-20 max-md:mt-0 scroll-mt-25 gap-4">
                          
            <h1 className="text-3xl font-bold mb-4 sequelFont-Bold mt-30">Kleine und große Umzüge</h1>
            <MultiStepForm service="Small and Large Moves" />
 
        </section>


    )

}

export default ServiceA;