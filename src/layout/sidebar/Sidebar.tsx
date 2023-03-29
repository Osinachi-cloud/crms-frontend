import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import "./sidebar.css";
import NavItem from './navItem/NavItem';
import { navItemsData } from './navItemsData/NavItemsData';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';


export const Sidebar = () => {

 const [pathname, setPathname] = useState('/');
 const location = useLocation();
 const { isAuth, setIsAuth } = useContext(AuthContext);
 let navigate = useNavigate();
 useEffect(() => {
   setPathname(location.pathname);

 }, [location, isAuth]);


 const logout = () => {
    Swal.fire({
      title: 'Log Out',
      text: 'Are you sure you want to End the Session?',
      icon: 'warning',
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      showCancelButton: true,
      showCloseButton: false,
      // timer: 3000,
      showConfirmButton: true,
      customClass: {
        confirmButton: 'btn-confirm'
      }
      // timerProgressBar: true
      }).then((result) => {
        if (result.isConfirmed) {
          console.log("hello1");
          console.log(isAuth);
          setIsAuth(false);
          console.log(isAuth);
          navigate("/");

        } else if (result.dismiss === Swal.DismissReason.cancel) {
          console.log("hello1");
        }
      });

 }


 return (
   <aside className='w-full h-full px-6'>
     <div className='py-4 mb-10 border-b border-primary-200'>
       {/* <div className='py-4 mb-6 border-b 2xl:mb-10 border-primary-200'> */}
       <Link to='/dashboard/home'>
         <img
              src={'data:image/png;base64,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'}
           alt='...'
           className='w-auto h-10 cursor-pointer'
         />
       </Link>
     </div>
     <ul className='flex flex-col text-sm gap-7 2xl:text-base'>
       {navItemsData.map((item: any, i:number) => (
         <NavItem
           key={i}
           linkTitle={item.title}
           path={item.path}
           pathname={pathname}
           activeIcon={item.activeIcon}
           inactiveIcon={item.inactiveIcon}
         />
       ))}
     </ul>
     <div className='mt-[100px] 2xl:mt-[300px]'>
       <div onClick={logout} className='absolute bottom-1'><i className="fa fa-sign-out text-[red] text-[1.5rem] font-thin"></i></div>
     </div>
   </aside>
 );
};
