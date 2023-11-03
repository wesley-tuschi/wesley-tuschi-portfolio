import React from 'react';
import '../styles/Portfolio.css';
import RecipesApp from '../images/logoRecipes.png';
import TriviaTime from '../images/triviaTime.jpg';
import TrybeTunes from '../images/trybeTunes.png';
import TAD from '../images/TAD.png';
import { ReactComponent as Web } from '../assets/web-svgrepo-com.svg';
import { ReactComponent as GitHub } from '../assets/github-142-svgrepo-com.svg';

const Portfolio = () => {
  return (
    <div className='background-portfolio'>
      <h1 id='portfolio-section' className='portfolio-name'>
        Projetos Selecionados
      </h1>
      <div className='portfolio-section'>
        <div className='card-section'>
          <div className='card'>
            <img
              src={RecipesApp}
              className='card-img-top img-fluid'
              alt='RecipesApp'
            />
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
          </div>
          <div className='card'>
            <img
              src={TriviaTime}
              className='card-img-top img-fluid'
              alt='Trivia Time'
            />
            <div className='card-body'>
              <h5 className='card-title'>
                <b>Trivia</b>
              </h5>
              <p className='card-text'>
                O objetivo do aplicativo é treinar o conhecimento com o jogo
                Trivia.
              </p>
              <div className='project-links'>
                <a
                  href='https://project-trivia-react.vercel.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Web className='web-logo img-fluid' />
                </a>
                <a
                  href='https://github.com/wesley-tuschi/project-trivia-react'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <GitHub className='github-logo img-fluid' />
                </a>
              </div>
            </div>
          </div>
          <div className='card'>
            <img
              src={TrybeTunes}
              className='card-img-top img-fluid'
              alt='Trybe Tunes'
            />
            <div className='card-body'>
              <h5 className='card-title'>
                <b>Trybe Tunes</b>
              </h5>
              <p className='card-text'>
                O objetivo do aplicativo é simular uma chamada para a API do
                Spotify e retornar os dados do artista e album pesquisado.
              </p>
              <div className='project-links'>
                <a
                  href='https://project-trybetunes-sigma.vercel.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Web className='web-logo img-fluid' />
                </a>
                <a
                  href='https://github.com/wesley-tuschi/project-trybetunes'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <GitHub className='github-logo img-fluid' />
                </a>
              </div>
            </div>
          </div>
          <div className='card'>
            <img
              src={TAD}
              className='card-img-top img-fluid'
              alt='Trivia Time'
            />
            <div className='card-body'>
              <h5 className='card-title'>
                <b>Trybers And Dragons (Back-End)</b>
              </h5>
              <p className='card-text'>
                O objetivo do projeto foi implementar com TypeScript seguindo os
                principios da arquitetura SOLID e da Programação Orientada a
                Objetos (POO).
              </p>
              <div className='project-links justify-content-center'>
                <a
                  href='https://github.com/wesley-tuschi/project-trybers-and-dragons'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <GitHub className='github-logo img-fluid' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
