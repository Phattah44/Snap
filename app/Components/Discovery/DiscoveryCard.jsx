import React from 'react';
import Image from 'next/image';

const DiscoveryCard = (prop) => {
  return (
    <div className=''>
      <div className='bg-[#FFFEF5] p-5 rounded-lg w-full'>
        <Image
          src={prop.image}
          width={250}
          height={250}
          className='items-center'
        />
        <p className='text-md font-semibold'>{prop.title}</p>
        <p className='text-sm text-[#CCB200]'>
          Delivery time: {prop.deliveryTime}
        </p>
        <div>
          <p className='text-md font-semibold'>${prop.price}</p>
        </div>
      </div>
    </div>
  );
};

export default DiscoveryCard;
