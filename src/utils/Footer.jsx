import React from 'react';
import { ReactComponent as Notebook } from '../assets/notebookPurple.svg';
import { ReactComponent as Cheese } from '../assets/cheese-svgrepo-com.svg';
import '../styles/Footer.css';

const Footer = () => {
  const handleCheeseClick = () => {
    if (window.OnlineWebFonts_Com) {
      window
        .OnlineWebFonts_Com({
          Id: '.div-rat',
          Data: window.__Animations['492019'],
        })
        .Play();
    }
  };

  return (
    <div className='footer'>
      <div className='notebook-container'>
        <div class='div-rat'></div>
        <Notebook className='img-fluid' />
        <Cheese className='cheese img-fluid' onClick={handleCheeseClick} />
      </div>
      <p>© 2023 Wesley Tuschi</p>
    </div>
  );
};

export default Footer;
