import React, { useState } from "react";
import { Link } from "react-router-dom";
import Projects from "./Projects";
import { AnimatePresence, motion } from "framer-motion";
import Products from "./Products";
import Blog from "./Blog";
import ContactUs from "./ContactUs";

const flyoutVariants = {
  hidden: {
    opacity: 0,
    y: 15,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function FlyoutLink({ children, flyoutContent, link }) {
  const [open, setOpen] = useState(false);

  const showFlyout = open && flyoutContent;

  const renderFlyoutContent = () => {
    switch (flyoutContent) {
      case "projects":
        return <Projects />;
      case "products":
        return <Products />;
      case "blog":
        return <Blog />;
      case "contact-us":
        return <ContactUs />;
      default:
        return <div>Default Content</div>;
    }
  };

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="group h-fit w-full"
    >
      <Link to={link} className="relative">
        {children}

        <span
          style={{
            transform: open ? "scaleX(1)" : "scaleX(0)",
          }}
          className="roundedtrue absolute -bottom-2 -left-2 -right-2 h-1 origin-left bg-slate-200 transition-transform duration-300 ease-out"
        ></span>
      </Link>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            variants={flyoutVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            style={{ x: "-48%" }}
            className="absolute left-1/2 top-14"
          >
            <div className="absolute -top-4 left-0 right-0 h-12 w-full bg-transparent" />
            {/* <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-slate-600" /> */}
            {showFlyout && renderFlyoutContent()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
