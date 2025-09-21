import InputForm from '@/components/ui/inputform.js';
import MultiStepForm from '../components/forms/MultiStepForm.jsx';

const ServiceC = () => {
  return (
    <section
      id="serviceC"
      className="flex items-center justify-center flex-col mt-20 max-md:mt-0 scroll-mt-25 gap-4"
    >
      <h1 className="text-3xl font-bold mb-2 sequelFont-Bold mt-30">
        Möbelmontage & -demontage
      </h1>

      <p className="text-gray-400 text-center max-w-xl mb-6">
        Unser Möbelmontage- und -demontageservice erleichtert Ihren Umzug oder
        Ihre Renovierung erheblich. Egal ob sperrige Schränke, Betten oder
        maßgefertigte Möbel – unser erfahrenes Team baut Ihre Möbel sicher ab
        und wieder auf. So sparen Sie Zeit und vermeiden Schäden, während Ihre
        Möbel professionell und effizient behandelt werden.
      </p>

      <MultiStepForm service="Furniture assembly & disassembly" />
    </section>
  );
};

export default ServiceC;
