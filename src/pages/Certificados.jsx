import React from 'react';
import '../styles/Certificados.css';
import BasicFrontEnd from '../images/certificados/basic-front-end.png';
import HtmlCss1 from '../images/certificados/html-css-1.png';
import HtmlCss2 from '../images/certificados/html-css-2.png';
import HttpCurso from '../images/certificados/http-curso.png';
import Liderança from '../images/certificados/liderança.png';
import Pentest from '../images/certificados/pentest.png';
import ReactCurso from '../images/certificados/react.png';
import SegurancaRede from '../images/certificados/seguranca-rede.png';
import JavaCertificado from '../images/certificados/javaCertificado.png';

const Certificados = () => {
  return (
    <div className='background-certificados'>
      <div id='certificados-section'>
        <h1 className='certificados-name'>Certificados</h1>
      </div>
      <div
        id='carouselExampleAutoplaying'
        className='carousel slide'
        data-bs-ride='carousel'
      >
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img
              src={BasicFrontEnd}
              className='d-block w-100 img-certificados'
              alt='Certificado de Front-end Básico'
            ></img>
          </div>
          <div className='carousel-item'>
            <img
              src='https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/69606710'
              className='d-block w-100 img-certificados'
              alt='Certificado 2'
            ></img>
          </div>
          <div className='carousel-item'>
            <img
              src='https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/75610904'
              className='d-block w-100 img-certificados'
              alt='Certificado 3'
            ></img>
          </div>
          <div className='carousel-item'>
            <img
              src={HtmlCss1}
              className='d-block w-100 img-certificados'
              alt='Certificado de HTML e CSS 1'
            ></img>
          </div>
          <div className='carousel-item'>
            <img
              src={HtmlCss2}
              className='d-block w-100 img-certificados'
              alt='Certificado de HTML e CSS 2'
            ></img>
          </div>
          <div className='carousel-item'>
            <img
              src={HttpCurso}
              className='d-block w-100 img-certificados'
              alt='Certificado de Curso HTTP'
            ></img>
          </div>
          <div className='carousel-item'>
            <img
              src={Liderança}
              className='d-block w-100 img-certificados'
              alt='Certificado de Liderança'
            ></img>
          </div>
          <div className='carousel-item'>
            <img
              src={Pentest}
              className='d-block w-100 img-certificados'
              alt='Certificado de Pentest'
            ></img>
          </div>
          <div className='carousel-item'>
            <img
              src={ReactCurso}
              className='d-block w-100 img-certificados'
              alt='Certificado de Curso React'
            ></img>
          </div>
          <div className='carousel-item'>
            <img
              src={SegurancaRede}
              className='d-block w-100 img-certificados'
              alt='Certificado de Segurança de Rede'
            ></img>
          </div>
          <div className='carousel-item'>
            <img
              src={JavaCertificado}
              className='d-block w-100 img-certificados'
              alt='Certificado de Java Fundamentos'
            ></img>
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleAutoplaying'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleAutoplaying'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  );
};

export default Certificados;
