import React from 'react'
import '../Styles/Navbar.css'
import MainLog from '../images/Logo.png';
function Navbar() {
    return (
        <div className='navbar'>
            <div className='left-side'>
                <div className='logo'>
                    <a href="home"><img src={MainLog} alt="logo" /></a>
                </div>
            </div>
            <div className='right-side'>
                <div className='links'>
                    <a href='Test'>Transport Service</a>
                    <a href='Test'>Service Station</a>
                    <a href='Test'>Filling Station</a>
                    <a href='Test'>Jcb Hiring</a>
                    <a href='Test'>About Us</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar