import React from 'react';
import Navbar from '@/app/Layout/Navbar/Navbar';

const Cart = () => {
  const order = [
    {
      product: 'Bokku Bread',
      quantity: '1',
      subTotal: 500,
      deliveryFee: 50,
      totalPrice: 550,
    },
  ];

  return (
    <div>
      <Navbar />
      <div className='flex flex-row'>
        <div>
          <p>Items in my cart</p>
        </div>
        <div className='bg-[#FFF9CC] p-5 rounded-xl w-[20%]'>
          <p className='font-semibold text-xl text-[#3F3F3F]'>Summary</p>
          <div className='flex justify-between my-5'>
            <p className='text-sm text-[#3F3F3F]'>SUBTOTAL</p>
            <p className='text-sm'>${order.subTotal}</p>
          </div>
          <div className='flex justify-between mt-5 mb-20'>
            <p className='text-sm text-[#3F3F3F]'>DELIVERY FEE</p>
            <p className='text-sm'>${order.deliveryFee}</p>
          </div>
          <hr className='border-2 border-[#FFDF00] my-3' />
          <div className='flex justify-between my-5'>
            <p className='text-sm text-[#3F3F3F] '>TOTAL PRICE</p>
            <p className='text-xs'>${order.totalPrice}</p>
          </div>
          <button className='text-sm bg-[#FFDF00] mt-10 mb-5 py-4 px-6 rounded-full text-[#3F3F3F]'>
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
