import React from "react";

export const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image for larger screens */}
      <img
        src="https://s3-alpha-sig.figma.com/img/9320/d997/48633679c7e3278385bc8651d22d40ed?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ovjrPOJjvexbsfioh~EffNbcD2hBOLIvajzWO5hGETzfEYHFeXWFBZ9x5PCcHSLEZ90mZJLSi0biCuD-iagKd8mcSm6nXFondd7~fGnYCQIaDn9KD2TnfASMrkNi~CR4Hk2bPrwKzrNglnxwf2QCY~sEYVsGEusQzzrbh5Cq6SIwOnJkG6pBR1Z9R2zhpd-HAjFijekeAUOXkc5fmKuAqusIQq8ImygRwrDdH58TU3ZoDDkgCHeboRnzJb49ZLCA8dOyVf~ljjNgKUPWutkvmlJViy05asYJdsT4YWvXPRka9QuFIU4z8UxFV6evy7-q0QZHLFkj0Mj5URRM8Q-tGQ__"
        alt="Background"
        className="absolute w-full h-full object-cover hidden md:block"
      />
      {/* Background image for mobile */}
      <img
        src="https://s3-alpha-sig.figma.com/img/b4f9/f387/5ed550598cd0e5593d84551974680442?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Asv7HWG40YLuXlVQPescRzugXyaAuOXAg2g8jSn1W4jVgtS8xTLAmhMxkpSePOVdHKjRZtSb43Y54K3wfgc1PSPTXsQ4EbuoREXstlw5rmtvsD5YgEXes~-2~mhNTbDbsI2Hp4G27jj2uvJmI8MlSgybTCV7w6yMhTbaLb3tVYMA5VzdSt0nyT5NfIyiUq61nXz75osDg8X5~~Ve2CMwYf52Fthe28g3WdrMdD-WNDazWCm-j5sJvx6vEapwT4DosMnp4aeQ22fpefd7W7EwnTuk6ROa35bqDlE5fczM7g4Vyvu8KcnCIYJ4NvqG8ILYWejzTiFQBXVJxEqMUzyygA__" // Replace with your mobile image URL
        alt="Background"
        className="absolute w-full h-full object-cover md:hidden"
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
