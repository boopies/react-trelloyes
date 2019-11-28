import React from 'react';
import Card from './Card';
import './List.css';
import store from './store'


function List() {
  const numbOfCards = store.allCards.map((list) =>
  <Card key={list.id} />
      return (
        <section className="List">
            <header className="List-header">
            <h2>list</h2>      
            </header>
            <div className='List-cards'>
            <Card />
            <button type="button" className="List-add-button"> + Add Random Card </button>
            </div>
        </section>
    );
  }

  export default List;