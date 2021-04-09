import React, { Fragment } from 'react';
import NavBar from './NavBar';
import { Image } from 'react-bootstrap';

function App(){
  return(
    <Fragment>
      <NavBar />
      <Image src='../images/me.jpeg'/>
      {/* <img src='me.jpeg'></img> */}
    </Fragment>
  )
}

export default App;