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
      <div className="relative z-10 flex size-full flex-col justify-between p-5">
        <div className="">
          <h1 className="bento-title special-font tracking-wide text-green-600">
            {title}
          </h1>
          {description && (
            <p className="md:text-base mt-3 max-w-64 text-xs font-semibold text-slate-100">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
