'use client';

import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import { useState } from "react";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export const TabsComponent = ({
  tabs: propTabs,
  selectedIdx,
  containerClassName,
  activeTabClassName,
  tabClassName,
}: {
  tabs: Tab[];
  selectedIdx: number;
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
}) => {
  const [active, setActive] = useState<number>(selectedIdx);

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-center [perspective:1000px] relative flex-wrap no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              setActive(idx);
            }}
            className={cn("relative w-32 h-24 px-4 py-2", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active === idx && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-zinc-800",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative block text-white hover:text-teal-400">
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      {propTabs[active].content}
    </>
  );
};
