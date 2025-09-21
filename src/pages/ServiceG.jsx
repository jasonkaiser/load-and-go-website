import InputForm from '@/components/ui/inputform.js';
import MultiStepForm from '../components/forms/MultiStepForm.jsx';

const ServiceG = () => {
  return (
    <section
      id="serviceG"
      className="flex items-center justify-center flex-col mt-20 max-md:mt-0 scroll-mt-25 gap-4"
    >
      <h1 className="text-3xl font-bold mb-2 sequelFont-Bold mt-30">
        Reinigungsservice
      </h1>

      <p className="text-gray-400 text-center max-w-xl mb-6">
        Unser Reinigungsservice sorgt dafür, dass Ihr Zuhause oder Ihr Büro
        sauber, ordentlich und gepflegt bleibt. Egal ob vor, während oder nach
        einem Umzug – wir bieten professionelle Reinigung, damit Sie sich um
        nichts kümmern müssen.
      </p>

      <MultiStepForm service="Cleaning Service" />
    </section>
  );
};

export default ServiceG;
