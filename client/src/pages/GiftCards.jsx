import React from 'react'
import Footer from './Footer'
import Hours from './toolbar/Hours'
import Nav from './Nav'

const GiftCards = () => {
  return (
    <div>
        <Nav/>
        <Hours/>
        <div className='h-[25vh] w-full flex flex-col justify-center items-center relative'>
        <div className='h-full w-full flex flex-col justify-center items-center mt-[30rem] gap-10 font-bold font-serif text-[23px]'>
            <a href="https://www.toasttab.com/lamoraga/giftcards" className='px-5 py-3 text-black bg-primary'>Buy Gift Card</a>
            <a href="https://www.toasttab.com/lamoraga/findcard" className='px-5 py-3 text-black bg-primary'>Check Balance</a>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default GiftCards