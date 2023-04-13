import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import kit from '../../../assets/bar-kit.jpg';
import spoon from '../../../assets/gold-spoon.png';


const wine = [
    {
        id: 1,
        name: 'SANGRIA',
        location: 'House made Sangria',
        type: 'Red and White',
        price: '12'
    },
    {
        id: 2,
        name: 'Castello Di Poggio',
        location: "Barbera d'Asti, Italy",
        type: 'BTG',
        price: '13'
    },
    {
        id: 3,
        name: 'R. Prüm Essence',
        location: "Mosel, Germany",
        type: 'BTG',
        price: '11'
    },
    {
        id: 4,
        name: 'Black Slate, La Viella Alta',
        location: "Priorat, Spain",
        type: 'BTG',
        price: '16'
    },
    {
        id: 5,
        name: 'Estrella',
        location: "Spain",
        type: 'Draft',
        price: '8'
    },
]

const cocktails = [
    {
        id: 1,
        name: 'Grapefruit Crush',
        mix: 'Stoli Ruby Red Vodka, Bauchant Orange, Grapefruit Juice',
        price: '14'
    },
    {
        id: 2,
        name: 'Lychee Vacation',
        mix: 'Stolichnaya Vodka, St Germain Elderflower, Lemon Juice, Lychee Purée',
        price: '15'
    },
    {
        id: 3,
        name: 'Bloody Monkey',
        mix: 'Monkey 47 gin, Blood Orange, Aperol',
        price: '18'
    },
    {
        id: 4,
        name: 'Mochatini',
        mix: 'Lavazza Espresso, Stolichnaya Vanilla, Licor 43',
        price: '16'
    },
]

const DrinkSpecials = () => {

    const [isDrinkOpen, setIsDrinkOpen] = useState(false);

    const handleDrink = () => {
        setIsDrinkOpen(!isDrinkOpen)
    }


    
    return (
        <div>
            <div className='flex flex-col items-center justify-center w-full h-full gap-5 p-10 font-serif'>
                <p className='font-bold text-[18px] sm:text-[23px]'>Menu That Fits Your Pallete</p>
                <img src={spoon} alt="gold-spoon" />
                <p className='font-semibold text-[50px] sm:text-[64px] text-spirit leading-[130%]'>Today's Special</p>
                <div className='flex gap-2 lg:hidden'>
                    <button onClick={handleDrink} className={`${isDrinkOpen ? '': 'bg-slate-800'} text-[24px] p-2 bg-red-500 text-black font-serif`}><p>Wine & Beer</p></button>
                    <button onClick={handleDrink} className={`${isDrinkOpen ? 'bg-slate-800': ''} text-[24px] p-2 bg-red-500 text-black font-serif`}><p>Cocktails</p></button>
                </div>
                <div className='flex items-center justify-center w-full gap-6 '>
                    <div className={`${isDrinkOpen ? '' : 'hidden'} lg:flex flex-col items-center justify-center`}>
                        <h2 className='font-semibold tracking-[0.04em] text-[45px] mb-10 hidden lg:block'>Wine & Beer</h2>
                        {
                            wine.map(({id, name, location, type, price}) => {
                                return(
                                    <div key={id} className='flex flex-col w-full mb-8 md:w-[412px]'>
                                        <div className='flex items-center justify-between gap-3 font-bold text-spirit text-[23px]'>
                                            <h5 className='text-[23px]'>{name}</h5>
                                            <div className='flex items-center justify-center gap-2'>
                                                <div className='w-[90px] h-[1px] bg-spirit'></div>
                                                <h5 className='text-white text-[1.6rem] font-bold'>${price}</h5>
                                            </div>
                                        </div>
                                        <div className='flex gap-1 font-sans text-[16px]'>
                                            <p>{location}</p>
                                            <p>|</p>
                                            <p>{type}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='flex-col items-center justify-center hidden lg:flex'>
                        <img src={kit} alt="" />
                        <Link to='/Menu'><button className='px-[32px] py-2 mt-3 text-base font-bold text-black bg-primary'>View More</button></Link>
                    </div>
                    <div className={`${isDrinkOpen ? 'hidden' : ''} lg:flex flex-col items-center justify-center`}>
                        <h2 className='font-semibold tracking-[0.04em] text-[45px] mb-[4.5rem] hidden lg:block'>Cocktails</h2>
                        {
                            cocktails.map(({id, name, mix, price}) => {
                                return(
                                    <div key={id} className='flex flex-col w-full mb-8 md:w-[412px]'>
                                        <div className='flex items-center justify-between gap-3 font-bold text-spirit text-[23px]'>
                                            <h5 className='text-[23px]'>{name}</h5>
                                            <div className='flex items-center gap-2'>
                                                <div className='w-[90px] h-[1px] bg-spirit'></div>
                                                <h5 className='text-white text-[1.6rem]'>${price}</h5>
                                            </div>
                                        </div>
                                        <div className='font-sans text-[16px]'>
                                            <p>{mix}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DrinkSpecials