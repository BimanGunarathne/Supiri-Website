import React from 'react'
import '../Styles/Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='left-side'>
                <div className='logo'>
                    <img src="images/Logo.png" alt="logo" />
                </div>
            </div>
            <div className='right-side'>
                <a href='Test'>Supiri transport service</a>
                <a href='Test'>Supiri service station</a>
                <a href='Test'>Lanka Filling station</a>
                <a href='Test'>Jcb Hiring</a>
                <a href='Test'>About Us</a>
            </div>
        </div>
    )
}

export default Navbar