import React from 'react';
import {TrackOrderItem} from '../Components/TrackOrderItem';

export const TrackOrder = () => {
  const orderTrackingData = [
    {
      imageSrc: 'https://via.placeholder.com/150',
      productName: 'Beige normal Tees',
      size: 'XL',
      color: '●',
      status: 'Tracking',
      deliveryDate: '27/07/2023',
      tracking: [
        { label: 'Order Received', date: '27/07/2023', status: true },
        { label: 'Packed', date: '27/07/2023', status: true },
        { label: 'Shipped', date: '27/07/2023', status: true },
        { label: 'Item shipped', date: '27/07/2023', status: true },
        { label: 'Dispatched to ernakulam hub', date: '27/07/2023', status: true },
        { label: 'Received at ernakulam hub', date: '27/07/2023', status: true },
        { label: 'Out for delivery', date: '', status: false },
      ],
    },
  ];

  return (
    <div className="container mx-auto p-8 pt-32">
      {orderTrackingData.map((order, index) => (
        <TrackOrderItem key={index} {...order} />
      ))}
    </div>
  );
};
