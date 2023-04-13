import React from 'react'
import bg from '../../../assets/bg.webp';
import spoon from '../../../assets/gold-spoon.png';
import mushroom from '../../../assets/mushroom-roll.jpg';
import number_1 from '../../../assets/number-1-icon.png';
import paradise from '../../../assets/paradise-coast-icon.png';
import trip_advisor from '../../../assets/trip-advisor-icon.png';


const Awards = () => {
  return (
    <div>
        <div className='relative items-center justify-start hidden w-full h-screen lg:flex'>
            <img src={bg} alt="background" className='absolute inset-0 z-0 w-full h-full' />
            <div className='absolute flex items-center justify-center w-full h-full'>
                <div className='flex flex-col justify-center gap-20 leading-[175%] w-[40%]'>
                    <div className='flex flex-col gap-4'>
                        <p className='font-serif text-[23px] font-bold'>Awards & Recognition</p>
                        <img src={spoon} alt="gold-spoon"  className='w-10'/>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <p className='font-serif text-[64px] font-semibold text-spirit mb-7'>Our Laurels</p>
                        <div className='flex items-start justify-start gap-5'>
                            <img src={number_1} alt="number1" className='h-full w-30'/>
                            <div className='flex flex-col gap-2 w-[65%]'>
                                <p className='font-serif font-bold text-spirit text-[23px]'>Naples Illustrated Dining Awards 2022</p>
                                <p className='font-serif font-bold text-spirit text-[23px]'>Best International Cusine - Editors Pick</p>
                                <p className='font-sans text-neutral-400'>Our loyal readers, to share there picks for the best restaurants in our coverage area, which includes Marco Island, Naples, Bonita Springs, and Estero</p>
                            </div>
                        </div>
                        <div className='flex items-start justify-start gap-5'>
                            <img src={paradise} alt="paradise" className='w-20 h-full'/>
                            <div className='flex flex-col gap-2 w-[65%]'>
                                <p className='font-serif font-bold text-spirit text-[23px]'>Paradise Coast - Award Wining Restaurants</p>
                                <p className='font-sans text-neutral-400'>Featuring a menu that blends Spanish tapas with Mediterranean fusion, <strong>Lamoraga</strong> is a restaurant where sharing isn't just allowed - it's encouraged.</p>
                            </div>
                        </div>
                        <div className='flex items-start justify-start gap-5'>
                            <img src={trip_advisor} alt="trip-advisor" className='w-20 h-full'/>
                            <div className='flex flex-col gap-2 w-[65%]'>
                                <p className='font-serif font-bold text-spirit text-[23px]'>Trip Advisor - Travelers' Choice 2022</p>
                                <p className='font-sans text-neutral-400'>When in Naples, do not miss this place! The food was incredible and it has a sheik, trendy atmosphere!</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <img src={mushroom} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Awards