import React from 'react';
import { OrderSub } from '../Util/OrderSub';

export const TrackOrderItem = ({ imageSrc, productName, size, color, status, deliveryDate, tracking }) => {
  return (
    <div className="flex flex-col justify-between items-start md:items-center p-4 border border-gray-300 rounded-lg mb-4">
      <OrderSub imageSrc={imageSrc} productName={productName} size={size} color={color}/>
      <div className="mt-4 md:mt-0">
        <h3 className="font-semibold mb-2">Order Status</h3>
        <div className="relative pl-4">
          {tracking.map((item, index) => (
            <div key={index} className="flex items-center mb-2">
              <div className={`w-4 h-4 rounded-full border-2 ${item.status ? 'border-black' : 'border-gray-300'}`}></div>
              <div className="ml-2">
                <p className={`${item.status ? 'text-black' : 'text-gray-500'} font-semibold`}>{item.label}</p>
                <p className={`${item.status ? 'text-black' : 'text-gray-500'} text-xs`}>{item.date}</p>
              </div>
            </div>
          ))}
          <div className="absolute top-2 left-1.5 w-0.5 h-full bg-gray-300"></div>
        </div>
        <p className="mt-2 text-xs">Delivery expected by {deliveryDate}</p>
      </div>
    </div>
  );
};
