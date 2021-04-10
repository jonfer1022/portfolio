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
        <img src="https://raw.githubusercontent.com/jonfer1022/portfolio/main/src/images/me.png" />
      </div>
    </div>
  )
}

export default Home;