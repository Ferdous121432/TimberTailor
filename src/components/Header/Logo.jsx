/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";

function Logo({ isScrolled }) {
  return (
    <Link
      to="/"
      className={`max-md:ml-0 max-md:w-full flex max-w-[21%] flex-col ${isScrolled ? "items-start justify-center" : "flex"}`}
    >
      <div className="flex flex-col items-center justify-center gap-1 whitespace-nowrap text-4xl font-bold text-slate-50 md:flex-row md:gap-3">
        <img
          loading="lazy"
          src={`${window.location.protocol}//${window.location.host}/timberTailorbd.svg`}
          alt=""
          className={`my-auto aspect-[1.56] ${isScrolled ? "w-[100px]" : "w-[150px]"} shrink-0 items-center self-stretch object-contain transition-transform duration-700`}
        />
        {isScrolled === false && (
          <div className="my-auto self-stretch text-sm md:text-2xl lg:text-2xl">
            TimberTailor
          </div>
        )}
      </div>
    </Link>
  );
}

export default Logo;
