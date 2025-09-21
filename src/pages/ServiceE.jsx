import InputForm from '@/components/ui/inputform.js';
import MultiStepForm from '../components/forms/MultiStepForm.jsx';

const ServiceE = () => {
  return (
    <section
      id="serviceE"
      className="flex items-center justify-center flex-col mt-20 max-md:mt-0 scroll-mt-25 gap-4"
    >
      <h1 className="text-3xl font-bold mb-2 sequelFont-Bold mt-30">
        Entsorgung alter Möbel
      </h1>

      <p className="text-gray-400 text-center max-w-xl mb-6">
        Unser Service zur Entsorgung alter Möbel hilft Ihnen, Platz zu schaffen
        und gleichzeitig umweltbewusst vorzugehen. Wir kümmern uns um die
        fachgerechte Abholung und Entsorgung von Möbeln und größeren Gegenständen,
        sodass Sie sich um nichts kümmern müssen. Schnell, zuverlässig und
        umweltfreundlich.
      </p>

      <MultiStepForm service="Disposal of old furniture" />
    </section>
  );
};

export default ServiceE;
