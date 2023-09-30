import React from 'react'
import {Link} from 'react-router-dom';
import Nav from '../Nav'
import Hours from '../toolbar/Hours'
import Footer from '../Footer'
import spoon from '../../assets/spoon.png'
import bg from '../../assets/abt-hero.webp'
import About from './components/About';
import Menu from './components/Menu';
import OpenTable from './components/OpenTable';
import DrinkSpecials from './components/DrinkSpecials';
import Testimonials from './components/Testimonials';
import Awards from './components/Awards';
import Blog from './components/Blog';
import Gallery from './components/Gallery';

const LandingPage = () => {
  return (
    <div>
        <Nav/>
        <Hours/>
        
        <div>
          <div className='flex md:hidden items-center justify-center h-screen gap-[7rem] font-serif mb-20 xl:mb-10 '>
            <div className='flex flex-col w-full gap-5 ml-10 md:w-[30rem]'>
              <p className='font-[700] text-[18px] sm:text-[23px] w-[10rem]'>Chase The New Flavour</p>
              <img src={spoon} alt="" className='w-10'/>
              <p className='text-[50px] sm:text-[85px] text-primary font-bold leading-[130%]'>The Key To Fine Dining</p>
              <p className=' font-base w-[70%] font-sans'>We combine traditional, Spanish tapas and classic dishes with an international twist.</p>
              <Link to='/Menu'><button className='px-[32px] py-2 mt-3 text-base font-bold text-black bg-primary'>Explore Menu</button></Link>
            </div>
          </div>
          <div className='relative hidden md:block'>
            <img src={bg} alt="bg-hero" className='background-image' />
            <div className='absolute flex items-center justify-center w-full h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
              <div className='flex flex-col items-center w-[80%]'>
                <h1 className='font-serif font-bold lg:tracking-[0.04em] text-spirit text-[70px] lg:text-7xl whitespace-nowrap break-normal'>The Key to Fine Dining</h1>
                <p className='font-serif font-bold text-[23px] mt-10 text-center'>We Combine Traditional, Spanish Tapas And Classic Dishes With An International Twist.</p>
              </div>
            </div>
          </div>
        </div>
        <OpenTable/>
        <About/>
        <Menu/>
        <DrinkSpecials/>
        <Testimonials/>
        <Awards/>
        <Blog/>
        <Gallery/>
        <Footer/>
    </div>
  )
}

export default LandingPage