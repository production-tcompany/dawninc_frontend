import React from "react";
import desktopVideo from "../Assets/website.mov";
import mobileVideo from "../Assets/mobile.mov";

export const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background video for larger screens */}
      <video
        src={desktopVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover hidden md:block"
      />
      {/* Background video for mobile screens */}
      <video
        src={mobileVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover block md:hidden"
      />
    </div>
  );
};
