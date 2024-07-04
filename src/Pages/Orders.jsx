import React from 'react';
import { OrderItem } from '../Components/OrderItem';

export const Orders = () => {
  const orders = [
    {
      imageSrc: 'https://i.pinimg.com/236x/7c/a6/6b/7ca66b1bfcfb87ea2e0387b375776d0b.jpg',
      productName: 'Beige normal Tees',
      size: 'XL',
      color: '●',
      status: 'Tracking',
      deliveryDate: '27/07/2023',
    },
    {
      imageSrc: 'https://i.pinimg.com/236x/7c/a6/6b/7ca66b1bfcfb87ea2e0387b375776d0b.jpg',
      productName: 'White normal Tees',
      size: 'S',
      color: '○',
      status: 'Delivered',
      deliveryDate: '',
    },
    {
      imageSrc: 'https://i.pinimg.com/236x/7c/a6/6b/7ca66b1bfcfb87ea2e0387b375776d0b.jpg',
      productName: 'Beige normal Tees',
      size: 'XL',
      color: '●',
      status: 'Delivered',
      deliveryDate: '',
    },
  ];

  return (
    <div className="container mx-auto p-8 max-w-3xl pt-44 ">
      <h1 className="mb-8 underline underline-offset-2 md:text-lg">Your orders</h1>
      <div className='max-w-2xl grid grid-cols-1 md:px-6 place-content-center'>
        {orders.map((order, index) => (
            <OrderItem key={index} {...order} />
        ))}
      </div>
    </div>
  );
};

