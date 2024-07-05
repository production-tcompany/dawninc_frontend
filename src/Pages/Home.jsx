import React from "react";

export const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image for larger screens */}
      <img
        src="https://s3-alpha-sig.figma.com/img/9320/d997/48633679c7e3278385bc8651d22d40ed?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ovjrPOJjvexbsfioh~EffNbcD2hBOLIvajzWO5hGETzfEYHFeXWFBZ9x5PCcHSLEZ90mZJLSi0biCuD-iagKd8mcSm6nXFondd7~fGnYCQIaDn9KD2TnfASMrkNi~CR4Hk2bPrwKzrNglnxwf2QCY~sEYVsGEusQzzrbh5Cq6SIwOnJkG6pBR1Z9R2zhpd-HAjFijekeAUOXkc5fmKuAqusIQq8ImygRwrDdH58TU3ZoDDkgCHeboRnzJb49ZLCA8dOyVf~ljjNgKUPWutkvmlJViy05asYJdsT4YWvXPRka9QuFIU4z8UxFV6evy7-q0QZHLFkj0Mj5URRM8Q-tGQ__"
        alt="Background"
        className="absolute w-full h-full object-cover "
      />
      {/* Mobile View */}
      <div className="absolute inset-0 flex items-end justify-start p-8 py-44 md:hidden">
        <h1 className="text-4xl font-light text-white">Dawn Store</h1>
      </div>
      {/* Larger Screens View */}
      <div className="absolute inset-0 hidden md:flex items-center justify-start px-8 md:px-12">
        <h1 className="text-5xl font-light text-white">Dawn Store</h1>
      </div>
    </div>
  );
};
