import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [openItem, setOpenItem] = useState(null);
  const heights = useRef({}); // Cache heights for better performance

  function useCachedHeight(open, id, ref) {
    const [height, setHeight] = useState(0);

    useEffect(() => {
      if (open && ref.current) {
        if (!heights.current[id]) {
          const measuredHeight = ref.current.scrollHeight;
          heights.current[id] = measuredHeight;
          setHeight(measuredHeight);
        } else {
          setHeight(heights.current[id]);
        }
      } else {
        setHeight(0);
      }
    }, [open, id, ref]);

    return height;
  }

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const IconComponent = item.icon;
        const isOpen = openItem === item.id;

        const contentRef = useRef(null);
        const height = useCachedHeight(isOpen, item.id, contentRef);

        return (
          <div
            key={item.id}
            className="!overflow-hidden !bg-black !rounded-2xl transition-all mb-3"
          >
            <button
              onClick={() => setOpenItem(isOpen ? null : item.id)}
              className={`w-full text-left h-35 max-md:h-20 !bg-black !text-primary !rounded-t-4xl !rounded-b-4xl
                ${isOpen ? "!rounded-b-none" : ""}
                px-5 py-4 transition-all text-[40px] max-md:text-[30px] font-semibold flex items-center justify-between !outline-none
                [&_.plus-icon-wrapper_svg>path:last-child]:origin-center
                [&_.plus-icon-wrapper_svg>path:last-child]:transition-all
                [&_.plus-icon-wrapper_svg>path:last-child]:duration-200
                ${isOpen ? "[&_.plus-icon-wrapper_svg]:rotate-180 [&_.plus-icon-wrapper_svg>path:last-child]:rotate-90 [&_.plus-icon-wrapper_svg>path:last-child]:opacity-0" : ""}
              `}
              aria-expanded={isOpen}
            >
              <span className="px-3 flex items-center gap-14 max-md:gap-3">
                <div
                  className={`bg-white/5 border border-primary/30 p-2 rounded-xl flex transition-opacity duration-300 ${
                    isOpen ? "!opacity-100" : "!opacity-40"
                  }`}
                >
                  <IconComponent
                    style={{ fontSize: 44 }}
                    className="max-md:!text-[20px]"
                  />
                </div>
                <span className="!text-primary">{item.title}</span>
              </span>
              <div className="plus-icon-wrapper bg-primary/20 rounded-full p-3 max-md:p-1">
                <PlusIcon
                  size={20}
                  className="pointer-events-none opacity-60 transition-transform duration-200 max-md:size-5"
                  aria-hidden="true"
                />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: height, opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { type: "spring", stiffness: 250, damping: 30 },
                    opacity: { duration: 0.15 },
                  }}
                  style={{ overflow: "hidden" }}
                  aria-hidden={!isOpen}
                >
                  <div
                    ref={contentRef}
                    className="px-5 pb-7 pt-0 text-md text-gray-400 !text-[16px] !text-center !bg-black !rounded-b-4xl !rounded-t-none transition-all"
                  >
                    <hr className="mb-6 border-[0.3] border-gray-400" />
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
