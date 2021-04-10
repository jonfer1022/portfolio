import React from 'react';
import './styles/experience.scss';
import Card from './Card';

function Experience() {
  return(
    <div id="experience">
      <Card
        _key = {1}
        title = "SOPHOS SOLUTIONS SAS"
        body = {
          <p>Empresa de tecnología dedicada al diseño y sotfware de aplicación web</p>
        }
        footer = "Febrero del 2020 - al presente. Bogotá D.C"
      />
      <Card
        _key = {2}
        title = "INFO DESING COLOMBIA"
        body = {
          <div>
            <p>Ingeniero de aplicaciones</p>
            <p>Empresa de tecnología enfocada en el manejo de información en la automatización de proyectos industriales como el sector petrolero, aceite y gas.</p>
          </div>
        }
        footer = "Febrero del 2020 - al presente. Bogotá D.C"
      />
      <Card
        _key = {3}
        title = "SOPHOS SOLUTIONS SAS"
        body = {
          <p>Empresa de tecnología dedicada al diseño y sotfware de aplicación web</p>
        }
        footer = "Febrero del 2020 - al presente. Bogotá D.C"
      />
    </div>
  )
}

export default Experience;