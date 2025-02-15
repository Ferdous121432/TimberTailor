import React from "react";
import FlyoutLink from "./FlyoutLink";

export default function Navigation() {
  return (
    <div className="relative hidden w-full items-center justify-between px-20 py-4 font-semibold text-slate-50 lg:flex">
      <FlyoutLink link="/projects" flyoutContent="projects">
        Projects
      </FlyoutLink>
      <FlyoutLink link="/products" flyoutContent="products">
        Products
      </FlyoutLink>
      <FlyoutLink link="/blog" flyoutContent="blog">
        Blog
      </FlyoutLink>
      <FlyoutLink link="/contact-us" flyoutContent="contact-us">
        Contact Us
      </FlyoutLink>
    </div>
  );
}
