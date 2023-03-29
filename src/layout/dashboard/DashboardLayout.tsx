import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../sidebar/Sidebar';
import { Topbar } from '../topbar/Topbar';

export const DashboardLayout = () => {
 return (
   <main className='flex h-screen w-screen'>
     <div className='h-full w-72 min-w-[288px] bg-primary-100 overflow-y-scroll'>
       <Sidebar />
     </div>


     <div className='relative h-full w-full overflow-y-scroll'>
       <div className='z-20 sticky top-0'>
         <Topbar />
       </div>


       <div className='h-full w-full overflow-x-scroll'>
         <div className='z-10 m-10'>
           <Outlet/>
         </div>
       </div>
     </div>
   </main>
 );
};


