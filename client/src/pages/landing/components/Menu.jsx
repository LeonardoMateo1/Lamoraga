import React from 'react'
import { Link } from 'react-router-dom'
import bg from '../../../assets/menu-bar-glass.webp'

const Menu = () => {

    
    return (
/*         <div className='relative hidden lg:block'>
            <img src={bg} alt="glass" className='bg-black opacity-80 background-image' />
            <div className='absolute flex items-center justify-center w-full h-full text-6xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
                <ul className='flex flex-col items-left w-[80%] gap-20 font-serif font-semibold leading-[130%] tracking-[0.04em]'>
                    <li><Link><h2>Bar Menu</h2></Link></li>
                    <li><Link><h2>Dinner Menu</h2></Link></li>
                    <li><Link><h2>Vegan Menu</h2></Link></li>
                </ul>
            </div>
        </div>
    ) */

    <div className='relative hidden md:block'>
        <img src={bg} alt="bg-about" className='bg-black background-image opacity-80' />
        <div className='absolute flex items-center justify-center h-full text-6xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-[22%]'>
            <ul className='flex flex-col items-left w-full gap-20 font-serif font-semibold leading-[130%] tracking-[0.04em] text-6xl'>
                <li><Link className='link'><h2>Bar Menu</h2></Link></li>
                <li><Link className='link'><h2>Dinner Menu</h2></Link></li>
                <li><Link className='link'><h2>Vegan Menu</h2></Link></li>
            </ul>
        </div>
    </div>
  ) 
}

export default Menu