import React from 'react'
import Nav from '../Nav'
import Hours from '../toolbar/Hours'
import Footer from '../Footer'

const LandingPage = () => {
  return (
    <div className='h-[150vh]'>
        <Nav/>
        <Hours/>
        <Footer/>
        <div>
            <h1>Hello</h1>
        </div>
    </div>
  )
}

export default LandingPage