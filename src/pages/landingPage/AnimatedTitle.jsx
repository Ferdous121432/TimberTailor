import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

//title prop: "The st<b>o</b>ry of a hidden realm "
//containerClass prop: "text-blue-50"

export default function AnimatedTitle({ title, containerClass }) {
  const containerRef = useRef(null);

  //The gsap.context method is used to scope GSAP animations to a specific context, such as a React component. This helps manage animations more effectively, especially when dealing with component lifecycles.

  useEffect(() => {
    const context = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: " center bottom",
          toggleActions: "play none none reverse",
        },
      });
      titleAnimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3D(0,0,0) rotateY(0deg) rotateX(0deg) ",
        ease: "power2.inOut",
        stagger: 0.1,
      });
    }, containerRef);

    return () => context.revert();
  }, []);

  return (
    <div ref={containerRef} className={`animated-title ${containerClass}`}>
      {title.split("<br/>").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, i) => (
            <span
              key={i}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
