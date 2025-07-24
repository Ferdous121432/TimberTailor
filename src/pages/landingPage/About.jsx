import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

export default function About() {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center ",
        end: "+=800px center ",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          Welcome to TimberTailor
        </h2>
        <AnimatedTitle
          title="Disc<b>o</b>ver the Art of
Timel<b>e</b>ss <br/> Wooden Creations"
          containerClass="mt-5 !text-stone-700 text-center  "
        />

        <div className="about-subtext font-bold text-slate-900">
          <p>
            The Art of Craftsmanship Begins—Your Home, Now a Masterpiece of
            Wooden Elegance
          </p>
          <p>
            Timber Tailor is a shared journey of design, where the real world
            meets timeless wooden artistry.
          </p>
        </div>
      </div>
      <div id="clip" className="h-dvh w-screen">
        <div className="mask-clip-path about-image">
          <img
            src="/img/timber-6.jpg"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
