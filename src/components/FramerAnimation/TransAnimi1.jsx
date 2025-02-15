import { Scale } from "@mui/icons-material";
import { delay, easeInOut, motion } from "framer-motion";
import React from "react";

export default function TransAnimi1({ children }) {
  const animation = (variants) => {
    return {
      initial: "hidden",
      animate: "visible",
      exit: "exit",
      variants: variants,
    };
  };

  const opacity = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: { opacity: 1 },
  };

  const slide = {
    hidden: { top: "0" },
    visible: {
      top: "100vh",
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: { top: "0", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } },
  };

  const perspective = {
    hidden: { y: 0, scale: 1 },
    visible: {
      y: 0,
      Scale: 1,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      y: -100,
      scale: 0.9,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <div className="inner bg-slate-900">
      <motion.div
        {...animation(slide)}
        className="slide fixed left-0 top-0 z-[1000] h-screen w-screen bg-slate-900"
      />
      <motion.div {...animation(perspective)} className="page">
        <motion.div {...animation(opacity)}>{children}</motion.div>
      </motion.div>
    </div>
  );
}
