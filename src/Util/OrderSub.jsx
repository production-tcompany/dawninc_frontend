import React from "react";

export const OrderSub = ({ imageSrc, productName, size, color}) => {
    return (
      <div className="flex items-center space-x-4">
            <img src={imageSrc} alt={productName} className="w-16" />
            <div>
              <h2 className="whitespace-nowrap">{productName}</h2>
              <div className="flex justify-between"><p>Size: {size}</p><p>{color}</p></div>
            </div>
          </div>
    );
    
};