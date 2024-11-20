import React from "react";
import FlyoutLink from "./FlyoutLink";

export default function Navigation() {
  return (
    <div className="relative flex w-full items-center justify-between bg-slate-900 px-20 py-4 text-slate-100">
      <FlyoutLink flyoutContent="projects">Projects</FlyoutLink>
      <FlyoutLink flyoutContent="products">Products</FlyoutLink>
      <FlyoutLink flyoutContent="blog">Blog</FlyoutLink>
      <FlyoutLink flyoutContent="contact-us">Contact Us</FlyoutLink>
    </div>
  );
}
