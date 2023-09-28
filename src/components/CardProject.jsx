import { useState } from 'react';

import Modal from './Modal';
import { dataProjects as projectsData } from '../data/data';

import style from './CardProject.module.css';

const CardProject = () => {
  const [data, setData] = useState(projectsData);
  const [modal, setModal] = useState(false);
  const [project, setProject] = useState();

  const handleClick = (value, project) => {
    setModal(value);
    setProject(project);
  };
  console.log(project);
  return (
    <div className={style.container}>
      <h2>Projetos</h2>
      <div className={style['container-project']}>
        {data.map((project, index) => (
          <div
            className={style.project}
            key={index}
            onClick={() => handleClick(true, project)}
          >
            <h4> {project.title}</h4>
            <img src={project.img} alt="" />
            <p>{project.tools}</p>
          </div>
        ))}
        {modal && <Modal handleModal={handleClick} project={project} />}
      </div>
    </div>
  );
};

export default CardProject;
