import React from 'react'
import bg from '../assets/bg.webp';
import spoon from '../assets/spoon.png';
import gold_spoon from '../assets/gold-spoon.png';
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'


const Footer = () => {
  return (
    <div className=''>
      <div className='w-full bg-bg h-[32rem]'></div>
      <div className='relative h-screen w-full flex justify-center items-center leading-[130%]'>
        <img src={bg} alt="" className='absolute z-0 object-cover w-full h-[100vh]'/>
        <div className='absolute h-[442px] bg-secondary hidden flex-col justify-center items-center lg:px-[252px] lg:py-[64px] bottom-[80%] lg:bottom-[35rem] md:bottom-[90%] border border-border shadow-black shadow-2xl gap-10 lg:flex'>
          <div className='flex flex-col items-center font-serif'>
            <p className='font-bold text-[23px]'>Newsletter</p>
            <img src={spoon} alt="" className='mb-5'/>
            <p className='mt-3 mb-10 text-6xl font-semibold text-center text-primary leading-[130%]'>Subscribe To Our Newsletter</p>
            <p className='font-sans'>And never miss the latest Updates!</p>
          </div>
          <div className='flex gap-6'>
            <input type="text" placeholder='Email' className='py-2 pl-2 text-black pr-[20rem]'/>
            <input type="submit" value="Subscribe" className='px-10 py-3 text-black bg-spirit' />
          </div>
        </div>
        <div className='absolute flex flex-col gap-[5rem] lg:gap-[20rem] mt-40 text-neutral-400 items-center justify-center lg:flex-row w-[80%] bottom-[10rem] lg:bottom-[15rem] '>
          <div className='flex flex-col items-center justify-center gap-2 leading-[175%] text-center'>
            <p className='font-serif text-[32px] mb-2'>Contact Us</p>
            <p className='w-[80%] 2xl:w-full text-[12px] xl:[14px] 2xl:text-base'>3936 North Tamiami Trail Naples, Florida 34103</p>
            <p className='text-[12px] xl:[14px] 2xl:text-base'>(239) 331-3669</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-3'>
            <p className='text-primary text-[40px] lg:text-[64px] font-serif font-bold leading-[130%]'>LAMORAGA</p>
            <p className='w-full text-center text-[12px] xl:[14px] 2xl:text-base'>"The best way to find yourself is to lose yourself in the service of others.”</p>
            <img src={gold_spoon} alt="gold-spoon" />
            <div className='flex text-white text-[1.5rem]'>
              <a href="https://www.facebook.com/LamoragaNaples"><FaFacebookF/></a>
              <a href="https://www.instagram.com/lamoraganaples/?hl=en"><AiOutlineInstagram/></a>
            </div>
          </div>
          <div>
            <p className='lg:w-[10rem] text-[12px] w-[7rem] lg:text-base '>Monday-Sunday: 4:00 pm - 9:00 pm</p>
          </div>
        </div>
        <div className='absolute bottom-[5rem] lg:bottom-[10rem] ml-10 text-[12px] lg:text-base items-center flex justify-center'>
          <p>2022 LAMORAGA. All Rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer