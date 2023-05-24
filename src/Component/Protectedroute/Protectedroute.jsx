import React from 'react' ;
import { Navigate } from 'react-router-dom';

export default function Protectedroute({ userDataDecode , children }) {

    if( (userDataDecode == null) & localStorage.getItem("UserTooken") == null ){
        return <Navigate to="/login" />
    }
    else {
        return children
    }


  return <>
    
  </>
}
