import React, { Fragment } from 'react';
import NavBar from './NavBar';
import Home from './Home';
import AboutMe from './AboutMe';
import Education from './Education';
import ContactMe from './ContactMe';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';

function App(){
  return(
    <Fragment>
      <NavBar />
      <Home />
      <AboutMe />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <ContactMe />
    </Fragment>
  )
}

export default App;