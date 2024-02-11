import React from 'react';
import ProductCard from './ProductCard';
import Image from 'next/image';
import image from '@/public/productBread.png';
import bread from '@/public/bread1.png';

const CardDetailes = [
  {
    id: 1,
    image: bread,
    title: 'Bokku Bread',
    price: 100,
  },
  {
    id: 1,
    image: bread,
    title: 'Bokku Bread',
    price: 100,
  },
  {
    id: 1,
    image: bread,
    title: 'Bokku Bread',
    price: 100,
  },
  {
    id: 1,
    image: bread,
    title: 'Bokku Bread',
    price: 100,
  },
  {
    id: 1,
    image: bread,
    title: 'Bokku Bread',
    price: 100,
  },
  {
    id: 1,
    image: bread,
    title: 'Bokku Bread',
    price: 100,
  },
  {
    id: 1,
    image: bread,
    title: 'Bokku Bread',
    price: 100,
  },
  {
    id: 1,
    image: bread,
    title: 'Bokku Bread',
    price: 100,
  },
];

const Products = () => {
  return (
    <div className='p-10 w-full my-10'>
      <h1 className='text-[#000] font-semibold text-2xl'>Products</h1>
      <div className='flex flex-row gap-8'>
        <div>
          <Image src={image} width={300} height={700} />
        </div>
        <div className='grid grid-cols-4 grid-rows-2 gap-10'>
          {CardDetailes.map((products) => {
            return (
              <ProductCard
                key={products.id}
                image={products.image}
                price={products.price}
                title={products.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
