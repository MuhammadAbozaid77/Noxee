import React from 'react'
import Navbar from '../Navbar/Navbar'
import notfoundimg from "../../pic/Notfound.jpeg"

export default function Notfound() {
  return <>
    
    <div className='vh-100 text-center'>
    <Navbar/>
        <img src={notfoundimg} alt="" />
    </div>
  </>
}
