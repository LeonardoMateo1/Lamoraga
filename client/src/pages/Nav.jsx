import React, {useState} from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import {MdRestaurantMenu} from 'react-icons/md';
import {IoMdArrowDropdown} from 'react-icons/io';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';


const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isGiftOpen, setIsGiftOpen] = useState(false);
    
    const toggleMenuDropdown = () => {
        setIsOpen(!isOpen);
    };
    
    const toggleGiftDropdown = () => {
        setIsGiftOpen(!isGiftOpen);
    };


    return (
        <nav className='tool-bar'>
            <ul className='flex flex-col items-center justify-around w-full gap-4 pt-6 pb-8 bg-black md:flex-row'>
                <li className='sm:text-3xl lg:text-5xl'><img src={logo} alt="logo"/></li>
                <li className='hidden font-normal lg:flex gap-7 white'>
                    <p className='link'><Link to='/'>Home</Link></p>
                    <p className='link'><Link to='/Menu'>Menu</Link> </p>
                    <p className='link'><Link to='/Events'>Events</Link> </p>
                    <p className='link'><Link to='/Blog'>Blog</Link> </p>
                    <p className='link'><Link to='/Contact_Us'>Contact Us</Link></p>
                </li>
                <li className='flex gap-2 font-[600]'>
                    <div className='hidden lg:block'>
                        <div className='flex gap-2'>
                            <div className='relative items-center inline-block'>
                                <div className='hover:text-red-500'>
                                    <button className='flex items-center gap-1' onClick={toggleGiftDropdown}>Gift Cards <IoMdArrowDropdown className='text-red-500'/></button>
                                    
                                </div>
                                <ul className={`absolute ${isGiftOpen ? '' : 'hidden'} bg-black p-3 gap-2 flex flex-col w-40 left-[-11px]`}>
                                    <li><a href='https://www.toasttab.com/lamoraga/giftcards' className='link'>Buy Gift Card</a></li>
                                    <li><a href='https://www.toasttab.com/lamoraga/findcard' className='link'>Check Balance</a></li>
                                </ul>
                            </div>
                            <span>|</span>
                        </div>
                    </div>
                    <div className='flex items-start gap-5'>
                        <span className='hover:text-red-500'>Book Table</span>
                        <div className='relative items-center inline-block'>
                            <div className={`${isOpen? 'hidden' : ''} inline-flex items-center text-2xl hover:text-red-500 lg:hidden`}>
                                <button onClick={toggleMenuDropdown}><AiOutlineMenu/></button>
                            </div>
                            <div className={`${isOpen? '' : 'hidden'} inline-flex items-center text-2xl hover:text-red-500 lg:hidden`}>
                                <button onClick={toggleMenuDropdown}><MdRestaurantMenu/></button>
                            </div>
                            <ul className={`absolute ${isOpen ? '' : 'hidden'} text-white p-3 gap-2 flex flex-col left-[-20px] lg:hidden items-start w-36 bg-black z-20`}>
                                <li className='link'><Link to='/'>Home</Link></li>
                                <li className='link'><Link to='/Menu'>Menu</Link></li>
                                <li className='link'><Link to='/Events'>Events</Link></li>
                                <li className='link'><Link to='/Blog'>Blog</Link></li>
                                <li className='link'><Link to='/Contact_Us'>Contact Us</Link></li>
                                <li className='link'><Link to='/Gift_Cards'>Gift Cards</Link></li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Nav