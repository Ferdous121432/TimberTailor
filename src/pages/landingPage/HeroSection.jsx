import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Loader from "./Loader";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef(null); // reference to the next video element

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setIsLoading(false);
    }
  }, [loadedVideos]);

  // on click of the mini video at hover center , the next video is played
  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === totalVideos ? 1 : prevIndex + 1,
    );
  };

  // This function returns the video source based on the currentIndex
  const getVideoSrc = (index) => {
    return `/videos/hero-${index}.mp4`;
  };

  // This function is called when the video is loaded and ready to play
  const handleVideoLoad = () => {
    setLoadedVideos((prevLoaded) => prevLoaded + 1);
    if (loadedVideos === totalVideos) {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === totalVideos ? 1 : prevIndex + 1,
      );
      setIsLoading(false);
    }
  };

  //GSAP Animation for the video frame

  // This hook is used to animate the video frame when the user clicks on the mini video
  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center ",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current.play(),
        });

        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    },
  );

  useGSAP(() => {
    gsap.set("#hero-frame", {
      clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100% ) ",
      borderRadius: "0 0 40% 10%",
    });

    gsap.from("#hero-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100% ) ",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#hero-frame",
        start: "center center ",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {/* {isLoading && <Loader />} */}
      <div
        id="hero-frame"
        className="bg-blue-75 relative z-10 h-dvh w-screen overflow-hidden rounded-lg"
      >
        <div className="absolute inset-0">
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVdClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              {/* <img src="/img/timber-3.jpg" /> */}
            </div>
          </div>
          <img
            src="/img/timber-11.jpg"
            className="h-full w-full object-cover"
          />
        </div>
        <h1 className="special-font hero-heading text-blue-75 absolute bottom-5 right-5 z-40">
          Cr<b>a</b>ftw<b>oo</b>d
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              Ti<b>m</b>ber Tail<b>o</b>r
            </h1>
            <p className="font-robert-regular mb-5 max-w-64 text-blue-100">
              Step Into The Craftverse <br />
              Embrace The Elegance of Grain
            </p>
            <Button
              id="watch-trailer"
              title="Explore Our Craftsmanship"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1 "
            />
          </div>
        </div>
      </div>
      <h1 className="special-font hero-heading text-image-cover absolute bottom-5 right-5">
        Cr<b>a</b>ftw<b>oo</b>d
      </h1>
    </div>
  );
}
