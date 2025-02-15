/* eslint-disable */
import React from "react";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import TransAnimi1 from "./FramerAnimation/TransAnimi1";
import TransAnimi2 from "./FramerAnimation/TransAnimi2";

const Layout = ({ children }) => {
  const [headerHeight, setHeaderHeight] = React.useState(0);
  return (
    <TransAnimi2>
      <div className="relative flex flex-col overflow-hidden bg-white">
        <Header setHeaderHeight={setHeaderHeight} />
        <main className="mb-20" style={{ marginTop: `${headerHeight}px` }}>
          {children}
        </main>
        <Footer />
      </div>
    </TransAnimi2>
  );
};

export default Layout;
