import React from 'react';
import '../styles/SwitchTheme.css';

const SwitchTheme = () => {
  return (
    <div className='switch-theme'>
      <label class='switch'>
        <input type='checkbox' class='cb' />
        <span class='toggle'>
          <span class='left'>off</span>
          <span class='right'>on</span>
        </span>
      </label>
    </div>
  );
};

export default SwitchTheme;
