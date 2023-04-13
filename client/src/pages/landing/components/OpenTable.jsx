import React, {useState} from 'react'
import spoon from '../../../assets/gold-spoon.png'
import OpenTableIcon from '../../../assets/open_table_icon.png'

const OpenTable = () => {

  return (
    <div>
        <div className='w-full h-[60vh] flex justify-center items-center font-serif'>
            <div className='flex flex-col justify-center items-center gap-5 w-[85.25rem] h-[29.125rem] bg-secondary border border-border'>
                <p className='font-bold text-[23px]'>Reservations</p>
                <img src={spoon} alt="gold-spoon" className='w-10' />
                <p className='font-semibold text-primary text-[50px] sm:text-[64px]'>Book A Table</p>
                <div className='lg:hidden'>
                    <button><img src={OpenTableIcon} alt="" className='w-20 rounded-lg bg-slate-200'/></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OpenTable