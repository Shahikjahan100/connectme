import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

function Textfield({ icon, type, placeholder, value, onChange }) {
  return (
    <div className={css(styles.textField)}>
      <FontAwesomeIcon icon={icon} className={css(styles.icon)} />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={css(styles.inputField)}
      />
    </div>
  );
}

Textfield.propTypes = {
  icon: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  textField: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '6px',
    backgroundColor: '#D2B48C',
    padding: '10px',
    margin: '10px',
  },

  inputField: {
    flex: 1,
    padding: '5px',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#D2B48C',
    color: '#fff',
    fontSize: '16px',
  }
});

export default Textfield;
