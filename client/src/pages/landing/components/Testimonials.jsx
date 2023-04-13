import React from 'react'
import spoon from '../../../assets/gold-spoon.png';
import img from '../../../assets/micheal_c.jpg'
import img1 from '../../../assets/wade_w.jpg'
import img2 from '../../../assets/jason_n.jpg'
import img3 from '../../../assets/jen_m.jpg'

const reviews = [
    {
        id: 1,
        review: "WE NEVER MADE OUR WAY to the entrees on Lamorga's fetching menu, delightfully waylaid as we were by tapas and cocktails",
        name: "Micheal C.",
        job: "Local Guide",
        img: img,
    },
    {
        id: 2,
        review: "We had an enjoyable and quiet dinner. Excellent mix of flavors and Mediterranean texture. We started with Tapas as appetizers and two lovely entrees , the grouper for me and steak for my husband.",
        name: "Wade W.",
        job: "Chef",
        img: img1,
    },
    {
        id: 3,
        review: "Really enjoyed the service, drinks, and especially the food. We had a large group with children and it was handled with grace and professionalism.",
        name: "Jason N.",
        job: "Chef",
        img: img2,
    },
    {
        id: 4,
        review: "I never know what to expect with any restaurants post Covid, but this place knocked me off my feet! We went for Thanksgiving as a treat, and wow!",
        name: "Jennifer M.",
        job: "Caterer",
        img: img3,
    },
]

const Testimonials = () => {
  return (
    <div>
        <div className='flex-col items-center justify-center hidden w-full h-screen gap-5 font-serif lg:flex'>
            <p className='font-bold text-[23px]'>Testimonials</p>
            <img src={spoon} alt="" />
            <p className='text-6xl font-semibold text-spirit leading-[130%]'>Happy Customers</p>
            <div class="grid grid-cols-2 w-[80%] gap-10">
                {
                    reviews.map(({id, review, name, job, img}) => {
                        return (
                        <div key={id} className='flex gap-6'>
                            <img src={img} alt="img" className='h-60'/>
                            <div className='flex flex-col gap-5'>
                            <p className='font-sans text-base italic text-neutral-400 leading-[175%]'>"{review}"</p>
                            <p className='text-[32px] text-spirit'>{name}</p>
                            <p className='font-sans text-amber-50'>{job}</p>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Testimonials