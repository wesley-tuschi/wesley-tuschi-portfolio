import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Info.css';

const Info = () => {
  const [isVisible, setIsVisible] = useState(false);
  const infoRef = useRef(null);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, duration: 1 },
    },
    exit: {
      x: '-100vw',
      transition: { ease: 'easeInOut' },
    },
  };

  useEffect(() => {
    const currentInfoRef = infoRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    if (currentInfoRef) {
      observer.observe(currentInfoRef);
    }

    return () => {
      if (currentInfoRef) {
        observer.unobserve(currentInfoRef);
      }
    };
  }, []);

  return (
    <div ref={infoRef} style={{ backgroundColor: isVisible ? 'transparent' : 'black' }}>
      <motion.div
        className='background-info'
        variants={containerVariants}
        initial='hidden'
        animate={isVisible ? 'visible' : 'hidden'}
        exit='exit'
      >
        <div id='info-section'>
          <motion.h1
            className='my-info'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Conheça mais sobre mim
          </motion.h1>
          <motion.p
            className='my-info-2'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Meu nome é <span className='emphasis'>Wesley Tuschi</span>, tenho 23
            anos e resido em Ribeirão Preto-SP. Atualmente, estou cursando{' '}
            <span className='emphasis'>
              Análise e Desenvolvimento de Sistemas
            </span>{' '}
            pelo Centro Universitário União das Américas Descomplica e também me
            aperfeiçoando como{' '}
            <span className='emphasis'>Desenvolvedor Web Full Stack</span> na
            Trybe. Busco constantemente expandir meus conhecimentos e, sempre
            que possível, realizo cursos extracurriculares na Alura, além de
            participar de outros bootcamps.
          </motion.p>
          <motion.p
            className='my-info-2'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            Sou fascinado por tecnologia e constantemente busco enfrentar novos
            desafios. Estou sempre me aprofundando em diversos aspectos da
            programação, abrangendo tanto o{' '}
            <span className='emphasis'>front-end</span> quanto o{' '}
            <span className='emphasis'>back-end</span>. Além disso, busco
            conhecimento em áreas complementares, como{' '}
            <span className='emphasis'>DevOps</span> e{' '}
            <span className='emphasis'>Data Science</span>, para ampliar minha
            experiência.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default Info;
