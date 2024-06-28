
import React from 'react';
import Navbar from '../components/navbar';
import SignUpBg from '../components/signup/signupbg';
import { Navigate, useNavigate } from 'react-router-dom';


function Signup() {
    const navigate = useNavigate();
    const navigateSignIn=()=>{
        navigate('/signin')
    }
  return (
    <>
    <Navbar btnText={"Sign in"} onClick={navigateSignIn}/>
    <SignUpBg/>
    </>
  );
}

export default Signup;
