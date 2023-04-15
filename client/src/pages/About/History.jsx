import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav'
import Hours from '../toolbar/Hours'
import Footer from '../Footer'
import bg from "../../assets/abt-hero.webp";
import angle from "../../assets/angle.png";
import spoon from '../../assets/gold-spoon.png';
import restaurant from '../../assets/side-restaurant.jpg';
import inside_restaurant from '../../assets/inside-restaurant.jpg';





const History = () => {
    return (
        <div>
            <Nav/>
            <Hours/>
            <div>
                <div className='h-screen'>
                    <img src={bg} alt="bg-hero" className='object-cover w-full h-[70vh]' />
                </div>
                <div className='absolute flex justify-center w-full top-60'>
                    <p className='font-serif text-spirit text-[90px] font-bold'>Welcome To LAMORAGA</p>
                </div>
                <div className='absolute flex justify-center w-full gap-1 top-[25rem] place-items-center'>
                    <Link to='/'><p className='font-serif font-bold text-[23px]'>Home</p></Link>
                    <img src={angle} alt="angle" className='w-5 h-5' />
                    <p className='font-serif font-bold text-[23px]'>About Us</p>
                </div>
            </div>
            <div className='flex justify-center w-full h-full'>
                <div className='h-full  w-[80%] flex flex-col justify-center items-center gap-[20px]'>
                    <div>
                        <h5 className='font-serif font-bold text-[23px]'>Our History</h5>
                        <img src={spoon} alt="spoon" />
                    </div>
                    <h2 className='font-serif font-semibold text-[64px] text-spirit leading-[130%]'>Serving Guests For Over 8 Years</h2>
                    <div className='flex justify-around w-[500px] lg:w-full'>
                        <div className='flex flex-col gap-[30px]'>
                            <p className='w-[523px] h-[84px] text-cat-text xl:text-base text-[14px]'>On April 14th, 2014, Lamoraga Naples opened its doors for business and is looking to continue to satisfy customers of all realms of life for many years to come.</p>
                            <div className='xl:w-[523px] h-[566px] w-full'>
                                <img src={restaurant} alt="restaurant" className='object-cover w-full h-full' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-[30px]'>
                            <div className='w-[634px] h-[385px]'>
                                <img src={inside_restaurant} alt="inside" className='object-cover w-full h-full' />
                            </div>
                            <h3 className='text-[45px] text-spirit font-serif font-semibold'>Over The Years</h3>
                            <div className='flex justify-around'>
                                <div className='flex flex-col gap-2'>
                                    <h3 className='font-serif font-semibold text-spirit text-[45px] leading-[130%]'>7+</h3>
                                    <img src={spoon} alt="spoon"  className='w-10'/>
                                    <h4 className='w-[126px] h-[84px] font-serif text-[32px]'>Vegan Options</h4>
                                </div>
                                <img src="https://www.lamoragarestaurant.com/static/img/options-line.png"></img>
                                <div className='flex flex-col gap-2'>
                                    <h3 className='font-serif font-semibold text-spirit text-[45px] leading-[130%]'>50+</h3>
                                    <img src={spoon} alt="spoon"  className='w-10'/>
                                    <h4 className='w-[126px] h-[84px] font-serif text-[32px]'>Dinner Options</h4>
                                </div>
                                <img src="https://www.lamoragarestaurant.com/static/img/options-line.png"></img>
                                <div className='flex flex-col gap-2'>
                                    <h3 className='font-serif font-semibold text-spirit text-[45px] leading-[130%]'>10+</h3>
                                    <img src={spoon} alt="spoon"  className='w-10'/>
                                    <h4 className='w-[126px] h-[84px] font-serif text-[32px]'>Tapas</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center w-full h-fit mt-[10rem]'>
                        <div className='flex flex-col gap-[20px] items-center w-[80%]'>
                            <div>
                                <h5 className='font-serif font-bold text-[23px] mb-3'>Orgin</h5>
                                <img src={spoon} alt="spoon" />
                            </div>
                            <h2 className='text-spirit text-[64px] font-semibold font-serif items-center leading-[130%]'>Our Roots</h2>
                            <p className='w-[824px] h-fit text-center text-cat-text tracking-[0.04em]'>The idea of Lamoraga started not too long ago in Andalusia, the Spanish region that covers most of the southern part of the Iberian Peninsula. 
                            The region's history dates back many 1000s of years. From the Romans, North African Tribes, such as the Moors, to the British and the French, you notice the social influences in the Andalusian cuisine. 
                            The mixture of cultures, a great coastline along the Mediterranean Sea, and the indigenous foods to this region offer complex and very unique flavors to its cuisine.
                            <br />
                            <br />
                            There, a handful of chefs decided to create a contemporary lifestyle restaurant, where one can enjoy recipes that are essence not only of Spanish, but of an international gastronomic culture. 
                            Lamoraga was born, with its Andalusian roots loosely translates to: The Barbeque on the beach.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default History