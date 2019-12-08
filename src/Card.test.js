import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card'

it('renders without crashing', () => {
    const div = document.createElement('div');
    const props = {cards: { id: 'a', title: 'First card', content: 'lorem ipsum' }};
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });