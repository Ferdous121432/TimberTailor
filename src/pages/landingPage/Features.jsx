import React from "react";
import BentoCard from "./BentoCard";
import { TiLocationArrow } from "react-icons/ti";
import BentoTilt from "./BentoTilt";

export default function Features() {
  return (
    <section
      className="bg-white pb-52"
      // style={{
      //   backgroundImage: "url('/img/bg-1.jpg')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   opacity: 0.7,
      // }}
    >
      <div className="container mx-auto px-3 md:px-5">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-slate-900">
            Into the Grainverse Layer
          </p>
          <p className="max-w-md font-circular-web text-lg text-slate-900 opacity-50">
            Immerse Yourself in a World of Timeless Craftsmanship, Where Every
            Door, Floor, and Interior Converges into an Interconnected Symphony
            of Wooden Elegance.
          </p>
        </div>
        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="/img/f-4.webp"
            title={
              <>
                Tail<b>o</b>rw<b>oo</b>d
              </>
            }
            description="A cross-craftsmanship experience, turning your vision for doors, floors, and Interior into a timeless adventure of elegance."
            isComingSoon={true}
          />
        </BentoTilt>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="/img/f-6.jpg"
              title={
                <>
                  c<b>u</b>sTom
                  <br /> d<b>E</b>sign
                </>
              }
              description="Masterpiece Design, Exclusively for You"
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="img/f-7.webp"
              title={
                <>
                  Sh<b>e</b>gun <br />W<b>oo</b>d
                </>
              }
              // description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="img/f-8.jpg"
              title={
                <>
                  fu<b>rn</b>it<b>u</b>re
                </>
              }
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <BentoCard
              src="img/f-9.jpg"
              title={
                <>
                  m<b>ea</b>tured
                  <br />w<b>oo</b>d
                </>
              }
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <BentoCard
              src="img/f-1.webp"
              title={
                <>
                  cnc
                  <br /> machining
                </>
              }
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
}
