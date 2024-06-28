


import React, { useState } from 'react';
import { StyleSheet,css } from 'aphrodite';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './button';
import Textfield from './textfield';
import { useNavigate } from 'react-router-dom';

function SignInBg() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate = useNavigate();






const handleEmailChange=(event)=>{
    setEmail(event.target.value);
}

const handlePasswordChange=(event)=>{
    setPassword(event.target.value);
}


const handleSignIn=()=>{
console.log("Sign in")
}

const handleSignUp=()=>{
    navigate('/signup')
    }
  return (
    <div className={css(styles.bg)}>
    <div className={css(styles.container)}>
    <div className={css(styles.left)}>
    <div className={css(styles.innerLeft)}>
    <text className='jaldi-regular'>Sign in with connect me</text>
    <div className={css(styles.threeLinks)}>
    <img src={`${process.env.PUBLIC_URL}/images/facebook.png`} />
    <img src={`${process.env.PUBLIC_URL}/images/google.png`} />
    <img src={`${process.env.PUBLIC_URL}/images/linkedin.png`} />
    </div>
    <text className='jaldi'>or use your email account</text>
    
    <Textfield icon={faEnvelope} type='email' value={email} onChange={handleEmailChange} placeholder='Email'/>
    
    <Textfield icon={faLock} type='password' value={password} onChange={handlePasswordChange} placeholder='Password'/>
    <div>
        <p className={css(styles.forget)} >Forgot password?</p>
    </div>
    
    <Button text='Sign In' onClick={handleSignIn}/>

    </div>

    </div>
    <div className={css(styles.right)}>
    <div className={css(styles.innerRight)}>
    <div className={css(styles.welcomeText)}>
    <h1 className='jaldi-heading'>Welcome Back!</h1>
    </div>
    <div className={css(styles.rightBottom)}>
        <h2 className='jaldi-account'>Don't have an account?</h2>
        
    <Button text='Sign Up' onClick={handleSignUp}/>

    </div>

    </div>

    </div>

    </div>
    </div>
  );
}
const styles=StyleSheet.create({
    bg:{
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg.png)`,
    height:'90vh',
    width:"100%",
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    },
    container:{
        height:'75vh',
        width:"70%",
        backgroundColor:"black",
        display:"flex",
    },
    left:{
        height:'75vh',
        width:"55%",
        backgroundColor:"white",
        
    },
    innerLeft:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:'column',
        marginTop:"50px",
    },
    threeLinks:{
        display:"flex",
        justifyContent:"space-evenly",
        gap:"10px",
        marginBottom:"20px",
    },
    right:{
        height:"75vh",
        width:"45%",
        backgroundColor:"orange",
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/cube.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        justifyContent:"center",
        alignItems:"center",
        

    },
    inputField:{
       padding:"5px 5px ",
       margin:"10px",
       border:"none",
       borderRadius:"none",
       backgroundColor:"#D2B48C",
    },
    TextField:{
        border:"#ccc",
        borderRadius:"6px",
        backgroundColor:"#D2B48C",
        padding:"5px",
        margin:"10px",
    },
   
    
    innerRight:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:'center',
        marginTop:"50px",
    },
    rightBottom:{
        marginTop:"70px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",    
        
    }

});

export default SignInBg;
