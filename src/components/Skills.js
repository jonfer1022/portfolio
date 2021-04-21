import React from 'react';
import './styles/skills.scss';
import img from "../images/html_logo.png";
import { skills } from '../data/skills.json'

function Skills() {

  let skill_key = Object.keys(skills);
  let skill_value = Object.values(skills);

  return(
    <div id="skills">
      <p className="section-title">Habilidades</p>
      {skill_key.map( (reg,i) => (
        <div id={`${reg}`} className="card-skill">
          <div className="title">{reg}</div>
            {skill_value[i].map( value => (
              <div className="skill-img-div">
                <img className="skill-img" src={value.src||img} title={value.id}/>
                <div className="skill-name">{value.id}</div>
              </div>
            ))}
        </div>
      ))}
    </div>
  )
}

export default Skills;