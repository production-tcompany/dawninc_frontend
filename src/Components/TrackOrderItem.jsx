import React from 'react';
import { OrderSub } from '../Util/OrderSub';

export const TrackOrderItem = ({ imageSrc, productName, size, color, status, deliveryDate, tracking }) => {
  
  const trueStatusItems = tracking.filter((item, index) => item.status);
  const falseStatusItems = tracking.filter((item, index) => !item.status && index !== tracking.length - 1);
  const lastItem = tracking[tracking.length - 1];

  return (
    <div className="flex flex-col justify-center items-center p-8 pt-12 ">
      <div className='md:mr-96 mr-14'>
        <OrderSub imageSrc={imageSrc} productName={productName} size={size} color={color}/>
      </div>
      <div className="mt-10 text-sm md:border-s-2 border-gray-300 md:pl-20 pl-2">
        <ol className="relative flex flex-col justify-center items-start">
          {trueStatusItems.map((item, index) => (
            <li key={index} className="pb-3 relative">
              {index !== trueStatusItems.length - 1 && (
                <span className="absolute h-full w-[1px] bg-black"></span>
              )}
              <span className="absolute w-2 h-2 bg-white ring ring-black rounded-full left-[-0.2rem]"></span>
              <div className="ml-6 text-left -mt-1">
                <h3 className="text-black">{item.label}</h3>
                <p className="text-xs text-black">{item.date || 'Pending'}</p>
              </div>
            </li>
          ))}
          {falseStatusItems.map((item, index) => (
            <li key={index} className="pb-3 text-xs relative ml-8">
            {index !== trueStatusItems.length - 1 && (
              <span className="absolute h-full w-[1px] bg-black"></span>
            )}
            <span className="absolute w-3 h-3 bg-white ring-1 ring-black rounded-full left-[-0.35rem]"></span>
            <div className="ml-6 text-left -mt-1">
              <h3 className="text-black">{item.label}</h3>
              <p className=" text-black">{item.date || 'Pending'}</p>
            </div>
          </li>
          ))}
          {!trueStatusItems.includes(lastItem) && (
            <li key={tracking.length - 1} className="pb-2 relative">
              <span className="absolute w-2 h-2 ring ring-gray-500 rounded-full left-[-0.2rem]"></span>
              <div className="ml-6 text-left -mt-1">
                <h3 className=" leading-tight text-gray-500">{lastItem.label}</h3>
                <p className="text-xs">Delivery expected by {lastItem.date}</p>
              </div>
            </li>
          )}
        </ol>
      </div>
    </div>
  );
};
