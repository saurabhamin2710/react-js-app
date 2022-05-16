import React from 'react'
import '../Pagecss/Navbar.css'
import { BiPhoneCall } from 'react-icons/bi';
import { IoNotifications } from 'react-icons/io5';
import logo from './1.png'; // with imp
function Navbar() {
    return (
        <nav className='navbar'>
            <img src={logo} alt='Imgae' className='Sym1M' />
            <h3 className='SymM'>MiloLive</h3>
            <div className='l'>
                <h3 className='no'><BiPhoneCall color='black' />  +1 999 999 999</h3>
                <h3 className="Not"><IoNotifications color='black' /></h3>
                <h3 className='Eng'> Eng</h3>
            </div>
        </nav>
    );
}

export default Navbar