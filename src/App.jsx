import { useState } from 'react';

import CardProject from './components/CardProject';

import { AiFillHtml5, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoSass,
} from 'react-icons/bi';
import style from './App.module.css';
import ImageProfile from '/perfil.jpeg';

function App() {
  const handleGitHub = () => {
    window.location.assign('https://github.com/AlexandreCamposs');
  };
  const handleLinkedin = () => {
    window.location.assign(
      'https://www.linkedin.com/in/alexandre-camposs-496627114/',
    );
  };

  return (
    <div className={style.app}>
      <section>
        <div className={style.about}>
          <div className={style.banner}>
            <h2>Olá, eu sou o </h2>
            <span>Alexandre Campos</span>
            <p>Desenvolvedor Front-End</p>
            <div>
              <button>Download CV</button>
              <button>Entrar em contato</button>
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
            React.js, Styled Components, Sass e consumo de APIs REST. Formado em
            Análise e Desenvolvimento de Sistemas.
          </p>
        </div>
      </section>
      <section>
        <div className={style['container-skill']}>
          <h2>Habilidades</h2>
          <div className={style.skill}>
            <div className={style['skill-box']}>
              <AiFillHtml5 />
              <p>Html5</p>
            </div>
            <div className={style['skill-box']}>
              <BiLogoCss3 />
              <p>Css3</p>
            </div>
            <div className={style['skill-box']}>
              <BiLogoJavascript />
              <p>JavaScript</p>
            </div>
            <div className={style['skill-box']}>
              <BiLogoReact />
              <p>React</p>
            </div>
            <div className={style['skill-box']}>
              <BiLogoSass />
              <p>Sass</p>
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
            <div className={style} onClick={handleGitHub}>
              <AiFillGithub />
              <h4>GitHub</h4>
              <span>@AlexandreCamposs</span>
            </div>
            <div className={style} onClick={handleLinkedin}>
              <AiFillLinkedin />
              <h4>GitHub</h4>
              <span>@AlexandreCamposs</span>
            </div>{' '}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
