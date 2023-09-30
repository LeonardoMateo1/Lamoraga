import React from 'react'
import bg from '../../../assets/bg.webp';
import spoon from '../../../assets/gold-spoon.png';
import { Link } from 'react-router-dom';
import garlic from '../../../assets/garlic_shrimp.jpg';
import octopus from '../../../assets/spanish_oct.jpg';
import mussels from '../../../assets/mussels.jpg';
import calamari from '../../../assets/calamari1.jpg';


const Gallery = () => {
  return (
<div>
  <div className='relative hidden lg:flex items-center justify-center w-full h-[68vh] overflow-hidden'>
    <img src={bg} alt="" className='absolute inset-0 z-0 w-full h-full' />
    <div className='absolute flex'>
      <div className='font-serif w-[491px] h-[286px] gap-[24px] flex flex-col'>
        <p className='text-[23px] font-bold'>Instagram</p>
        <img src={spoon} alt="spoon" className='w-10' />
        <p className='text-[64px] text-spirit font-bold leading-[130%]'>Photo Gallery</p>
        <p className='font-sans text-neutral-400 w-[80%] mb-5'>Join our community on Instagram and stay up-to-date with our latest news and promotions.</p>
        <a href='https://www.instagram.com/lamoraganaples/?hl=en'><button className='py-2 font-bold text-black px-7 bg-spirit'>View More</button></a>
      </div>
      <div className='flex gap-[30px]'>
        <div className='w-[301px] h-[447px] overflow-hidden border-[2px] border-insta'>
          <a href="https://www.instagram.com/lamoraganaples/?hl=en"><img src={garlic} alt="garlic" /></a>
        </div>
        <div className='w-[301px] h-[447px] overflow-hidden border-[2px] border-insta'>
          <a href="https://www.instagram.com/lamoraganaples/?hl=en"><img src={octopus} alt="garlic" /></a>
        </div>
        <div className='w-[301px] h-[447px] overflow-hidden border-[2px] border-insta'>
          <a href="https://www.instagram.com/lamoraganaples/?hl=en"><img src={mussels} alt="garlic" /></a>
        </div>
        <div className='w-[301px] h-[447px] absolute -right-[335px] overflow-hidden border-[2px] border-insta'>
          <a href="https://www.instagram.com/lamoraganaples/?hl=en"><img src={calamari} alt="garlic" /></a>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Gallery