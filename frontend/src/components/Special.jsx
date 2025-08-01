import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PlusIcon } from "lucide-react";
import SpeedIcon from "@mui/icons-material/Speed";
import EuroIcon from "@mui/icons-material/Euro";
import GroupIcon from "@mui/icons-material/Group";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import { Accordion as AccordionPrimitive } from "radix-ui";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

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
      "Our team combines strength, experience, and thoughtful execution. Every member is dedicated to going beyond simple delivery — we look ahead, solve problems, and keep communication clear. We believe in being hands-on and treating every shipment like it’s our own. Working with us feels more like a partnership than a transaction. You’ll always have a team that’s committed, approachable, and dependable.",
  },
  {
    id: "4",
    icon: LocalShippingIcon,
    title: "Delivery",
    content:
      "From our headquarters in Munich, we deliver throughout the entire European Union. No matter the distance, your shipment is in capable hands from start to finish. We offer tailored solutions for both short-haul and long-distance deliveries. With tracking, careful handling, and flexible routing, your cargo arrives securely and on time. Wherever your route leads, we’ll be right there with you.",
  },
];

export default function Component() {
  const [openItem, setOpenItem] = useState("3");

  return (
    <div className="space-y-4">
      <Accordion
        type="single"
        collapsible
        className="w-full"
        value={openItem}
        onValueChange={(value) => setOpenItem(value)}
      >
        {items.map((item, index) => {
          const IconComponent = item.icon;
          const isOpen = openItem === item.id;

          const ref = useRef(null);
          const isInView = useInView(ref, { once: true });

          return (
            <motion.div
              ref={ref}
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              <AccordionItem
                value={item.id}
                className="!overflow-hidden !bg-black !rounded-2xl transition-all mb-3"
              >
                <AccordionPrimitive.Header>
                  <AccordionPrimitive.Trigger
                    className="w-full text-left h-35 max-md:h-20 !bg-black text-primary !rounded-t-4xl !rounded-b-4xl data-[state=open]:!rounded-b-none px-5 py-4 transition-all text-[40px] max-md:text-[30px] font-semibold flex items-center justify-between !outline-none
                    [&_.plus-icon-wrapper_svg>path:last-child]:origin-center
                    [&_.plus-icon-wrapper_svg>path:last-child]:transition-all
                    [&_.plus-icon-wrapper_svg>path:last-child]:duration-200
                    data-[state=open]:[&_.plus-icon-wrapper_svg]:rotate-180
                    data-[state=open]:[&_.plus-icon-wrapper_svg>path:last-child]:rotate-90
                    data-[state=open]:[&_.plus-icon-wrapper_svg>path:last-child]:opacity-0"
                  >
                    <span className="px-3 flex items-center gap-14 max-md:gap-3">
                      <div
                        className={`bg-white/5 border border-primary/30 p-2 rounded-xl flex transition-opacity duration-300 ${
                          isOpen ? "opacity-100" : "opacity-40"
                        }`}
                      >
                        <IconComponent
                          style={{ fontSize: 44 }}
                          className="max-md:!text-[20px]"
                        />
                      </div>
                      <span className="text-primary">{item.title}</span>
                    </span>
                    <div className="bg-primary/20 rounded-full p-3 max-md:p-1 plus-icon-wrapper">
                      <PlusIcon
                        size={20}
                        className="pointer-events-none opacity-60 transition-transform duration-200 max-md:size-5"
                        aria-hidden="true"
                      />
                    </div>
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>

                <AccordionContent className="px-5 pb-7 pt-0 text-md text-gray-400 !text-[16px] !text-center !bg-black data-[state=open]:!rounded-b-4xl !rounded-t-none transition-all">
                  <hr className="mb-6 border-[0.3] border-gray-400" />
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          );
        })}
      </Accordion>
    </div>
  );
}
