import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../../assets/bg.webp';
import knife from '../../../assets/knife.png';
import spoon from '../../../assets/spoon.png';

const About = () => {
    return (
        <div className='relative h-[90vh] hidden lg:block '>
            <img src={bg} alt="" className='absolute inset-0 z-0 w-full h-full '/>
            <div className='hidden md:flex'>
                <div className='absolute flex items-center justify-center w-full h-full '>
                    <p className='text-[50rem] font-times font-bold text-secondary-variant'>L</p>
                </div>
            </div>
            <div className='absolute flex items-center justify-center w-full h-full gap-10 font-serif'>
                <div className='flex flex-col text-right items-end gap-10 w-[40rem]'>
                    <p className='text-6xl font-semibold text-primary '>About Us</p>
                    <img src={spoon} alt="" className='w-10 rotate-180 '/>
                    <p className='font-sans'>Lamoraga is a culinary concept that seeks the highest level of quality and taste, in order to offer its cuisine as a convenient luxury.</p>
                    <Link to='/History'><button className='px-[32px] py-2 mt-3 text-base font-bold text-black bg-primary'>Our Journey</button></Link>
                </div>
                <div>
                    <img src={knife} alt="knife" />
                </div>
                <div className='flex flex-col text-left gap-10 w-[40rem]'>
                    <p className='font-semibold text-primary text-[64px]'>Our History</p>
                    <img src={spoon} alt="" className='w-10'/>
                    <p className='font-sans'>The idea of Lamoraga started not too long ago in Andalusia, the Spanish region that covers most of the southern part of the Iberian Peninsula.</p>
                    <Link to='/History'><button className='px-[32px] py-2 mt-3 text-base font-bold text-black bg-primary'>Our Journey</button></Link>
                </div>
            </div>
        </div>
    )
}

export default About