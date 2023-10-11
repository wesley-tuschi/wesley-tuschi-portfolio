import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import '../styles/Habilidades.css';

const Habilidades = () => {
  const skillsArray = [
    'JavaScript',
    'Java',
    'React.Js',
    'Angular',
    'Redux',
    'HTML',
    'CSS',
    'Node.Js',
    'Express.Js',
    'MongoDB',
    'MySQL',
    'Git',
    'Scrum',
    'Jest',
    'Bootstrap',
    'Linux',
    'Pentest',
    'Docker',
    'Tailwindcss',
    'PowerBI',
  ];

  return (
    <div className='background-habilidades'>
      <div id='habilidades-section'>
        <div className='skills-info'>
          <h1 className='skills-title'>Tech Arsenal</h1>
          <p className='skills-paragraph'>
            Estas são algumas das linguagens e tecnologias utilizadas para
            desenvolvimento front-end, back-end e gerenciamento de bancos de
            dados.
          </p>
        </div>
        <div className='skills-column'>
          <InView triggerOnce>
            {({ inView, ref }) => (
              <ul className='skills-list' ref={ref}>
                <AnimatePresence>
                  {inView &&
                    skillsArray.map((skill, index) => (
                      <motion.li
                        key={skill}
                        className='skills-tec'
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        {skill}
                      </motion.li>
                    ))}
                </AnimatePresence>
              </ul>
            )}
          </InView>
        </div>
      </div>
    </div>
  );
};

export default Habilidades;
