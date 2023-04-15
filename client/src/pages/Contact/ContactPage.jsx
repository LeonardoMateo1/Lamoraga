import React from 'react'
import Footer from '../Footer'
import Hours from '../toolbar/Hours'
import Nav from '../Nav'
import bg from "../../assets/contact_image.jpg";
import bg_2 from "../../assets/bg.webp";
import calamari from "../../assets/calamari.jpg";


const ContactPage = () => {
  return (
    <div>
      <Nav/>
      <Hours/>
      <div>
        <div className='relative'>
          <img src={bg} alt='bg-hero' className='object-cover w-full h-[592px]' />
          <div className='absolute inset-0 bg-black opacity-60'></div>
          <div className='absolute flex justify-center w-full top-60'>
            <p className='font-serif text-[90px] font-bold text-spirit'>Contact Us</p>
          </div>
          <div className='relative flex items-center justify-center mt-[25rem] '>
            <iframe
              id='map'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.080426183379!2d-81.8021249229948!3d26.194061890601507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db1e188b2899f3%3A0xd2c6f3603ce3dc1f!2sLamoraga%20Restaurant!5e0!3m2!1sen!2sus!4v1670745655804!5m2!1sen!2sus'
              style={{ border: 0, width: '80%', height: '30rem' }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
          <div className='relative mt-[5rem] z-[5]'>
            <img src={bg_2} alt="email" className='w-full h-[80vh] object-cover' />
            <div className='absolute flex justify-center w-full bottom-[4rem] gap-40 items-center'>
              <form className='flex flex-col items-start gap-5 font-serif text-cat-text'>
                <input type="text" placeholder='Full Name' className='py-2 px-5 lg:w-[635px] text-left border border-white bg-menu md:w-[500px] w-[350px]' />
                <input type="text" placeholder='Email Address' className='py-2 px-5 lg:w-[635px] text-left border border-white bg-menu md:w-[500px] w-[350px]' />
                <textarea name="message" id="message" className='p-2 border border-white bg-menu w-[350px] md:w-[500px] lg:w-[635px] h-[140px]' placeholder='Message'></textarea>
                <input type="submit" value="Submit" className='py-2 font-semibold text-black px-9 bg-spirit' />
              </form>
              <div className='w-[483px] h-[650px] hidden lg:block'>
                <img src={calamari} alt="calamari" className='object-cover w-full h-full' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}



export default ContactPage