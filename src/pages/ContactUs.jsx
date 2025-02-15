/* eslint-disable */
import React from "react";

import Layout from "../components/Layout";
import HeroImage from "../components/ContactUs/HeroImage";
import ContactSection from "../components/ContactUs/ContactSection";
import FeatureSection from "../components/FeatureSection/FeatureSection";
import { motion } from "framer-motion";

function ContactUs() {
  return (
    <motion.div>
      <Layout>
        <div className="flex flex-col overflow-hidden bg-white">
          <HeroImage />
          <ContactSection />
          <FeatureSection />
        </div>
      </Layout>
    </motion.div>
  );
}

export default ContactUs;
