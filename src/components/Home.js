import React from 'react';
import './styles/home.scss';

function Home() {
  return(
    <div id="home">
      <div className="presentation-div">
        <h1 className="presentation-text">
          !HOLA!<br/>
          Soy Jonathan Amaya.<br/>
          Software Developer
        </h1>
      </div>
      <div className="presentation-img">
        <img src="https://cdn0.iconfinder.com/data/icons/team-and-management-glyph/160/coding-team-512.png" />
      </div>
    </div>
  )
}

export default Home;