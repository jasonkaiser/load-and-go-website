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
    title: "Speed",
    content:
      "We offer reliable, lightning-fast delivery services that our clients can count on. Same-day delivery is available for urgent needs, and we pride ourselves on punctuality. Our streamlined logistics ensure minimal delays and real-time coordination. Whether it's a single package or a full load, we move quickly and efficiently to meet your schedule. Speed isn't just a promise — it's part of how we operate every day.",
  },
  {
    id: "2",
    icon: EuroIcon,
    title: "Price",
    content:
      "Our pricing is honest, transparent, and competitive within the industry. There are no hidden fees or confusing terms — what you see is what you pay. We believe in offering value without compromising on service quality. Whether you're a small business or a growing enterprise, our flexible rates are designed to scale with you. You can expect professional service without the premium markup.",
  },
  {
    id: "3",
    icon: GroupIcon,
    title: "Team",
    content:
      "Our team combines strength, experience, and thoughtful execution. Every member is dedicated to going beyond simple delivery — we look ahead, solve problems, and keep communication clear. We believe in being hands-on and treating every shipment like it's our own. Working with us feels more like a partnership than a transaction. You'll always have a team that's committed, approachable, and dependable.",
  },
  {
    id: "4",
    icon: LocalShippingIcon,
    title: "Delivery",
    content:
      "From our headquarters in Munich, we deliver throughout the entire European Union. No matter the distance, your shipment is in capable hands from start to finish. We offer tailored solutions for both short-haul and long-distance deliveries. With tracking, careful handling, and flexible routing, your cargo arrives securely and on time. Wherever your route leads, we'll be right there with you.",
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