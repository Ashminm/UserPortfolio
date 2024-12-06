import React, { useState,useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import {RegisterApi,LoginApi} from '../Services/Apicall'

function Auth() {
  const [register, setRegister] = useState(false);

const handleGoogleRegisterSuccess = (credentialResponse) => {
    const credentialResponseDecoded = jwtDecode(credentialResponse.credential);

    const userDetails = {
        firstname: credentialResponseDecoded.given_name || "Guest",
        lastname: credentialResponseDecoded.family_name || credentialResponseDecoded.given_name,
        name: credentialResponseDecoded.name || "Guest",
        email: credentialResponseDecoded.email || "No email provided",
        acno: credentialResponseDecoded.nbf || "No number",
    };
    // console.log("UsetDetailse===",userDetails);
    

  const handileRegistraion=async()=>{
    if(!userDetails.firstname || !userDetails.lastname || !userDetails.name || !userDetails.email || !userDetails.acno){
      alert("Enter full filed!")
    }else{ 
      const result=await RegisterApi(userDetails)
      console.log(result);
      
      if(result.status === 200){
        alert(`Registration success ${result.data.name}`)
      }else{
        alert(result.response.data)
      }
   }
   
  }
  handileRegistraion(userDetails)
};


const handleGoogleLoginSuccess= (credentialResponse)=>{
  const credentialResponseDecodedLog = jwtDecode(credentialResponse.credential);

  const userLoginDetails = {
    firstname: credentialResponseDecodedLog.given_name || "Guest",
    lastname: credentialResponseDecodedLog.family_name || "Guest",
    name: credentialResponseDecodedLog.name || "Guest",
    email: credentialResponseDecodedLog.email || "No email provided",
    acno: credentialResponseDecodedLog.nbf || "No number",
};
console.log("Login detailse:",userLoginDetails);

  const handileLogin=async()=>{
    const {acno,email,name } = userLoginDetails;
    if(!acno || !email || !name){
      alert("Enter full filed!")
    }else{
      const result=await LoginApi(userLoginDetails)
      if(result.status === 200 && res.data.existingUser){
        alert(`Login success ${result.data.name}`)
        sessionStorage.setItem("role", res.data.role);
        sessionStorage.setItem("token",res.data.token)
      }else{
        alert(result.response.data)
        console.log(result.response);
        
      }
    }
  }
  handileLogin(userLoginDetails)
};

  const toggleRegister = () => setRegister(!register);

  return (
    <div className='flex justify-center items-center h-screen pb-5 py-[90px]'>
      <div className="flex flex-col text-center px-5 py-3 w-full ">
        <div className='flex justify-center flex-col items-center'>
          <div className="shadow-md border w-full sm:w-4/5 md:w-3/5 lg:w-3/6 flex justify-center flex-col rounded-md mb-4">
            <div className="bg-gray-200 w-[80%] mx-auto my-7 rounded-md p-5 py-28">
              <h1 className="mb-2 text-4xl">{register ? "Let's get started" : "Welcome back"}</h1>
              <p className="mb-10 text-xs uppercase">
                {register ? "Register now" 
                          : "Start for free"}
              </p>
              {register ? (
                <div className='sm:w-4/5 md:w-3/5 lg:w-4/5 xl:w-2/4 mx-auto rounded-full'>
                  <GoogleLogin
                    onSuccess={handleGoogleRegisterSuccess}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                  />
                  
                </div>
              ) : (
                <div className='sm:w-4/5 md:w-3/5 lg:w-4/5 xl:w-2/4 mx-auto rounded-full'>
                 <GoogleLogin
                    onSuccess={handleGoogleLoginSuccess}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                  />
                  
                </div>
              )}

             <div className="flex justify-center items-center mt-4 gap-2">
              {register ? (
                <p>Already have a profile</p>
              ) : (
                <p>Don't have a profile</p>
              )}
  
              <button onClick={toggleRegister} className="text-blue-500 underline">
                {register ? "Login" : "Register"}
              </button>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
