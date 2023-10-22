import { Link } from 'react-router-dom';

import { AiFillGithub } from 'react-icons/ai';
import { MdContactPage } from 'react-icons/md';
import style from './Modal.module.css';
import MyPlayer from '../MyPlayer/MyPlayer';

const Modal = ({ handleModal, project }) => {
  return (
    <div className={style['container-modal']}>
      <div className={style.modal}>
        <div className={style.close} onClick={() => handleModal(false)}>
          x
        </div>
        <div className={style.video}>
          <MyPlayer project={project} />
        </div>

        <div className={style.project}>
          <Link to={project.github}>
            <AiFillGithub />
            <p>GitHub</p>
          </Link>
          <Link to={project.url}>
            <MdContactPage />
            <p>Site</p>
          </Link>{' '}
        </div>
      </div>
    </div>
  );
};

export default Modal;
