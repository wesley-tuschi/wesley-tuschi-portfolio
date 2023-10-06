import React, { useEffect, useRef, useState } from 'react';
import '../styles/Portfolio.css';
import { motion } from 'framer-motion';
import RecipesApp from '../images/logoRecipes.png';
import { ReactComponent as Web } from '../assets/web-svgrepo-com.svg';
import { ReactComponent as GitHub } from '../assets/github-142-svgrepo-com.svg';

const Portfólio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  const cardVariants = {
    hidden: {
      x: '-100vw',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 60 },
    },
  };

  useEffect(() => {
    const currentCardRef = cardRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    if (currentCardRef) {
      observer.observe(currentCardRef);
    }

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, []);

  return (
    <div className='background-portfolio'>
      <div id='portfolio-section'>
        <h1 className='portfolio-name'>Criações Selecionadas</h1>
      </div>
      <div ref={cardRef}>
        <motion.div
          className='card'
          variants={cardVariants}
          initial='hidden'
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <img src={RecipesApp} className='card-img-top' alt='RecipesApp' />
          <div className='card-body'>
            <h5 className='card-title'>
              <b>RecipesApp</b>
            </h5>
            <p className='card-text'>
              O objetivo do aplicativo é auxiliar todos aqueles que amam
              cozinhar, mas às vezes ficam perdidos sobre como preparar seus
              pratos favoritos.
            </p>
            <div className='project-links'>
              <a
                href='https://recipes-app-two-silk.vercel.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Web className='web-logo img-fluid' />
              </a>
              <a
                href='https://github.com/wesley-tuschi/recipes-app'
                target='_blank'
                rel='noopener noreferrer'
              >
                <GitHub className='github-logo img-fluid' />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfólio;
