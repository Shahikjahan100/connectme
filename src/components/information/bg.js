import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function BG() {
  return (
    <div className={css(styles.bg)}>
    <div className={css(styles.leftContent)}>
    <div className={css(styles.card)}>
    <div className={css(styles.btmg)}>
        <text className='montserrat-regular '>BTMG Group</text>
    </div>
    
        <h2 className='montserrat-bold'>Get connect <br/>easily</h2>
        <p className='montserrat-regular'>Now you can conect and share your information with just one touch, update information whenever you want.</p>
        <button className={css(styles.btn)}>Get started now</button>

    

    </div>

    </div>
    <div className={css(styles.rightContent)}>
    <text className='poppins-extrabold'>CONNECTME</text>
    <div>
        <text className='poppins-normal'>Connect with ease</text>
    </div>
    <div>
    <p className='poppins'>
    Easily create, share and manage your digital business<br/>cards with this platform. You can showcase your<br/>professional brand and connect in a seamless way. Just<br/>scan the OR code and your information will be shared
    </p>
    </div>
    <div className={css(styles.threeLinks)}>
    <div className={css(styles.imageText)}>
    
    <img  src={`${process.env.PUBLIC_URL}/images/first.png`} alt="first pic"/>
    
    <text className={css(styles.txt)}>www.btmgusa.com/connectme</text>
    

    </div>
    <div className={css(styles.imageText)}>
    
    <img  src={`${process.env.PUBLIC_URL}/images/second.png`} alt="second pic"/>
    
    <text className={css(styles.txt)}>www.btmgusa.com/connectme</text>
    

    </div>
    <div className={css(styles.imageText)}>
    
    <img  src={`${process.env.PUBLIC_URL}/images/third.png`} alt="third pic"/>
    
    <text className={css(styles.txt)}>www.btmgusa.com/connectme</text>
    

    </div>

    </div>

    </div>
      
    </div>
  );
}

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: '90vh', 
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
    backgroundColor:'#C9A782',
    display:'flex',
    flex:'1',
    justifyContent:'space-around',
    alignItems:'center',
    flexDirection:'row',
    
    
  },
  leftContent:{
    flex:1,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    marginRight:'180px'


  },
  card:{
    width: '300px', 
    height: '400px',
    padding: '20px',
    backgroundColor:'rgba(0,0,0,0.2)',
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)',
    color: '#333',
    textAlign: 'left',
    borderRadius:'15px',

  },
  btn:{
    marginTop:'10px',
    backgroundColor:'#B88E2F',
    color:'white',
    borderRadius:'20px',
    padding:'10px 20px',
    border:'none',
    cursor:'pointer'
  },
  rightContent:{
    marginRight:'80px',
    marginLeft:'20px',
    display:"flex",
    alignItems:'left',
    justifyContent:'center',
    flexDirection:'column',
    

  },
  threeLinks:{

  },
  imageText:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    marginTop:'15px',
    padding:'5px',
    

  },
  txt:{
    marginLeft:"10px"
  }

  

});

export default BG;
