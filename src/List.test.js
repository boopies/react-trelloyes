import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';

it('renders without crashing', () => {
  const div = document.createElement('div'); 
  //This is the props that the 
  const prop = {
    lists: [   {
      id: '5',
      header: 'fifth list',
      cardIds: [ 'l', 'm', 'h', 'a' ],
    },],
    allCards: {
      'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
      'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
      'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
      'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
    },
  }
  {prop.lists.map(list => (
    ReactDOM.render(<List key={list.id} header={list.header} cards={list.cardIds.map(id => prop.allCards[id])}/>,  div)
  ))}
    ReactDOM.unmountComponentAtNode(div);
  });