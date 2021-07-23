import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.scss'


export default function MenuItems({items,index,dropdown, dropDownHandler,closeMobileMenu}) {

    const {path,title,icon , iconClosed ,iconOpened, links} = items;
    return (
        <>

<li  className="nav-item" onClick={dropDownHandler} key={index}>
            <NavLink   to={path} className="nav-links" >
               {title} <span>{dropdown ? iconClosed :iconOpened  }</span>
           

               <ul   onClick={dropDownHandler}   
               className={dropdown ? 'dropdown-menu clicked' : 'dropdown-menu'}>

        { links  && links.length >0 && links.map((item, index) => {
          return (
            <li key={index} >
              <NavLink
                className={item.cName}
                to={item.path}
              
              >
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
   

               </NavLink>
               </li>
        </>
    )
}
