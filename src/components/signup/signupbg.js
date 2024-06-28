


import React, { useState } from 'react';
import { StyleSheet,css } from 'aphrodite';
import { faEnvelope, faLock,faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../signin/button';
import Textfield from '../signin/textfield';
import { useNavigate } from 'react-router-dom';
function SignUpBg() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [name,setName]=useState('');
    const navigate=useNavigate();
    







const handleEmailChange=(event)=>{
    setEmail(event.target.value);
}

const handlePasswordChange=(event)=>{
    setPassword(event.target.value);
}
const handleNameChange=(event)=>{
    setPassword(event.target.value);
}


const handleSignIn=()=>{
navigate('/signin')
}

const handleSignUp=()=>{
    navigate('/signin')
    }
  return (
    <div className={css(styles.bg)}>
    <div className={css(styles.container)}>
    <div className={css(styles.left)}>
    <div className={css(styles.innerLeft)}>
    <div className={css(styles.welcomeText)}>
    <h1 className='jaldi-heading'>Start New Journey!</h1>
    </div>
    <div className={css(styles.rightBottom)}>
        <h2 className='jaldi-account'>Already have an account?</h2>
        
    <Button text='Sign In' onClick={handleSignUp}/>

    </div>

    </div>

    </div>
    <div className={css(styles.right)}>
    <div className={css(styles.innerRight)}>
    <text className='jaldi-regular'>Sign in with connect me</text>
    <div className={css(styles.threeLinks)}>
    <img src={`${process.env.PUBLIC_URL}/images/facebook.png`} />
    <img src={`${process.env.PUBLIC_URL}/images/google.png`} />
    <img src={`${process.env.PUBLIC_URL}/images/linkedin.png`} />
    </div>
    <text className='jaldi'>or use your email account</text>
    <Textfield icon={faUser} type='text' value={name} onChange={handleNameChange} placeholder='Name'/>

    
    <Textfield icon={faEnvelope} type='email' value={email} onChange={handleEmailChange} placeholder='Email'/>
    
    <Textfield icon={faLock} type='password' value={password} onChange={handlePasswordChange} placeholder='Password'/>
    <div>
        <p className={css(styles.forget)} >Forgot password?</p>
    </div>
    
    <Button text='Sign Up' onClick={handleSignIn}/>

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

    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
    },
    container:{
        height:'80vh',
        width:"70%",
        backgroundColor:"black",
        display:"flex",
    },
    left:{
        height:'80vh',
        width:"45%",
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/cube.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        
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
        height:"80vh",
        width:"55%",
        backgroundColor:"white",
       
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
        
    },
    forget:{
        cursor:"pointer"
    }

});

export default SignUpBg;
