import InputForm from '@/components/ui/inputform.js';
import MultiStepForm from '../components/forms/MultiStepForm.jsx';

const ServiceD = () => {
  return (
    <section
      id="serviceD"
      className="flex items-center justify-center flex-col mt-20 max-md:mt-0 scroll-mt-25 gap-4"
    >
      <h1 className="text-3xl font-bold mb-2 sequelFont-Bold mt-30">
        Express-Umzüge
      </h1>

      <p className="text-gray-400 text-center max-w-xl mb-6">
        Mit unserem Express-Umzugsservice garantieren wir schnelle und
        effiziente Umzüge, wenn es besonders eilig ist. Unser erfahrenes Team
        plant jeden Schritt sorgfältig, sorgt für eine zügige Durchführung und
        stellt sicher, dass Ihre Möbel und Gegenstände sicher und unversehrt am
        neuen Standort ankommen. Ideal für kurzfristige Termine oder dringende
        Umzüge.
      </p>

      <MultiStepForm service="Express moves" />
    </section>
  );
};

export default ServiceD;
