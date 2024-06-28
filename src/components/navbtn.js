import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function NavBtn({ text, onClick }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate('/signup');
    }
  };

  return (
    <div>
      <button onClick={handleClick} className={css(styles.btn)}>{text}</button>
    </div>
  );
}

NavBtn.defaultProps = {
  text: 'Sign Up',
  onClick: null,
};

NavBtn.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#C9A782',
    height: '30px',
    width: '80px',
    border: 'none',
    color: 'white',
    borderRadius: '10px',
    cursor: 'pointer',
  },
});

export default NavBtn;
