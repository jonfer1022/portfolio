import React, { Fragment } from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About_me from './AboutMe';
import Education from './Education';
import ContactMe from './ContactMe';
import Experience from './Experience';

function App(){
  return(
    <Fragment>
      <NavBar />
      <Home />
      <About_me />
      <Education />
      <Experience />
      <ContactMe />
    </Fragment>
  )
}

export default App;