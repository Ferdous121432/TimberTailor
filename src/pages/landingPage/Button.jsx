import React from "react";

export default function Button({ id, title, leftIcon, containerClass }) {
  return (
    <button
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon}
      <span className="incline-flex relative overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
    </button>
  );
}
