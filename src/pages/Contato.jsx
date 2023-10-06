import React from 'react';
import '../styles/Contato.css';
import { ReactComponent as LinkedInIcon } from '../assets/linkedin-round-svgrepo-com.svg';
import { ReactComponent as GitHubIcon } from '../assets/github-142-svgrepo-com.svg';
import { ReactComponent as WhatsAppIcon } from '../assets/whatsapp-128-svgrepo-com.svg';
import { ReactComponent as EmailIcon } from '../assets/email-svgrepo-com.svg';

const Contato = () => {
  return (
    <div className='background-contato'>
      <div id='contato-section'>
        <h1 className='contato-name'>Contato</h1>
        <div className='contact-methods'>
          <p className='contato-text'>
            Entre em contato comigo através dos seguintes métodos:
          </p>
          <a href='mailto:levituschi@email.com' className='contact-link'>
            <EmailIcon className='contact-icon img-fluid' /> E-mail
          </a>
          <a
            href='https://www.linkedin.com/in/wesleytuschi/'
            target='_blank'
            rel='noreferrer'
            className='contact-link'
          >
            <LinkedInIcon className='contact-icon img-fluid' /> LinkedIn
          </a>
          <a
            href='https://github.com/wesley-tuschi'
            target='_blank'
            rel='noreferrer'
            className='contact-link'
          >
            <GitHubIcon className='contact-icon img-fluid' /> GitHub
          </a>
          <a
            href='https://wa.me/5516997130872'
            target='_blank'
            rel='noreferrer'
            className='contact-link'
          >
            <WhatsAppIcon className='contact-icon img-fluid' /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contato;
