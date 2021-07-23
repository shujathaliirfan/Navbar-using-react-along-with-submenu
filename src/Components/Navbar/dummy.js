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


//   let Nav=null;

//   if(item.subNav && subnav ) {
//  let Nav = <NavLink   to={item.path}  className="nav-links"  onClick={item.subNav && showSubnav}>
//  {item.title}  <span>{
// item.subNav && subnav && item.iconClosed }</span></NavLink>
//   }
//   if (item.subNav) {
//    let Nav= <NavLink   to={item.path}  className="nav-links"  onClick={item.subNav && showSubnav}>
//     {item.title}  <span>{ item.subNav && subnav && item.iconOpened }</span></NavLink>

//   }
// else {
//     let Nav = <NavLink   to={item.path}  className="nav-links"  onClick={item.subNav && showSubnav}>
//     {item.title}  </NavLink>


//   }



let Nav = null;


if(item.subNav && subnav) {
    Nav= <NavLink   to={item.path}  className="nav-links" 
    
    onClick={item.subNav && showSubnav}>
    {item.title}  <span className="arrow">{ item.iconOpened} </span></NavLink> 
}
else if(item.subNav ) {
    Nav = <NavLink   to={item.path}  className="nav-links"  onClick={item.subNav && showSubnav}>
    {item.title}  <span className="arrow">{ item.iconClosed} </span></NavLink> 
}else {
    Nav = <NavLink   to={item.path}  className="nav-links"  onClick={handleClick} >
    {item.title} </NavLink> 
}
  return (

   

    <>

<li  className="nav-item"  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
            {/* <NavLink   to={item.path}  className="nav-links"  onClick={item.subNav && showSubnav}>
               {item.title}  <span>{
            item.subNav && subnav ? item.iconOpened
            : item.subNav  ? item.iconClosed
            : null}</span></NavLink>

             */}

            {Nav}



<ul   className={subnav ? "dropdown-menu": "dropdown-menu clicked"} onClick={ showSubnav} >

         
{subnav && item.subNav.map((item, index) => {
          return (
            <li key={index} onClick={handleClick}>
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
