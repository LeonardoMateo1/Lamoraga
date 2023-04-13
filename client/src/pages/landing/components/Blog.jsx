import React from 'react'
import spoon from '../../../assets/gold-spoon.png';


const Blog = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center w-full h-[87vh] font-serif'>
            <p className='text-[23px] font-bold'>Blogs</p> 
            <img src={spoon} alt="spoon" />
            <div>
              <p className='text-[50px] lg:text-6xl leading-[130%] text-spirit font-bold'>Lamoraga Updates</p>
            </div>
        </div>
    </div>
  )
}

export default Blog