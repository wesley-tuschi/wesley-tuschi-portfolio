import React, { useEffect, useState } from 'react';
import '../styles/ButtonToTop.css';

const ButtonToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
      return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
  
    return (
      <div 
        id="button" 
        className={isVisible ? 'show' : ''} 
        onClick={scrollToTop}
      >
      </div>
    );
  };

export default ButtonToTop;
