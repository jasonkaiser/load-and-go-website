import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { PlusIcon } from "lucide-react";
import SpeedIcon from "@mui/icons-material/Speed";
import EuroIcon from "@mui/icons-material/Euro";
import GroupIcon from "@mui/icons-material/Group";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const items = [
  {
    id: "1",
    icon: SpeedIcon,
    title: "Geschwindigkeit",
    content:
      "Wir bieten zuverlässige, blitzschnelle Lieferdienste, auf die sich unsere Kunden verlassen können. Für dringende Fälle ist eine Lieferung am selben Tag möglich, und wir legen großen Wert auf Pünktlichkeit. Unsere optimierten Logistikprozesse sorgen für minimale Verzögerungen und eine Echtzeit-Koordination. Ob ein einzelnes Paket oder eine vollständige Ladung – wir arbeiten schnell und effizient, um Ihren Zeitplan einzuhalten. Geschwindigkeit ist nicht nur ein Versprechen, sondern Teil unserer täglichen Arbeitsweise.",
  },
  {
    id: "2",
    icon: EuroIcon,
    title: "Preis",
    content:
      "Unsere Preise sind fair, transparent und wettbewerbsfähig innerhalb der Branche. Es gibt keine versteckten Gebühren oder komplizierten Bedingungen – was Sie sehen, zahlen Sie. Wir glauben daran, Wert zu bieten, ohne die Servicequalität zu beeinträchtigen. Egal, ob Sie ein kleines Unternehmen oder ein wachsendes Unternehmen sind, unsere flexiblen Tarife sind darauf ausgelegt, mit Ihnen zu wachsen. Sie können professionellen Service ohne Aufpreis erwarten.",
  },
  {
    id: "3",
    icon: GroupIcon,
    title: "Team",
    content:
      "Unser Team vereint Stärke, Erfahrung und durchdachte Ausführung. Jedes Mitglied ist engagiert, über die reine Lieferung hinauszugehen – wir denken voraus, lösen Probleme und sorgen für klare Kommunikation. Wir glauben daran, praktisch zu arbeiten und jede Sendung so zu behandeln, als wäre sie unsere eigene. Die Zusammenarbeit mit uns fühlt sich eher wie eine Partnerschaft als wie eine Transaktion an. Sie haben immer ein Team, das engagiert, zugänglich und zuverlässig ist.",
  },
  {
    id: "4",
    icon: LocalShippingIcon,
    title: "Lieferung",
    content:
      "Von unserem Hauptsitz in München aus liefern wir in die gesamte Europäische Union. Egal wie weit, Ihre Sendung ist vom Anfang bis zum Ende in sicheren Händen. Wir bieten maßgeschneiderte Lösungen für Kurzstrecken- und Langstreckenlieferungen. Mit Sendungsverfolgung, sorgfältiger Handhabung und flexibler Routenplanung kommt Ihre Fracht sicher und pünktlich an. Wohin auch immer Ihre Route führt – wir sind an Ihrer Seite.",
  },
];


const AccordionItem = ({ item, isOpen, onClick }) => {
  const IconComponent = item.icon;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 20
      }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.5,
        delay: item.id * 0.1
      }}
      className="!overflow-hidden !bg-black !rounded-2xl !transition-all !mb-3 will-change-transform"
    >
      <button
        onClick={onClick}
        className={`!w-full !text-left !h-20 md:!h-[140px] !bg-black !text-primary !rounded-2xl
          ${isOpen ? "!rounded-b-none" : ""}
          !px-5 !py-4 !text-3xl md:!text-[40px] !font-semibold !flex !items-center !justify-between !outline-none
          focus:!outline-none focus:!ring-2 focus:!ring-primary/50
          [&_.plus-icon-wrapper_svg>path:last-child]:!origin-center
          [&_.plus-icon-wrapper_svg>path:last-child]:!transition-all
          [&_.plus-icon-wrapper_svg>path:last-child]:!duration-200
          ${isOpen ? "[&_.plus-icon-wrapper_svg]:!rotate-180 [&_.plus-icon-wrapper_svg>path:last-child]:!rotate-90 [&_.plus-icon-wrapper_svg>path:last-child]:!opacity-0" : ""}
        `}
        aria-expanded={isOpen}
      >
        <span className="!px-3 !flex !items-center !gap-3 md:!gap-14">
          <div
            className={`!bg-white/5 !border !border-primary/30 !p-2 !rounded-xl !flex !transition-opacity !duration-200 ${
              isOpen ? "!opacity-100" : "!opacity-40"
            }`}
          >
            <IconComponent
              className="!text-2xl md:!text-[44px]"
            />
          </div>
          <span className="!text-primary">{item.title}</span>
        </span>
        <div className="plus-icon-wrapper !bg-primary/20 !rounded-full !p-1 md:!p-3">
          <PlusIcon
            size={20}
            className="!pointer-events-none !opacity-60 !transition-transform !duration-200"
            aria-hidden="true"
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key={`content-${item.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              mass: 0.5,
            }}
            className="!overflow-hidden"
            aria-hidden={!isOpen}
          >
            <div className="!px-5 !pb-7 !pt-0 !text-base !text-gray-400 !text-center !bg-black !rounded-b-2xl">
              <hr className="!mb-6 !border-t !border-gray-400/30" />
              {item.content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Component() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="!space-y-4">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openItem === item.id}
          onClick={() => handleItemClick(item.id)}
        />
      ))}
    </div>
  );
}