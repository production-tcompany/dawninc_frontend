import React from "react";

export const Fotter = () => {
  return (
    <footer className="bg-black text-white mt-[0.5px]">
      <div className="container mx-auto">
        <div className="flex flex-col text-xs items-center text-white w-full">
          <div className="w-full justify-center">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-8 p-6 pt-8">
              <a href="/" className="hover:underline">HELP</a>
              <a href="/" className="hover:underline">FAQS</a>
              <a href="/" className="hover:underline">ABOUT</a>
              <a href="/" className="hover:underline">CONTACT</a>
              <a href="/" className="hover:underline">TERMS & CONDITIONS</a>
              <a href="/" className="hover:underline">PRIVACY POLICY</a>
            </div>
          </div>
          <div className="w-full flex justify-center border-t-[0.5px] border-zinc-800 p-6">
            <div className="flex flex-wrap justify-center gap-x-8">
              <a href="/" className="hover:underline">INSTAGRAM</a>
              <a href="/" className="hover:underline">FACEBOOK</a>
              <a href="/" className="hover:underline">X</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
