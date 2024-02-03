import React from 'react';
import Image from 'next/image';
import snap from '@/public/snap.png';
import cart from '@/public/cart.svg';
import notification from '@/public/bxs_search.svg';

const Navbar = () => {
  return (
    <div className='bg-[#FFF9CC] flex flex-row justify-between py-5 px-10'>
      <div>
        <Image src={snap} />
      </div>
      <div className='flex flex-row p-2 gap-x-8'>
        <button className='text-[#494949]'>Home</button>
        <button className='text-[#494949]'>Orders</button>
        <button className='text-[#494949]'>Checkout</button>
        <button className='text-[#494949]'>Contact</button>
      </div>
      <div className='flex flex-row p-2 gap-x-7'>
        <button>
          <Image src={notification} />
        </button>
        <button>
          <Image src={cart} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
