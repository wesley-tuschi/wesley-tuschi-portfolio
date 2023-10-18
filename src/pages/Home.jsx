import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import { ReactComponent as Circle } from '../images/SunCircle.svg';
import { ReactComponent as LightCircle } from '../images/lightCircle.svg';
// import SwitchTheme from '../utils/SwitchTheme';
import '../styles/Home.css';
import Bar from '../utils/Bar';

const Home = () => {
  const [index, setIndex] = useState(0);
  const [subText, setSubText] = useState('');
  const [reverse, setReverse] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(false);

  useEffect(() => {
    const words = ['Desenvolvedor.', 'Tester.', 'Red-Team.'];
    const typingSpeeds = [200, 200, 200];
    const currentSpeed = reverse
      ? typingSpeeds[index] / 2
      : typingSpeeds[index];

    const timer = setTimeout(() => {
      if (!reverse && subText !== words[index]) {
        setSubText((prev) => words[index].substring(0, prev.length + 1));
      } else {
        setReverse(true);
      }

      if (reverse && subText !== '') {
        setSubText((prev) => words[index].substring(0, prev.length - 1));
      } else if (reverse && subText === '') {
        setReverse(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, currentSpeed);

    return () => clearTimeout(timer);
  }, [subText, index, reverse]);

  const toggleTheme = () => { // Adicionado
    console.log("toggleTheme chamada"); // Novo log para diagnóstico
  setIsLightTheme(!isLightTheme);
  console.log("Tema atual:", !isLightTheme ? "Claro" : "Escuro");
};

  return (
    <div className={`home background-gradient vh-100`}>
        {/* <button className='theme-active'>
        <SwitchTheme onClick={toggleTheme} />
        </button> */}
      <motion.div
        className='home-content'
        initial={{ y: '-100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '-100%', opacity: 0 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 20,
        }}
        >
        <div className='home-text'>
          <h1 className='my-name'>
            Wesley
            <br />
          </h1>
          <div className='home-text2'>
            <span className='i-am'>eu sou</span>
            <br />
            <span className='my-words'>{subText}</span>
            <span className='blinking-cursor'></span>
          </div>
        </div>
        <div className='circle'>
        <LightCircle className='img-fluid'/>
        </div>
        <Bar />
      </motion.div>
    </div>
  );
};

export default Home;
