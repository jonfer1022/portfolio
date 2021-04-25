import React from 'react';
import './styles/projects.scss';
import onlineShop from '../images/samplhes.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowAltCircleRight, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

function Projects() {

  return(
    <div id="projects">
      <p className="section-title">Proyectos</p>
      <div className="projects-main" id="samplhes">
        <div className="projects-img">
          <img src={onlineShop} />
        </div>
        <div className="projects-content">
          <p>El objetivo principal es crear una tienda online de ropa simulando las funcionalidades que poseen este tipo de páginas web.</p>
          <p>Stack usado:</p>
          <ul>
            <li>ReactJs</li>
            <li>Sass</li>
            <li>ReduxJs</li>
            <li>Express</li>
            <li>MySql</li> 
          </ul>
          <div>
            <FontAwesomeIcon icon={faGithub} size="2x" className="icon-projects"/>
            <a href="https://github.com/jonfer1022/first-online-shop-backend" target="_blank">Código Back-end</a>
          </div>
          <div>
            <FontAwesomeIcon icon={faGithub} size="2x" className="icon-projects"/>
            <a href="https://github.com/jonfer1022/First-Online-Shop" target="_blank">Código Front-end</a>
          </div>
          <div>
            <FontAwesomeIcon icon={faArrowAltCircleRight} size="2x" className="icon-projects"/>
            <a href="https://jonfer1022.github.io/First-Online-Shop" target="_blank">Sitio web</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;