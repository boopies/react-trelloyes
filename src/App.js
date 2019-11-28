import React from 'react';
import List from './List';
import './App.css';
import store from './store'

function App(store){
  const numbOfCards = store.lists.map((list) =>
  <List key={list.id} />

    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
        {numbOfCards}
        </div>
      </main>
    )
  };

export default App;