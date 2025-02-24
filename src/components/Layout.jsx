/* eslint-disable */
import React from "react";

import TransAnimi1 from "./FramerAnimation/TransAnimi1";
import TransAnimi2 from "./FramerAnimation/TransAnimi2";
import Navigation from "../pages/landingPage/Navigation";
import Footer from "../pages/landingPage/Footer";

const Layout = ({ children }) => {
  const [headerHeight, setHeaderHeight] = React.useState(0);
  return (
    <TransAnimi2>
      <div className="relative flex flex-col overflow-hidden bg-white">
        <Navigation />
        <main className="mb-20" style={{ marginTop: `${headerHeight}px` }}>
          {children}
        </main>
        <Footer />
      </div>
    </TransAnimi2>
  );
};

export default Layout;
