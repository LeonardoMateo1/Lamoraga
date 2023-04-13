import React from 'react'

function MapLink(props) {
    const openMap = (address) => {
      if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
        window.location.href = 'https://maps.apple.com/?address=' + encodeURIComponent(address);
      } else if (navigator.userAgent.match(/Android/i)) {
        window.location.href = 'https://maps.google.com/?q=' + encodeURIComponent(address);
      } else {
        window.open('https://www.google.com/maps/search/' + encodeURIComponent(address));
      }
    }
  
    return (
      <p className='cursor-pointer' onClick={() => openMap(props.address)}>3936 Tamiami Trail N,Naples,FL 34103</p>
    );
  }

export default MapLink