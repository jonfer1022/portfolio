import React from 'react';
import './styles/skills.scss';
import img from "../images/html_logo.png";
import skills from '../data/skills.json'

function Skills() {

  console.log(skills);

  return(
    <div id="skills">
      <p className="section-title">Habilidades</p>
      <div className="card-skill">
        <div className="title">
          FRONTEND
        </div>
          <img className="skill-img" src={img}/>
          <img className="skill-img" src={img}/>
          <img className="skill-img" src={img}/>
      </div>
    </div>
  )
}

export default Skills;