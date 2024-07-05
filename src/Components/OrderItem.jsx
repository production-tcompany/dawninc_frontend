import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { OrderSub } from '../Util/OrderSub';

export const OrderItem = ({ imageSrc, productName, size, color, status, deliveryDate }) => {
    const navigateTo = useNavigate();
    return (
      <div className="flex  justify-between items-center p-4 md:p-8 border border-black mb-4 md:text-base text-xs">
        <OrderSub imageSrc={imageSrc} productName={productName} size={size} color={color}/>
        <div className="flex flex-col items-end md:items-center">
          {status === 'Tracking' ? (
            <>
              <button className="bg-black text-white p-1 rounded-md min-w-16 md:min-w-36 mt-4" onClick={()=>{navigateTo('/trackorders');}} >Track</button>
              <p className="text-right md:text-xs text-[10px] mt-6 whitespace-nowrap">Delivery expected by {deliveryDate}</p>
            </>
          ) : (
            <p className="">{status}</p>
          )}
        </div>
      </div>
    );
  };

