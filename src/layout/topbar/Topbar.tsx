import React from 'react';
// import { BsChevronDown } from 'react-icons/bs';
// import AccountMode from '../../components/accountMode/AccountMode';
// import useAuth from '../../hooks/useAuth';


// import useClientInfo from '../../hooks/useClientInfo';
// import CurrentSection from './currentSection/CurrentSection';
// import User from './user/User';


export const Topbar = () => {
//  const { auth } = useAuth();
//  const client = auth?.client;
//  useClientInfo();


//  const companyName = client?.companyName;
//  const firstName = client?.firstName;
//  const lastName = client?.lastName;
//  const initials = firstName?.slice(0, 1) + lastName?.slice(0, 1) || '?';


 return (
   <div className='flex items-center justify-between px-10 py-2 bg-white border-b border-gray-100'>
     {/* <CurrentSection /> */}
     <div className='flex items-center gap-10 justify-between w-[95%] m-auto'>
       {/* <AccountMode /> */}
       <strong>New Request</strong>


       <User
         initials={"OU"}
         companyName={"Initiator"}
         firstName={"Uchenna"}
         lastName={"Ogbodo"}
       />
     </div>
   </div>
 );
};

const User = ({initials, companyName, firstName, lastName}: any) => {

  return(
    <>
   <div className='px-2 py-[9px] flex w-max items-center border border-primary-200 rounded-[32px]'>
     <span className='flex items-center justify-center p-2 text-sm font-bold border rounded-full h-9 w-9 border-primary-500 bg-primary-100 text-primary-500'>
       {initials}
     </span>


     <span className='ml-2 mr-5'>
       <p className='text-sm font-bold text-primary-500'>{companyName}</p>
       <p className='text-xs font-normal text-gray-900'>
         {firstName} {lastName}
       </p>
     </span>
     <button className='mr-1'>
       {/* <BsChevronDown className='w-5 h-auto' /> */}
     </button>


    
   </div>


    </>
  )

}





