import React, { Fragment } from 'react';
import './styles/education.scss';
import { Card, CardContent} from '@material-ui/core';
import { education } from '../data/education.json';

function Education() {

  return(
    <Fragment>
      <div id="education">
        <p className="section-title">Educación</p>
        {education.map( reg =>(
          <Card
            id={`card-ed-${reg.id}`}
            className = "card-main-ed" 
            variant="outlined"
          >
            <CardContent>
              <p className="title"><strong>Academia:</strong> {reg.academia}</p>
              <p className="career"><strong>Profesión:</strong> {reg.career}</p>
              <p className="range">{reg.range}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Fragment>
  )
}

export default Education;