import React from 'react';
import '../styles/SwitchTheme.css';

const SwitchTheme = ({ onClick }) => {
  return (
    <div className='switch-theme'>
      <label className='switch' onClick={e => e.stopPropagation()}>
        <input type='checkbox' className='cb' onClick={onClick} />
        <span className='toggle'>
          <span className='left'>off</span>
          <span className='right'>on</span>
        </span>
      </label>
    </div>
  );
};

export default SwitchTheme;
