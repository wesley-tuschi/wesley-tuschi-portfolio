import React from 'react';
import '../styles/Bar.css';

const bar = () => {
  const scrollTo = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
        <nav className='bar container-fluid'>
          <ul className='nav nav-pills'>
            <li className='nav-item'>
              <button className='bar-button' onClick={() => scrollTo('info-section')}>
                Sobre mim
              </button>
            </li>
            <li className='nav-item'>
              <button className='bar-button' onClick={() => scrollTo('portfolio-section')}>
                Portfólio
              </button>
            </li>
            <li className='nav-item'>
              <button className='bar-button' onClick={() => scrollTo('certificados-section')}>
                Certificados
              </button>
            </li>
            <li className='nav-item'>
              <button className='bar-button' onClick={() => scrollTo('habilidades-section')}>
                Skills
              </button>
            </li>
            <li className='nav-item'>
              <button className='bar-button' onClick={() => scrollTo('contato-section')}>
                Contato
              </button>
            </li>
          </ul>
        </nav>
    </div>
  );
};

export default bar;
