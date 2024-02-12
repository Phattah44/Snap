import React from 'react';
import Navbar from '@/app/Layout/Navbar/Navbar';
import Order from './Order';

const CartItem = [
  { item: 'Bokku Bread', unitPrice: 500, quantity: 5, finalPrice: 500 },
  { item: 'Bokku Bread', unitPrice: 500, quantity: 5, finalPrice: 500 },
  { item: 'Bokku Bread', unitPrice: 500, quantity: 5, finalPrice: 500 },
  { item: 'Bokku Bread', unitPrice: 500, quantity: 5, finalPrice: 500 },
  { item: 'Bokku Bread', unitPrice: 500, quantity: 5, finalPrice: 500 },
];

const order = [
  {
    product: 'Bokku Bread',
    quantity: '1',
    subTotal: 500,
    deliveryFee: 50,
    totalPrice: 550,
  },
];

const Cart = () => {
  return (
    <div className='w-[100vw] h-[100vh]'>
      <Navbar />
      <div className='flex flex-row justify-between py-3 px-20'>
        <div className='w-full px-14'>
          <p className='text-2xl font-semibold my-5'>Items in my cart</p>
          <div className='flex justify-between'>
            <p className='text-sm'>ITEMS</p>
            <div className='flex gap-x-10'>
              <p className='text-sm'>UNIT PRICE</p>
              <p className='text-sm'>QUANTITY</p>
              <p className='text-sm'>FINAL PRICE</p>
              <p className='text-sm'>REMOVE</p>
            </div>
          </div>
          {CartItem.map((items) => {
            return (
              <Order
                item={items.item}
                unitPrice={items.unitPrice}
                quantity={items.quantity}
                finalPrice={items.finalPrice}
              />
            );
          })}
        </div>
        <div className='bg-[#FFF9CC] p-5 rounded-xl w-[30%] h-[50vh] flex flex-col'>
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
          <button className='text-sm bg-[#FFDF00] mt-10 mb-5 py-4 px-6 rounded-full text-[#3F3F3F] '>
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
