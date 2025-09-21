import InputForm from '@/components/ui/inputform.js';
import MultiStepForm from '../components/forms/MultiStepForm.jsx';

const ServiceB = () => {
  return (
    <section
      id="serviceB"
      className="flex items-center justify-center flex-col mt-20 max-md:mt-0 scroll-mt-25 gap-4"
    >
      <h1 className="text-3xl font-bold mb-2 sequelFont-Bold mt-30">
        Verpackungsservice
      </h1>
      
      <p className="text-gray-400 text-center max-w-xl mb-6">
        Unser Verpackungsservice sorgt dafür, dass Ihre Gegenstände sicher und professionell für den Transport vorbereitet werden. Egal ob zerbrechliche Möbel, empfindliche Elektronik oder alltägliche Haushaltsgegenstände – wir stellen sicher, dass alles optimal geschützt ist. Mit hochwertigen Verpackungsmaterialien und erfahrenem Personal garantieren wir eine stressfreie und zuverlässige Vorbereitung Ihres Umzugs oder Versands.
      </p>
      
      <MultiStepForm service="Packing service" />
    </section>
  );
};

export default ServiceB;
