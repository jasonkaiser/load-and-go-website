import InputForm from '@/components/ui/inputform.js';
import MultiStepForm from '../components/forms/MultiStepForm.jsx';

const ServiceA = () => {
  return (
    <section
      id="serviceA"
      className="flex items-center justify-center flex-col mt-20 max-md:mt-0 scroll-mt-25 gap-4"
    >
      <h1 className="text-3xl font-bold mb-2 sequelFont-Bold mt-30">
        Kleine und große Umzüge
      </h1>
      
      <p className="text-gray-400 text-center max-w-xl mb-6">
        Unser Umzugsservice bietet umfassende Unterstützung für alle Arten von Umzügen – von kleinen Haushalten bis hin zu großen Firmenumzügen. Wir kümmern uns um das sorgfältige Verpacken, den sicheren Transport und die termingerechte Lieferung Ihrer Möbel und Gegenstände. Mit unserem erfahrenen Team können Sie sich entspannt zurücklehnen, während wir den Umzug effizient und stressfrei erledigen.
      </p>
      
      <MultiStepForm service="Small and Large Moves" />
    </section>
  );
};

export default ServiceA;
