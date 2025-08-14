import InputForm from '@/components/ui/inputform.js'
import MultiStepForm from '../components/forms/MultiStepForm.jsx';



const ServiceG = () => {

    return (


        <section id='serviceG' className="flex items-center justify-center flex-col mt-20 max-md:mt-0 scroll-mt-25 gap-4">
                          
            <h1 className="text-3xl font-bold mb-4 sequelFont-Bold mt-30">Reinigungsservice</h1>
            <MultiStepForm service=""/>
 
        </section>


    )

}

export default ServiceG;