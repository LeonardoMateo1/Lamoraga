import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import Hours from '../toolbar/Hours'
import Nav from '../Nav'
import bg from "../../assets/event-hero.webp";
import angle from "../../assets/angle.png";
import Drink from "../../assets/event-picture.png";


const EventsPage = () => {
  return (
    <div>
        <Nav/>
        <Hours/>
        <div>
          <div className='h-screen'>
            <img src={bg} alt="bg-hero" className='object-cover w-full h-[70vh]' />
          </div>
          <div className='absolute flex justify-center w-full top-60'>
              <p className='font-serif text-spirit text-[90px] font-bold'>Events</p>
          </div>
          <div className='absolute flex justify-center w-full gap-1 top-[25rem] place-items-center'>
              <Link to='/'><p className='font-serif font-bold text-[23px]'>Home</p></Link>
              <img src={angle} alt="angle" className='w-5 h-5' />
              <p className='font-serif font-bold text-[23px]'>Events</p>
          </div>
          <div className='w-full h-[85vh]'>
            <div className='flex items-center justify-around w-full'>
              <div className='flex-1/2'>
                <div className='hidden lg:flex'>
                  <img src={Drink} alt="drink" />
                </div>
              </div>
              <div className='flex items-center lg:flex-1/2'>
                <div className='lg:w-[634px] lg:h-[648px] bg-wheat w-[529px] h-[539px]'>
                  <br />
                  <div className='flex justify-center w-full'>
                    <div className='w-[95%] h-[95px] bg-menu m-0 flex justify-center'>
                      <p className='mt-3 font-serif font-bold text-[23px] text-spirit'>No Events</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}


export default EventsPage