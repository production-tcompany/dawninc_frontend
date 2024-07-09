import React from "react";
import desktopVideo from "../Assets/web_opt.mp4";
import mobileVideo from "../Assets/mob_opt.mp4";

export const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background video for larger screens */}
      <a href="/collections/allproducts" className="absolute w-full h-full">
        <video
          src={desktopVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover hidden md:block"
        >
          <source src={desktopVideo} type="video/mp4" />
        </video>
      </a>
      {/* Background video for mobile screens */}
      <a href="/collections/allproducts" className="absolute w-full h-full">
        <video
          src={mobileVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover block md:hidden"
        >
          <source src={mobileVideo} type="video/mp4" />
        </video>
      </a>
    </div>
  );
};
