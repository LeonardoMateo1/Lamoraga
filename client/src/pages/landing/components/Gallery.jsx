import React from 'react'
import bg from '../../../assets/bg.webp';
import spoon from '../../../assets/gold-spoon.png';
import { Link } from 'react-router-dom';


const Gallery = () => {
  return (
    <div>
        <div className='relative hidden lg:flex items-center justify-center w-full h-[68vh]'>
            <img src={bg} alt="" className='absolute inset-0 z-0 w-full h-full'/>
            <div className='absolute flex gap-10'>
              <div className='font-serif'>
                <p className='text-[23px] font-bold'>Instagram</p>
                <img src={spoon} alt="spoon" />
                <p className='text-[64px] text-spirit font-bold leading-[130%]'>Photo Gallery</p>
                <p className='font-sans text-neutral-400 w-[80%] mb-5'>Join our community on Instagram and stay up-to-date with our latest news and promotions.</p>
                <Link><button className='py-2 font-bold text-black px-7 bg-spirit'>View More</button></Link>
              </div>
              <div>
                
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default Gallery