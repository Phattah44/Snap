import React from 'react';
import Image from 'next/image';
import image from '@/public/bread1.png';

const Order = (prop) => {
  return (
    <div>
      <div className='flex justify-between my-5'>
        <div className='flex items-center gap-x-5 w-full'>
          <Image src={image} width={100} height={100} />
          <p className='text-sm font-semibold'>{prop.item}</p>
        </div>
        <div className='flex justify-around items-center w-full ml-36'>
          <p className='text-sm'>${prop.unitPrice}</p>
          <div className='flex gap-5 items-center'>
            <button> - </button>
            <p className='text-sm'>{prop.quantity}</p>
            <button> + </button>
          </div>
          <p className='text-sm'>${prop.finalPrice}</p>
          <button>X</button>
        </div>
      </div>
      <hr className='border-2 border-[#EEEEEE]' />
    </div>
  );
};

export default Order;
