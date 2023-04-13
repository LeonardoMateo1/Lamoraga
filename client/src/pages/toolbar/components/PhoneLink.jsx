import React from 'react'

function PhoneLink(props) {
    const openPhone = (phoneNumber) => {
        if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
            window.location.href = 'tel:' + encodeURIComponent(phoneNumber);
        } else if (navigator.userAgent.match(/Android/i)) {
            window.location.href = 'tel:' + encodeURIComponent(phoneNumber);
        }
    }

    return (
        <p className='cursor-pointer' onClick={() => openPhone(props.phoneNumber)}>(239) 331-3669</p>
    );
    }

export default PhoneLink