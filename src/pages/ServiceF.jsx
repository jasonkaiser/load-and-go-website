import InputForm from '@/components/ui/inputform.js';
import MultiStepForm from '../components/forms/MultiStepForm.jsx';

const ServiceF = () => {
  return (
    <section
      id="serviceF"
      className="flex items-center justify-center flex-col mt-20 max-md:mt-0 scroll-mt-25 gap-4"
    >
      <h1 className="text-3xl font-bold mb-2 sequelFont-Bold mt-30">
        Persönlicher Kontakt
      </h1>

      <p className="text-gray-400 text-center max-w-xl mb-6">
        Unser persönlicher Kontakt-Service ermöglicht es Ihnen, direkt mit unserem
        Team in Verbindung zu treten. Egal ob Fragen, spezielle Wünsche oder
        individuelle Beratung – wir sind für Sie da, um sicherzustellen, dass
        Ihr Anliegen schnell und professionell bearbeitet wird.
      </p>

      <MultiStepForm service="Personal Contact" />
    </section>
  );
};

export default ServiceF;
