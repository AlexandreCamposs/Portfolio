import { Link } from 'react-router-dom';

import Header from './components/Header';
import CardProject from './components/CardProject';

import { AiFillHtml5, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoSass,
  BiLogoTailwindCss,
} from 'react-icons/bi';
import ImageProfile from '/perfil.jpeg';
import Curriculum from '/Curriculum.pdf';
import style from './App.module.css';

import { GlobalStyled } from './GlobalStyled';
import { ThemeProvider } from 'styled-components';

import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

const App = () => {
  const handleGitHub = () => {
    window.location.assign('https://github.com/AlexandreCamposs');
  };
  const handleLinkedin = () => {
    window.location.assign(
      'https://www.linkedin.com/in/alexandre-camposs-496627114/',
    );
  };

  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <div>
        <Header />
        <section>
          <div className={style.about}>
            <div className={style.banner}>
              <h2>Olá, eu sou o </h2>
              <h3>Alexandre </h3>
              <p>Desenvolvedor Front-End</p>
              <div>
                <Link
                  to={Curriculum}
                  download="Curriculum"
                  target="_blank"
                  rel="noreferrer"
                  className="cv"
                >
                  Download CV
                </Link>
              </div>
            </div>
            <div className={style.profile} onClick={handleGitHub}>
              <img src={ImageProfile} alt="image-perfil" />
            </div>
          </div>
          <div className={style['about-perfil']}>
            <h2>Sobre mim</h2>
            <p>
              Desenvolvedor Front-end com experiência em HTML, CSS, JavaScript,
              React, Scss Tailwind,gitHub e consumo de APIs. Formado em Análise
              e Desenvolvimento de Sistemas.
            </p>
          </div>
        </section>
        <section>
          <div className={style['container-skill']}>
            <h2>Habilidades</h2>
            <div className={style.skill}>
              <div className={style['skill-box']}>
                <AiFillHtml5 />
                <span>Html5</span>
              </div>
              <div className={style['skill-box']}>
                <BiLogoCss3 />
                <span>Css3</span>
              </div>
              <div className={style['skill-box']}>
                <BiLogoJavascript />
                <span>JavaScript</span>
              </div>
              <div className={style['skill-box']}>
                <BiLogoReact />
                <span>React</span>
              </div>
              <div className={style['skill-box']}>
                <BiLogoSass />
                <span>Sass</span>
              </div>
              <div className={style['skill-box']}>
                <BiLogoTailwindCss />
                <span>Tailwind</span>
              </div>
              <div className={style['skill-box']}>
                <AiFillGithub />
                <span>GitHub</span>
              </div>
            </div>
          </div>
        </section>
        <section>
          <CardProject />
        </section>
        <section>
          <div className={style['container-contact']}>
            <h2>Contatos</h2>
            <div className={style.contact}>
              <div onClick={handleGitHub}>
                <AiFillGithub />
                <span>GitHub</span>
                <p>@AlexandreCamposs</p>
              </div>
              <div onClick={handleLinkedin}>
                <AiFillLinkedin />
                <span>GitHub</span>
                <p>@AlexandreCamposs</p>
              </div>{' '}
            </div>
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
};

export default App;
