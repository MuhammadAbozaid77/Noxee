import React , { useState }from 'react' ;
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Joi  from 'joi';

export default function Login({saveUserToken}) {
   /* ------------------------------------------------------------- */
  // Person Data Object  >>>  Api formation
  let [userData, setuserData] = useState({
    email :"", 
    password :""
  })

    // Get Input Value
    let getInputValue =(e)=>{
      // 1- Deep Copy
      let userDataCopy = {...userData}
      // 2- Set Change
      userDataCopy[e.target.name] = e.target.value
      // 3- Set Object
      setuserData(userDataCopy)
    }
 /* ------------------------------------------------------------- */

    let [ValidateErrors, setValidateErrors] = useState([])
    let ValidationForm = ()=> {
      let ValidSchema = Joi.object({
        email :Joi.string().email({tlds : {allow : ["net" , "com"]}}).required() ,
        password :Joi.string().required(), 
      }) ;
      return ValidSchema.validate(userData , {abortEarly : false});
    }
     /* ------------------------------------------------------------- */
    // Navigate Login 
    let navigateLogin =  useNavigate() ;
    // Register Replay Status
    let [registerReplay, setregisterReplay] = useState("")
    // Api Post To Database 
    let apiSendData =async ()=>{
        let {data} = await axios.post("https://sticky-note-fe.vercel.app/signin" , userData) ; 
        // Conditon on Database Replay
        if(data.message === "success"){
          console.log(data)
          localStorage.setItem("UserTooken" , data.token);
          saveUserToken();
          navigateLogin("/");
        }
        else {
          setregisterReplay(data.message);
        }
    }
 /* ------------------------------------------------------------- */
  // Submit Form
  let submitForm = (e)=>{
    e.preventDefault();
    ValidationForm();
    let ValidateReplay = ValidationForm();
    if(ValidateReplay.error){
    setValidateErrors(ValidateReplay.error.details)
    console.log(ValidateErrors)
    }
    else {
      apiSendData();
    }
  }

  /* ------------------------------------------------------------- */

  return <>

    <h3 className='text-white text-center'> Registiration Form  </h3>
    {registerReplay? <div className='container alert alert-danger py-2'> {registerReplay} </div> : ""  }  

    <form className='d-flex justify-content-center' onSubmit={submitForm}>
      <div className='w-75'>
          <div className='my-2'>
            <label className='text-white my-1' htmlFor=""> Email </label>
            <input onChange={getInputValue} className='form-control' type="email" name='email' />
          </div>
          <div className='my-2'>
            <label className='text-white my-1' htmlFor=""> Password </label>
            <input onChange={getInputValue} className='form-control' type="password" name='password' />
          </div>
          <button className='btn btn-info my-2 px-4' type='submit' > Login </button>
      </div>
    </form>


  </>
}
