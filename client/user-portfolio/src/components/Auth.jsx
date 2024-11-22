import React, { useState,useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import {Register,Login} from '../Services/Apicall'

function Auth() {
  const [register, setRegister] = useState(false);

const handleGoogleLoginSuccess = (credentialResponse) => {
    const credentialResponseDecoded = jwtDecode(credentialResponse.credential);

    const userDetails = {
        firstname: credentialResponseDecoded.given_name || "Guest",
        lastname: credentialResponseDecoded.family_name || "Guest",
        name: credentialResponseDecoded.name || "Guest",
        email: credentialResponseDecoded.email || "No email provided",
        Token: credentialResponseDecoded.jti || "No token",
        acno: credentialResponseDecoded.nbf || "No number",
    };
    // console.log("Updated User Data:", userDetails);

    const registration = async () => {
      if (!userDetails.Token || !userDetails.email || !userDetails.name || !userDetails.acno) {
          console.log("You are not eligible to register");
          return;
      }
  
      try {
          const result = await Register(userDetails);
          console.log("result",userDetails);
  
          if (result.status === 200) {
              console.log(`Successfully registered ${result.userDetails.name}`);
  
          } else {
              console.log("Error during registration:", result.message);
          }
      } catch (error) {
          console.error("Registration failed:", error.message);
      }
  };
  
  // To test or call the registration function:
  registration();
  
    
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
                <div className='sm:w-4/5 md:w-3/5 lg:w-4/5 xl:w-2/4 mx-auto border rounded-full'>
                  <GoogleLogin
                    onSuccess={handleGoogleLoginSuccess}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                  />
                  
                </div>
              ) : (
                <div className='sm:w-4/5 md:w-3/5 lg:w-4/5 xl:w-2/4 mx-auto border'>
                  <GoogleLogin
                    onSuccess={credentialResponse => {
                      // console.log(credentialResponse);
                      const credentialResponseDecoded = jwtDecode(
                        credentialResponse.credential
                      )
                      // console.log(credentialResponseDecoded);
                      
                    }}
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
