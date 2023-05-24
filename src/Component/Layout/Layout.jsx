import React from 'react' ; 
import Navbar from '../Navbar/Navbar' ; 
import Footer from '../Footer/Footer' ; 
import { Outlet } from 'react-router-dom';

export default function Layout({userDataDecode , logOut}) {
  return <>
    
    <Navbar userDataDecode={userDataDecode} logOut={logOut} />
      <div className='container-fluid pt-5 px-5 mb-5'>
      <Outlet>   </Outlet>
      </div>
    <Footer/>

  </>
}
