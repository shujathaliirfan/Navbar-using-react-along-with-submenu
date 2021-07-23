import React from 'react'
import { NavLink } from 'react-router-dom';


import  { useState, useEffect } from 'react';

import { SidebarData } from '../../Data/NavData';
import SubMenu from './SubMenu';



import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';

import './Navbar.scss'


export default function Navbar() {

    const [data, setData] = useState([]);

    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(v => !v);

   

useEffect(() => {  
  setData(SidebarData);
}, [])

console.log(data);
    return (
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className="navbar">
            <NavLink to='/' className="navbar-logo" onClick={closeMobileMenu}>
            Logo
          <i className='fab fa-firstdraft' />
            </NavLink>
        
        <div className="menu-icon"  onClick={handleClick}>
          {click ?   <AiIcons.AiOutlineClose /> : <FaIcons.FaBars />}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        {data.map((item, index) => {
              return <SubMenu item={item} key={index} handleClick={handleClick} />;
            })}

            </ul>

        </nav>
        </IconContext.Provider>
    )
}
