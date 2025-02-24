import React, { useRef, useState } from "react";

export default function BentoTilt({ children, className }) {
  const [transformStyle, setTransformStyle] = useState("");
  const bentoTiltRef = useRef(null);

  // onMouseMove event handler to calculate the x and y coordinates of the mouse pointer relative to the bentoTiltRef element
  // and set the transform style to rotate the element based on the x and y coordinates
  const handleMouseMove = (e) => {
    if (!bentoTiltRef.current) return;
    const { left, top, width, height } =
      bentoTiltRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = ` perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3D(0.95,0.95,0.95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={bentoTiltRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
}
