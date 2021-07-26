import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss'


const SubMenu = ({ item , handleClick }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);


  

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
        setSubnav(false);
    } else {
        setSubnav(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
        setSubnav(false);
    } else {
        setSubnav(false);
    }
  };



let Nav = null;


if(subnav && item.subNav) {
    Nav= <NavLink   to={item.path}  className="nav-links" onClick={item.subNav && showSubnav} >
    {item.title}  <span className="arrow">{ item.iconOpened} </span></NavLink> 
}
 if(item.subNav ) {
    Nav= <NavLink   to={item.path}  className="nav-links" onClick={item.subNav && showSubnav} >
    {item.title}  <span className="arrow">{ item.iconClosed} </span></NavLink> 
}
if (!item.subNav) {
    Nav= <NavLink   to={item.path}  className="nav-links " > {item.title} </NavLink> 
}
  return (

   

    <>

<li  className="nav-item" 
 onMouseEnter={onMouseEnter}  onMouseLeave={onMouseLeave}
 >
            

            {Nav}



<ul   className=  {subnav ? 'dropdown-menu':'dropdown-menu clicked'} onClick={ showSubnav}>         
{item.subNav && item.subNav.map((item, index) => {
          return (
            <li key={index} 
            onClick={handleClick}
            >
              <NavLink
                className={item.cName}
                to={item.path}>
              <span>  {item.icon}</span>   {item.title} 
              </NavLink>
            </li>
          );
        })}
      </ul> 
    </li>
 </>
  );
};

export default SubMenu;
