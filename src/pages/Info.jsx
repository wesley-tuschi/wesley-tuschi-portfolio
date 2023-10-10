import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Info.css';
import ProfilePhoto from '../images/Cyberpunk.png';

const Info = () => {
  const [isVisible, setIsVisible] = useState(false);
  const infoRef = useRef(null);

  const floatVariants = {
    hover: {
      y: ['-5px', '5px'],
      transition: {
        y: {
          duration: 0.5,
          yoyo: Infinity,
        },
      },
    },
  };
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
    <div
      ref={infoRef}
      style={{ backgroundColor: isVisible ? 'transparent' : 'black' }}
    >
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
            Sobre mim
          </motion.h1>
          <motion.div
            className='course-details'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className='iam'>
              <motion.img
                src={ProfilePhoto}
                className='profile-photo img-fluid'
                alt='Profile'
                variants={floatVariants}
                whileHover='hover'
              />
            </div>
            Meu nome é <span className='emphasis'>Wesley Tuschi</span>, tenho 23
            anos e resido em Ribeirão Preto-SP.
          </motion.div>
          <motion.div
            className='course-details'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <span className='emphasis'>• Desenvolvimento Web Full Stack</span>
            <br />
            <p className='info-school'>
              Trybe, conclusão em fevereiro de 2024.
            </p>
            <br />
            <p className='info-paragraph'>
              1.500 horas de aula com foco em: Introdução ao desenvolvimento de
              software, front-end, back-end, ciência da computação, engenharia
              de software, metodologias ágeis e habilidades comportamentais.
            </p>
          </motion.div>

          <motion.div
            className='course-details'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <span className='emphasis'>
              • Análise e Desenvolvimento de Sistemas
            </span>
            <br />
            <p className='info-school'>
              Centro Universitário União das Américas Descomplica, conclusão em
              dezembro de 2025.
            </p>
            <br />
            <p className='info-paragraph'>
              2.000 horas de aula com foco em: Desenvolvimento FrontEnd e
              Dinâmico, Experiência do Usuário, Lógica de Programação,
              Estruturas de Dados para Sistemas Inteligentes, Design de
              Software, Modelagem de Bancos de Dados, Arquitetura de
              Computadores, Desenvolvimento Mobile, DevOps e Cloud Computing,
              Segurança Tecnológica e Compliance, Metodologias Ágeis e Testes.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Info;
