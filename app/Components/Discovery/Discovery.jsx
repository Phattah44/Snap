import React from 'react';
import Image from 'next/image';
import bread1 from '@/public/bread1.png';
import DiscoveryCard from './DiscoveryCard';
import image from '@/public/bread1.png';

const DiscoveryProduct = [
  {
    id: 1,
    image: image,
    title: 'Bokku Bread',
    deliveryTime: '30 minutes',
    price: 100,
  },
  {
    id: 1,
    image: image,
    title: 'Bokku Bread',
    deliveryTime: '30 minutes',
    price: 100,
  },
  {
    id: 1,
    image: image,
    title: 'Bokku Bread',
    deliveryTime: '30 minutes',
    price: 100,
  },
  {
    id: 1,
    image: image,
    title: 'Bokku Bread',
    deliveryTime: '30 minutes',
    price: 100,
  },
];

const Discovery = () => {
  return (
    <div className='p-10 w-full'>
      <div className='flex flex-row justify-between my-10'>
        <div className='flex items-center bg-[#FFFEF5] p-5 w-[48%] rounded-3xl'>
          <div className='flex flex-col gap-6'>
            <p className='text-[#000]'>Lorem Ipsum</p>
            <p className='text-xs text-[#000]'>lorem Ipsum is a dummy text</p>
            <button className='text-[#CCB200] underline w-[100px]'>
              ORDER NOW
            </button>
          </div>
          <div>
            <Image src={bread1} />
          </div>
        </div>
        <div className='flex items-center bg-[#FFFEF5] p-5 w-[48%] rounded-3xl'>
          <div className='flex flex-col gap-6'>
            <p className='text-[#000]'>Lorem Ipsum</p>
            <p className='text-xs text-[#000]'>lorem Ipsum is a dummy text</p>
            <button className='text-[#CCB200] underline w-[100px]'>
              ORDER NOW
            </button>
          </div>
          <div>
            <Image src={bread1} />
          </div>
        </div>
      </div>
      <p className='text-[#000] font-semibold text-2xl'>
        Discover Latest Products
      </p>
      <div className='grid grid-cols-4 my-10 gap-10'>
        {DiscoveryProduct.map((product) => {
          return (
            <div>
              <DiscoveryCard
                key={product.id}
                image={product.image}
                title={product.title}
                deliveryTime={product.deliveryTime}
                price={product.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Discovery;
