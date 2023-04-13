import React from 'react'
import bg from '../../../assets/bg.webp';
import spoon from '../../../assets/spoon.png';
import tom from '../../../assets/tom.png';
import comma from '../../../assets/comma.png';



const Owner = () => {
    return (
        <div className='hidden xl:block'>
            <div className='relative h-[110vh] w-full flex justify-center items-center'>
                <img src={bg} alt="" className='absolute inset-0 z-0 w-full h-full '/>
                <div className='absolute flex items-center justify-center w-[80%] h-full gap-20 font-serif'>
                    <div className='hidden lg:flex'>
                        <div className='h-[40rem] w-[40rem] hidden md:block '>
                            <img src={tom} alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h5 className='text-[23px] font-bold'>Owner's Word</h5>
                        <img src={spoon} alt="spoon" className='w-10'/>
                        <p className='text-[64px] font-semibold text-primary mb-10 leading-[130%]'>Leaving The NFL</p>
                        <div className='w-full font-sans'>
                            <img src={comma} alt="" />
                            <p className='text-[16px]'> I worked so hard to tune everything out. Now that I'm done, I'm trying to let people get to know me first, who I am rather than what I've done. But it's pretty special. It's really special.</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-[32px] text-spirit'>Tom Nutten</p>
                            <p className='font-sans text-base text-slate-400'>Founder</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Owner