import React from 'react';
import Image from 'next/image';
import image from '@/public/snap.png';

const Footer = () => {
  return (
    <div>
      <div className='bg-[#FFF9CC] p-24 items-center'>
        <p className='text-sm text-center'>Place order now</p>
        <p className='text-3xl font-semibold my-5 text-center'>
          We Have The Best Deal
        </p>
        <p className='text-sm text-center'>
          Place your order now!!! and get it in less than 30 minutes. We provide
          you <br /> with an exceptional service
        </p>
      </div>
      <div className='bg-[#FFFEF5] flex flex-row justify-around'>
        <div className='flex flex-col items-center w-[150px] text-center my-auto'>
          <Image src={image} width={30} height={40} />
          <p className='text-sm'>Lorem Ipsum is a dummy text</p>
        </div>
        <div className='flex flex-col items-start gap-2 p-5'>
          <p className='text-[#000000] text-lg'>Lorem</p>
          <button className='text-sm'>lorem</button>
          <button className='text-sm'>lorem</button>
          <button className='text-sm'>lorem</button>
        </div>
        <div className='flex flex-col items-start gap-2 p-5'>
          <p className='text-[#000000] text-lg'>Lorem</p>
          <button className='text-sm'>lorem</button>
          <button className='text-sm'>lorem</button>
          <button className='text-sm'>lorem</button>
        </div>
        <div className='flex flex-col items-start gap-2 p-5'>
          <p className='text-[#000000] text-lg'>Lorem</p>
          <button className='text-sm'>lorem</button>
          <button className='text-sm'>lorem</button>
          <button className='text-sm'>lorem</button>
        </div>
        <div className='flex flex-col items-start gap-2 p-5'>
          <p className='text-[#000000] text-lg'>Lorem</p>
          <button className='text-sm'>lorem</button>
          <button className='text-sm'>lorem</button>
          <button className='text-sm'>lorem</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
