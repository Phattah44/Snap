import React from 'react';
import Image from 'next/image';

const ProductCard = (prop) => {
  return (
    <div className='bg-[#FFFEF5] p-5 rounded-lg w-full'>
      <Image
        src={prop.image}
        width={250}
        height={250}
        className='items-center'
      />
      <p className='text-md font-semibold'>{prop.title}</p>
      <div>
        <p className='text-md font-semibold'>${prop.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
