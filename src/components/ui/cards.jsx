"use client";

import { motion } from "framer-motion";
import React, { useRef, useState, useEffect, forwardRef } from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconTruckLoading,
  IconRocket,
  IconBoxSeam,
  IconTool,
  IconTrashX,
  IconUser,
} from "@tabler/icons-react";

import { cn } from "@/lib/utils";

export const BlurImage = ({ height, width, src, className, alt, ...rest }) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <img
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      alt={alt || "Card image"}
      {...rest}
    />
  );
};

export const Card = ({ card }) => {
  const Icon = card.icon;

  return (
    <a
      href={card.href}
      className="group relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-4xl bg-gray-100 md:h-[40rem] md:w-96 dark:bg-neutral-900 no-underline"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent will-change-transform transform-gpu" />

      <div className="relative z-40 p-8">
        <div className="flex gap-4 items-center justify-center sequelFont-Bold mt-2 max-w-xs text-left font-sans text-[18px] font-semibold text-primary bg-black p-3 px-5 rounded-3xl !max-md:text-xs max-md:flex-col max-md:text-center transition-all duration-300 breathe-border">
          <div className="bg-white/5 border border-primary/30 p-2 rounded-xl">
            <Icon size={24} className="text-primary max-md:size-10" />
          </div>
          {card.title}
        </div>
      </div>

      <BlurImage
        src={card.src}
        alt={card.title}
        className="absolute inset-0 z-10 object-cover"
      />
    </a>
  );
};

export const Carousel = ({ items, initialScroll = 0 }) => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        <div className="absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l from-white" />
        <div className="flex flex-row justify-start gap-4 pl-4 w-max">
          {items.map((item, index) => (
            <div
              key={`card-${index}`}
              className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="mr-10 flex justify-end gap-2">
        <button
          className="relative z-40 flex h-10 w-15 items-center justify-center !rounded-full !bg-gray-200 disabled:opacity-50 !outline-none"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
        </button>
        <button
          className="relative z-40 flex h-10 w-15 items-center justify-center !rounded-full !bg-gray-200 disabled:opacity-50 !outline-none"
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
        </button>
      </div>
    </div>
  );
};

const Cards = forwardRef((props, ref) => {
  const cardData = [
    {
      title: "Small & Large Moves",
      category: "Transport",
      src: "https://load-and-go-website.vercel.app/image1.jpg",
      href: "/services/small-large-moves",
      content:
        "Efficient moving services for homes, offices, and everything in between.",
      icon: IconTruckLoading,
    },
    {
      title: "Express Moves",
      category: "Fast Delivery",
      src: "https://load-and-go-website.vercel.app/image2.jpg",
      href: "/services/express-moves",
      content: "Need to move in a hurry? Our express option is built for speed.",
      icon: IconRocket,
    },
    {
      title: "Packing Services",
      category: "Protection",
      src: "https://load-and-go-website.vercel.app/image3.jpg",
      href: "/services/packing-service",
      content: "Professional packing to ensure your items are safe and secure.",
      icon: IconBoxSeam,
    },
    {
      title: "Furniture Assembly & Disassembly",
      category: "Convenience",
      src: "https://load-and-go-website.vercel.app/image4.jpg",
      href: "/services/furniture-ad",
      content:
        "We take care of the heavy lifting — literally and structurally.",
      icon: IconTool,
    },
    {
      title: "Furniture Disposal",
      category: "Waste Removal",
      src: "https://load-and-go-website.vercel.app/image5.jpg",
      href: "/services/furniture-disposal",
      content: "Out with the old. We dispose of unwanted furniture responsibly.",
      icon: IconTrashX,
    },
    {
      title: "Personal Contact",
      category: "Support",
      src: "https://load-and-go-website.vercel.app/image6.jpg",
      href: "/services/personal-contact",
      content: "Talk to a real person, anytime you need assistance.",
      icon: IconUser,
    },
  ];

  return (
    <div ref={ref}>
      <Carousel
        items={cardData.map((card, index) => (
          <Card key={index} index={index} layout card={card} />
        ))}
      />
    </div>
  );
});

export default motion(Cards);
