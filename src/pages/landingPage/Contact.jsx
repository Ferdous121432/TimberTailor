import React from "react";
import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

export default function Contact() {
  return (
    <section id="contact" className="my-20 min-h-96 w-screen px-10">
      <div
        className="relative rounded-lg bg-black py-24 text-slate-50 sm:overflow-hidden"
        style={{
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Background image with opacity */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/img/bg-1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
            pointerEvents: "none",
          }}
        />
        <div className="absolute -left-20 top-0 z-10 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox src="/img/f-1.webp" clipClass="contact-clip-path-1" />
          <ImageClipBox
            src="/img/timber-2.jpg"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>
        <div className="absolute -top-40 left-20 z-10 h-full w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          {/* <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          /> */}
          <ImageClipBox
            src="/img/timber-1.jpg"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[12px] uppercase">
            Join timbertailor
          </p>
          <AnimatedTitle
            title={
              "let&#39;s cr<b>a</b>ft the new era of el<b>e</b>gance t<b>o</b>gether "
            }
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />
          <Button
            title="contact us"
            containerClass="mt-10 bg-blue-50 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}
