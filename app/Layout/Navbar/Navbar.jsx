import React from 'react';
import Image from 'next/image';
import snap from '@/public/snap.png';
import cart from '@/public/cart.svg';
import notification from '@/public/bxs_search.svg';
import Link from 'next/link';
import Cart from '@/app/pages/Cart/page';

const Navbar = () => {
  return (
    <div className='bg-transparent flex flex-row justify-between py-5 px-10'>
      <div>
        <Image src={snap} />
      </div>
      <div className='flex flex-row p-2 gap-x-8'>
        <Link href='/'>
          <button className='text-[#494949]'>Home</button>
        </Link>
        <Link href='/pages/Cart'>
          <button className='text-[#494949]'>Orders</button>
        </Link>
        <Link href='/pages/checkout/'>
          <button className='text-[#494949]'>Checkout</button>
        </Link>
        <Link href='/pages/Contact'>
          <button className='text-[#494949]'>Contact</button>
        </Link>
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
