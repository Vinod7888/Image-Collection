import React from "react";
import image from "../assets/Hero_img.jpg";
import image2 from "../assets/Spidy.jpg";
import Gallery from "./Gallery";

const Hero = () => {
  return (
    <>
    <section className="relative w-full h-[100svh] min-h-[480px] overflow-hidden bg-black">
      {/* Background Image - Desktop */}
      <img
        src={image}
        alt="Hero visual"
        className="absolute inset-0 w-full h-full object-cover
                   object-[60%_center]
                   sm:object-[65%_center]
                   md:object-[70%_center]
                   lg:object-center hidden md:block"
      />

      {/* Background Image - Mobile/Tablet */}
      <img
        src={image2}
        alt="Hero visual"
        className="absolute inset-0 w-full h-full object-cover
                   object-[60%_center]
                   sm:object-[65%_center]
                   md:object-[70%_center]
                   lg:object-center md:hidden"
      />

      {/* Overlay - Different gradients for mobile vs desktop */}
      <div
        className="absolute inset-0
                   md:bg-gradient-to-l md:from-black/10 md:via-transparent md:to-black/55
                   bg-gradient-to-b from-black/50 via-black/20 to-black/60"
      />

      {/* Text content - top on mobile, bottom-right on desktop */}
      <div
        className="relative z-10 h-full w-full flex items-center justify-center
             text-center
             px-5 sm:px-8 pt-8 sm:pt-12
             md:items-end md:justify-end md:text-right
             md:px-12 lg:px-16 xl:px-20 2xl:px-24
             md:pt-0 md:pb-0"
      >
        <h1
          className="glitch-text font-black uppercase text-white leading-[1] tracking-tight
               text-3xl
               sm:text-4xl
               md:text-5xl
               lg:text-6xl
               xl:text-7xl
               2xl:text-8xl
               max-w-[280px] sm:max-w-[360px] md:max-w-none"
        >
          {/* Mobile/Tablet layout */}
          <span className="block md:hidden">EVERY IMAGE TELLS</span>
          <span className="block md:hidden">A THREAD.</span>

          {/* Desktop layout */}
          <span className="hidden md:block">EVERY</span>
          <span className="hidden md:block">IMAGE</span>
          <span className="hidden md:block">TELLS A</span>
          <span className="hidden md:block">THREAD.</span>
        </h1>
      </div>

    </section>

    

    </>
  );
};

export default Hero;