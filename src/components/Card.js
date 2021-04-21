import React, { useEffect } from 'react';
import './styles/card.scss';

function Card(props) {
  const { _key, title, body, footer} = props
  let even = _key % 2;

  useEffect( () => {
    let card_ex = document.getElementById(`card-ex-${_key}`);
    if(card_ex) card_ex.style.transform = `${ even === 0 ? "translateX(-200px)": "translateX(200px)"}`;
  })

  return(
    <div
      id={`card-ex-${_key}`}
      style={ even === 0 ? { marginLeft: '15%' } : {} }
      className="card-main"
    >
      <div className="header">{title}</div>
      <div className="body">{body}</div>
      <div className="footer">{footer}</div>
    </div>
  )
}

export default Card;