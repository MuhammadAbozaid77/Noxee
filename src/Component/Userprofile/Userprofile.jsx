import React from 'react'

export default function Userprofile({userDataDecode}) {
    console.log(userDataDecode)
  return <>

          <div className='userprofile container'>
            <div className="row align-items-center justify-content-center">
              <div className="icon col-md-4">
                  <i class="fa-solid fa-user"></i>
              </div>
              <div className="col-md-8">
                <div className='d-flex align-items-center'> <button className='btn me-3'> Name </button> <h3>   {userDataDecode?.first_name} </h3> </div>
                <div className='d-flex align-items-center'> <button className='btn me-3'> Age </button> <h3>   {userDataDecode?.age} </h3> </div>
                <div className='d-flex align-items-center'> <button className='btn me-3'> Email </button> <h3>   {userDataDecode?.email} </h3> </div>
              </div>
            </div>
          </div>
  </>
}
