import React from 'react';
import './Card.css';

function Card() {
return (
      <div className='Card'>
        <button type="button">delete</button>
        <h3>card title</h3>
        <p>card contents</p>
      </div>
    );
  }

  export default Card;