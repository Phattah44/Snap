import React from 'react';
import Navbar from '@/app/Layout/Navbar/Navbar';

const Checkout = () => {
  return (
    <div>
      <Navbar />
      <div className='p-10 flex flex-col'>
        <div className='flex justify-between'>
          <p className='text-3xl'>Checkout</p>
          <button className='text-[#CCB200] underline'>GO BACK TO CART</button>
        </div>
        <div className='flex gap-32 my-10'>
          <div className='w-full'>
            <p className='mb-2 text-sm text-[#3F3F3F]'>DELIVERY DETAILS</p>
            <hr className='border-2 border-[#CCB200]' />
            <form action='' className='my-10'>
              <p className='text-sm text-[#3F3F3F] my-3'>NAME</p>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Enter your name'
                className='w-full h-12 p-3 peer border-2 border-[#c2c1c1] text-gray-900 placeholder-[#EEEEEE] focus:border-[#CCB200] focus: border-600 focus:outline-none rounded-xl'
              />
              <p className='text-sm text-[#3F3F3F] mt-10 mb-3'>PHONE NUMBER</p>
              <input
                type='tel'
                pattern='((^+)(234){1}[0–9]{10})|((^234)[0–9]{10})|((^0)(7|8|9){1}(0|1){1}[0–9]{8})'
                id='phoneNumber'
                name='phoneNumber'
                placeholder='Enter your phone number'
                className='w-full h-12 p-3 peer border-2 border-[#c2c1c1] text-gray-900 placeholder-[#EEEEEE] focus:border-[#CCB200] focus: border-600 focus:outline-none rounded-xl required'
              />
              <p className='text-sm text-[#3F3F3F] mt-10 mb-3'>ADDRESS</p>
              <input
                type='text'
                id='address'
                name='address'
                placeholder='Enter your address'
                className='w-full h-12 p-3 peer border-2 border-[#c2c1c1] text-gray-900 placeholder-[#EEEEEE] focus:border-[#CCB200] focus: border-600 focus:outline-none rounded-xl'
              />
            </form>
          </div>
          <div className='w-full'>
            <p className='mb-2 text-sm text-[#3F3F3F]'>PAYMENT DETAILS</p>
            <hr className='border-2 border-[#CCB200]' />
            <form action='' className='my-10'>
              <p className='text-sm text-[#3F3F3F] my-3'>NAME ON CARD</p>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Enter your name'
                className='w-full h-12 p-3 peer border-2 border-[#c2c1c1] text-gray-900 placeholder-[#EEEEEE] focus:border-[#CCB200] focus: border-600 focus:outline-none rounded-xl'
              />
              <p className='text-sm text-[#3F3F3F] mt-10 mb-3'>CARD NUMBER</p>
              <input
                id='dcn'
                type='tel'
                inputmode='numeric'
                pattern='[0-9\s]{13,19}'
                autocomplete='dc-number'
                maxlength='19'
                placeholder='xxxx xxxx xxxx xxxx'
                required
                className='w-full h-12 p-3 peer border-2 border-[#c2c1c1] text-gray-900 placeholder-[#EEEEEE] focus:border-[#CCB200] focus: border-600 focus:outline-none rounded-xl required'
              />
              <div className='flex gap-10 my-10'>
                <div className='w-full'>
                  <p className='text-sm text-[#3F3F3F] mb-3'>EXP DATE</p>
                  <input
                    type='text'
                    id='inputExpDate'
                    placeholder='MM / YY'
                    maxlength='7'
                    className='w-full h-12 p-3 peer border-2 border-[#c2c1c1] text-gray-900 placeholder-[#EEEEEE] focus:border-[#CCB200] focus: border-600 focus:outline-none rounded-xl required'
                  />
                </div>
                <div className='w-full'>
                  <p className='text-sm text-[#3F3F3F] mb-3'>CVV</p>
                  <input
                    type='password'
                    class='cvv'
                    placeholder='CVV'
                    className='w-full h-12 p-3 peer border-2 border-[#c2c1c1] text-gray-900 placeholder-[#EEEEEE] focus:border-[#CCB200] focus: border-600 focus:outline-none rounded-xl required'
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <button className='text-sm bg-[#FFDF00] w-[40%] mx-auto p-4 rounded-3xl'>
          MAKE PAYMENT
        </button>
      </div>
    </div>
  );
};

export default Checkout;
