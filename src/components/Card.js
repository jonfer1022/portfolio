import React from 'react';
import './styles/card.scss';

function Card(props) {
  const { _key, title, body, footer} = props
  let even = _key % 2;
  
  return(
    <div
      style={ even !== 0 ? {float: 'left'} : {float: 'right'} }
      className="card-main"
    >
      <div className="header">{title}</div>
      <div className="body">{body}</div>
      <div className="footer">{footer}</div>
    </div>
  )
}

export default Card;