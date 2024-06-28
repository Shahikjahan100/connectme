import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

function Button({ text, onClick }) {
  return (
    <button onClick={onClick} className={css(styles.btn)}>{text}</button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  btn: {
    marginTop: '20px',
    borderRadius: '8px',
    padding: '10px 50px',
    backgroundColor: '#D2B48C',
    border: 'none',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '20px',
    cursor: 'pointer',
    letterSpacing: '1px'
  }
});

export default Button;
