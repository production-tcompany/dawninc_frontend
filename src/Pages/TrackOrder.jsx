import React from 'react';
import { useLocation } from 'react-router-dom';
import {TrackOrderItem} from '../Components/TrackOrderItem';

export const TrackOrder = () => {
  const location = useLocation()
  let data = location.state.data
  const orderTrackingData = [
    {
      imageSrc: data.imageSrc,
      productName: data.productName,
      size: data.size,
      color: data.color,
      status: data.status,
      deliveryDate: data.deliveryDate,
      tracking: [
        { label: 'Order Received', date: '27/07/2023', status: true },
        { label: 'Packed', date: '27/07/2023', status: true },
        { label: 'Shipped', date: '27/07/2023', status: true },
        { label: 'Item shipped', date: '27/07/2023', status: false },
        { label: 'Dispatched to ernakulam hub', date: '27/07/2023', status: false },
        { label: 'Received at ernakulam hub', date: '27/07/2023', status: false },
        { label: 'Out for delivery', date: '27/07/2023', status: false },
      ],
    },
  ];

  return (
    <div className="p-8 pt-32">
      {orderTrackingData.map((order, index) => (
        <TrackOrderItem key={index} {...order} />
      ))}
    </div>
  );
};
