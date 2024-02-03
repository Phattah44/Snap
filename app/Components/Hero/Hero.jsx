import React from 'react';
import Image from '@/node_modules/next/image';
import image from '@/public/heroImage.png';
import Image1 from '@/public/snap.png';
import backImage1 from '@/public/hero-design.png';
import backImage2 from '@/public/hero-design-l.png';

const Hero = () => {
  return (
    <div className='bg-[#FFF9CC] w-full h-[80vh]'>
      <div className='flex flex-row p-10 justify-around'>
        <div className='flex flex-col gap-7 my-auto'>
          <p className='text-[#000] text-6xl font-semibold '>
            Fastest <br />
            <span className='text-[#CCB200]'>Delivery</span> Available <br />{' '}
            For You
          </p>
          <p className='text-[#000] w-[500px]'>
            Place your order now!!! and get it in less than 30 minutes. We
            provide you with an exceptional service
          </p>
          <button className='text-[#000] bg-[#FFDF00] py-3 px-20 w-[300px] rounded-3xl'>
            EXPLORE NOW
          </button>
        </div>
        <div className='m-auto'>
          <Image
            src={image}
            alt='Hero Image'
            width={500}
            height={300}
            className=''
          />
        </div>
        <div className='flex flex-col gap-10 my-auto'>
          <div className='flex flex-row gap-3'>
            <Image
              src={Image1}
              alt='Hero Image'
              width={20}
              height={90}
              className=''
            />
            <div>
              <h1 className='text-[#000] font-semibold'>Fast Delivery</h1>
              <p className='text-xs text-[#000]'>Lorum ipsum is dummy text</p>
            </div>
          </div>
          <div className='flex flex-row gap-3'>
            <Image
              src={Image1}
              alt='Hero Image'
              width={20}
              height={90}
              className=''
            />
            <div>
              <h1 className='text-[#000] font-semibold'>Fast Delivery</h1>
              <p className='text-xs text-[#000]'>Lorum ipsum is dummy text</p>
            </div>
          </div>
          <div className='flex flex-row gap-3'>
            <Image
              src={Image1}
              alt='Hero Image'
              width={20}
              height={90}
              className=''
            />
            <div>
              <h1 className='text-[#000] font-semibold'>Fast Delivery</h1>
              <p className='text-xs text-[#000]'>Lorum ipsum is dummy text</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='flex flex-row justify-between absolute bg-[#FFF9CC]'>
        <Image src={backImage1} width={200} height={180} />
        <Image src={backImage2} width={200} height={180} />
      </div> */}
    </div>
  );
};

export default Hero;
