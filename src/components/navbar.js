import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import NavBtn from './navbtn';
function Navbar({btnText,onClick}) {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.threeSections)}>
        <div className={css(styles.links)}>
          <img src={`${process.env.PUBLIC_URL}/images/instagram.png`} alt="Instagram"/>
          <img src={`${process.env.PUBLIC_URL}/images/twitter.png`} alt="twitter"/>
          <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo"/>


        </div>
        <div className={css(styles.midText)}>
        <text className='island-moments-regular'>Connect Me</text>
        <text className='inria-sans-regular'>Connect with ease</text>
          
        </div>
        <div >
        <NavBtn text={btnText} onClick={onClick}/>
          
        </div>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "10vh",
    backgroundColor: "white",
  },
  threeSections: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    padding: "0 20px"
  },
  links: {
    marginLeft:'20px',
    display:'flex',
    flexDirection:'row',
    gap:'40px',

  },
  midText: {
    
    fontSize:'20px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },

});

export default Navbar;
