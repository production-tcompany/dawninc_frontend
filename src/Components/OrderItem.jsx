import React from 'react';

export const OrderItem = ({ imageSrc, productName, size, color, status, deliveryDate }) => {
    return (
      <div className="flex justify-between items-center p-4 md:p-8 border border-black mb-4 md:text-base text-xs">
        <div className="flex items-center space-x-4">
          <img src={imageSrc} alt={productName} className="w-16" />
          <div>
            <h2 className="whitespace-nowrap">{productName}</h2>
            <div className="flex justify-between"><p>Size: {size}</p><p>{color}</p></div>
          </div>
        </div>
        <div className="flex flex-col items-end md:items-center">
          {status === 'Tracking' ? (
            <>
              <button className="bg-black text-white p-1 rounded-md min-w-16 md:min-w-36 mt-4">Track</button>
              <p className="text-right md:text-xs text-[10px] mt-6 whitespace-nowrap">Delivery expected by {deliveryDate}</p>
            </>
          ) : (
            <p className="">{status}</p>
          )}
        </div>
      </div>
    );
  };