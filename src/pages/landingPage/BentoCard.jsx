import React from "react";

export default function BentoCard({ src, title, description, isComingSoon }) {
  return (
    <div>
      {/* <video
        className="absolute left-0 top-0 size-full object-cover object-center"
        src={src}
        muted
        loop
        autoPlay
      /> */}
      <img
        src={src}
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-slate-100">
        <div className="">
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
