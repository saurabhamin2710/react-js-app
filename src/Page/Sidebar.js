import React from 'react'
import '../Pagecss/Sidebar.css'
import { SidebarData } from './SidebarData';
import logo from './1.png'; // with imp
function Sidebar() {
    return (
        <div className='Sidebar'>
            <img src={logo} alt='Imgae' className='Sym1' /><h2 className='Sym'>MiloLive</h2>
            <ul className='SidebarList'>
                {SidebarData.map((val, key) => {
                    return (
                        <li key={key} className="row" id={window.location.pathname === val.link ? "active" : ""} onClick={() => {
                            window.location.pathname = val.link;
                        }} >
                            <div id='icon'>{val.icon}</div><div id='title'>{val.title}</div>
                        </li>
                    )
                })}
            </ul>
        </div >
    )
}

export default Sidebar