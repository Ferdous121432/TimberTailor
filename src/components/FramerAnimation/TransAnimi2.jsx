import { Height, Scale } from "@mui/icons-material";
import { delay, easeInOut, motion } from "framer-motion";
import React from "react";

export default function TransAnimi1({ children }) {
  const animation = (variants, custom) => {
    return {
      initial: "hidden",
      animate: "visible",
      exit: "exit",
      variants: variants,
      custom,
    };
  };

  const nbOfColumns = 5;
  const expand = {
    hidden: { top: 0 },
    visible: (i) => ({
      top: "100%",
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: [0.76, 0, 0.24, 1],
      },
      transitionEnd: {
        top: 0,
        height: 0,
      },
    }),
    exit: (i) => ({
      height: "100vh",

      transition: {
        duration: 0.4,

        delay: 0.05 * i,

        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  const opacity = {
    initial: {
      opacity: 0.5,
    },

    enter: {
      opacity: 0,
    },

    exit: {
      opacity: 0.5,
    },
  };
  return (
    <div className="page stairs">
      <motion.div
        {...animation(opacity)}
        className="transition-background pointer-events-none fixed left-0 top-0 h-screen w-screen bg-slate-900"
      />

      <motion.div className="transition-container pointer-events-none fixed left-0 top-0 z-50 flex h-screen w-screen">
        {[...Array(nbOfColumns)].map((_, i) => {
          return (
            <motion.div
              className="relative h-full w-full bg-slate-900"
              key={i}
              {...animation(expand, nbOfColumns - i)}
            />
          );
        })}
      </motion.div>

      {children}
    </div>
  );
}
