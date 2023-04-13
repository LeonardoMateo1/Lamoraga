import React from 'react'
import MapLink from './components/MapLink'
import PhoneLink from './components/PhoneLink'

const Hours = () => {
    
  return (
    <div className='tool-bar bottom-0 p-3'>
        <div className='flex justify-center w-full gap-7 text-sm md:text-base'>
            <p>M-S: 4 pm - 9 pm</p>
            <MapLink address="3936 Tamiami Trail N, Naples, FL 34103"/>
            <PhoneLink phoneNumber="239-331-3669" />
        </div>
    </div>
  )
}

export default Hours