import React from "react";
import { Items } from "../Components/Items";
import { useParams } from "react-router-dom";

export const Collections = () => {
  const { category } = useParams();

  return (
    <div className="collections max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">     
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        <Items category={category} />
      </div>
    
    </div>
  );
};
