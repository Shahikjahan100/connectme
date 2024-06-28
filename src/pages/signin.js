

import React from 'react';
import Navbar from '../components/navbar';
import SignInBg from '../components/signin/signinbg';
import { useNavigate } from 'react-router-dom';
function Signin() {
  const navigate=useNavigate();
const navigateSignUp=()=>{
  navigate('/signup')
}
  return (

    <div>
    <Navbar btnText={"Sign up"} onClick={navigateSignUp}/>
    <SignInBg/>
      
    </div>
  );
}

export default Signin;
