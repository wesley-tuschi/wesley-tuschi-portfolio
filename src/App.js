import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import Home from './pages/Home';
import './styles/global.css';
import Info from './pages/Info';
import Habilidades from './pages/Habilidades';
import Portfolio from './pages/Portfolio';
import Contato from './pages/Contato';
import Certificados from './pages/Certificados';
import Footer from './utils/Footer';

function App() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
    <motion.div className="progress-bar" style={{ scaleX }} />
       <AnimatePresence mode='wait'>
          <Home />
        </AnimatePresence>
        <Info />
      <Portfolio />
      <Certificados />
      <Habilidades />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
