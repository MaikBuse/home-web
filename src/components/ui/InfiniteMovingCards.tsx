"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import Image, { StaticImageData } from "next/image"
import princeBadge from '@/images/badges/prince2.png';
import psm2 from '@/images/badges/psm2.png';
import pspo from '@/images/badges/pspo.png';

const certifications = [
  {
    image: princeBadge,
    name: "PRINCE2 Foundation",
    description: "PRINCE2, or PRojects In Controlled Environments, is a popular project management methodology used in over 150 countries. It's a process-based approach that focuses on organization and control throughout the entire project.",
  },
  {
    image: psm2,
    name: "Professional Scrum Master II",
    description: "Those who earn the globally recognized Professional Scrum Master II (PSM II) certification have demonstrated an advanced level of Scrum mastery and proven an understanding of the underlying principles of Scrum. This individual has also demonstrated the ability to effectively apply Scrum in complex, real-world situations."
  },
  {
    image: pspo,
    name: "Professional Scrum Product Owner",
    description: "Those who earn the globally recognized Professional Scrum Product Owner I (PSPO I) certification have demonstrated a fundamental level of Professional Scrum Product Ownership, proving an intermediate understanding of the Scrum framework and how to apply it to maximize the value delivered with a product. This individual has also demonstrated an understanding of how to maximize return on investment and optimize the total cost of ownership of a product."
  }
];

export const InfiniteMovingCards = ({ className }: { className: string }) => {
  return (
    <div className={cn(className, "rounded-md flex flex-col antialiased items-center justify-center relative")} >
      <InfiniteMoving
        items={certifications}
        direction="right"
        speed="normal"
      />
    </div >
  );
};

export const InfiniteMoving = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    image: StaticImageData;
    name: string;
    description: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <Image
                src={item.image}
                alt="Prince2 Badge"
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }}
              />,
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.description}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

