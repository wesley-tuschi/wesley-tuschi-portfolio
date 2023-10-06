import React from 'react';
import { ReactComponent as Notebook } from '../assets/notebook.svg';
import '../styles/Footer.css'; 

const Footer = () => {
  return (
    <div className='footer'>
        <Notebook className='img-fluid'/>
      <p>© 2023 Wesley Tuschi</p>
    </div>
  );
};

export default Footer;
