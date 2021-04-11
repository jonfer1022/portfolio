import React from 'react';
import './styles/experience.scss';
import Card from './Card';

function Experience() {
  return(
    <div id="experience">
      <p className="section-title">Experiencia</p>
      <Card
        _key = {1}
        title = "SOPHOS SOLUTIONS SAS"
        body = {
          <div>
            <p>Empresa multinacional Colombiana de tecnología que ofrece servicios de Consultoría, Implementación de Core Bancario, Fábrica de Pruebas y Fábrica de Software principalmente para compañías del sector financiero y bursátil.</p>
            <p>Rol: Software Developer [FullStack Developer].</p>
            <p>Funciones:</p>
            <ul>
              <li>
                Desarrollo de modulos para la plataforma administrativa del proyecto A2censo perteneciente a la bolsa de valores de Colombia (BVC). Para ello se usó como
                lenguaje de programación JavaScript, donde en la interfaz gráfica se utilizó el framework React.js conjunto con el manejo de estados Redux.js. Para la capa del
                servidor se usó Node.js y cómo framework se utilizó Express.js y por otro lado, se manejó el motor de base de datos DB2 de ibm para el manejo y almacenamiento
                de los datos. Como control de versiones se utilizó Git y se alojó los ambientes en el servicio de AWS code commit, donde además utilice otros servicios de AWS
                para el desarrollo backend del proyecto.
              </li>
              <li>Maquetación en balsamiq de modulos para la administración del proyecto crediticio Aval.</li>
              <li>Desarrollo básico de interfaces con el framework Angular.</li>
            </ul>
          </div>          
        }
        footer = "Febrero del 2020 - actualmente continuo allí. Bogotá D.C"
      />
      <Card
        _key = {2}
        title = "INFO DESING COLOMBIA"
        body = {
          <div>
            <p>Empresa de tecnología enfocada en el manejo de información en la automatización de proyectos industriales como el sector petrolero, aceite y gas.</p>
            <p>Rol: Application Engineering</p>
            <p>Funciones:</p>
            <ul>
              <li>Programación y diseños de interfaces hombre-maquina (HMI), desarrollados en .NET. </li>
              <li>Migración de gráficos FoxBoro a tecnología Wonderware Intouch y, manejo y almacenamiento de la información en Base de datos sql.</li>
              <li>Pruebas FAT y SAT en los proyectos realizados. Tecnologías / Lenguajes: Wonderware Intouch, FoxBoro, .Net C#.</li>
            </ul>
          </div>
        }
        footer = "Abril del 2019 - Diciembre del 2019. Bogotá D.C"
      />
      <Card
        _key = {3}
        title = "UNIVERSIDAD DE LOS ÁNDES"
        body = {
          <div>
            <p>Universidad privada Colombiana de educación superior.</p>
            <p>Rol: Aux. Técnico en instrumentación</p>
            <p>Funciones:</p>
            <ul>
              <li>Proyectos sencillos realizados en el lenguaje de programación visual Labview.</li>
              <li>Instrumentación de proyectos en el laboratorio de ingenería civil.</li>
            </ul>
          </div>
        }
        footer = "Marzo del 2016 - Septiembre del 2016. Bogotá D.C"
      />
    </div>
  )
}

export default Experience;