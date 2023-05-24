import React, { useEffect, useState } from 'react' ;
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Component/Layout/Layout';
import Home from './Component/Home/Home';
import Movies from './Component/Movies/Movies';
import Tvshow from './Component/Tvshow/Tvshow';
import People from './Component/People/People';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Notfound from './Component/Notfound/Notfound';
import jwtDecode from 'jwt-decode';
import Userprofile from './Component/Userprofile/Userprofile';
import Protectedroute from './Component/Protectedroute/Protectedroute';
import Details from './Component/Details/Details';

export default function App() {

  // User Data After Decode
  let [userDataDecode, setuserDataDecode] = useState(null)
  let saveUserToken = ()=>  {
    let userEncode = localStorage.getItem("UserTooken") ;
    let userDecode = jwtDecode(userEncode) ;
    console.log(userDecode);
    setuserDataDecode(userDecode)
  }
  let logOut = ()=> {
    localStorage.removeItem("UserTooken");
    setuserDataDecode(null);
    return <Navigate to="login"/>
  }
useEffect(() => {
  if(localStorage.getItem("UserTooken")) {
    saveUserToken();
  }
  else {

  }
}, [])


let routers = createBrowserRouter([
    {path: "/" , element : <Layout  userDataDecode={userDataDecode} logOut={logOut} /> , errorElement : <Notfound/>, children : [
      {index:true , element :     <Protectedroute userDataDecode={userDataDecode} >         <Home/>    </Protectedroute>   },
      {path: 'movies' , element : <Protectedroute userDataDecode={userDataDecode} >    <Movies/>     </Protectedroute>  },
      {path: 'tvshow' , element : <Protectedroute userDataDecode={userDataDecode} >    <Tvshow/>     </Protectedroute>  },
      {path: 'people' , element : <Protectedroute userDataDecode={userDataDecode} >    <People/>     </Protectedroute>  },
      {path: 'details/:mediaType/:id' , element : <Protectedroute userDataDecode={userDataDecode} >  <Details/>  </Protectedroute> },
      {path: 'profile' , element :  <Protectedroute userDataDecode={userDataDecode} >  <Userprofile userDataDecode={userDataDecode} />  </Protectedroute> } ,
      {path: 'login' , element :  <Login saveUserToken={saveUserToken} />},
      {path: 'register' , element : <Register/>}
    ]}
  ])


  return <>

    < RouterProvider router={routers} /> 

  </>
}
