import React from 'react';
import { NavLink } from 'react-router-dom';


const NavItem = ({ path, pathname, linkTitle, activeIcon, inactiveIcon }: any) => {
 return (
   <li className='flex items-center justify-between pr-6'>
     <NavLink
       // end
       to={path}
       className={({ isActive }: any) =>
         `${
           isActive ? 'text-primary-500' : undefined
         } flex items-center justify-start gap-4 font-medium text-sm 2xl:text-base`
       }
     >
       {pathname?.startsWith(path) ? (
        //  <img src={activeIcon} alt={linkTitle} />
        <i className="fa fa-envelope"></i>
       ) : (
        //  <img src={inactiveIcon} alt={linkTitle} />
         <i className="fa fa-envelope"></i>

       )}
       <p>{linkTitle}</p>
     </NavLink>


     {pathname?.startsWith(path) && (
       <span className='bg-primary-500 h-2 w-2 rotate-45'></span>
     )}
   </li>
 );
};


export default NavItem;

