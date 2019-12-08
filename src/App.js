//as this is being rendered 
import React from 'react';
import List from './List';
import './App.css';

//extend the App to add in a static defaultProps
class App extends React.Component{
  //static defaultProps has the same structure as the STORE but you don't need to list 
  //everything out again
  static defaultProps = {
    store: { 
      lists: [],
      allCards: {},
    }
  };

  render(){ 
    //create a constant with the object
    //.map() out the list item you need to make multiple of
    //the cards=(makes a new props)
    const {store} = this.props;
    return (
    <main className='App'>
    <header className='App-header'>
      <h1>Trelloyes!</h1>
    </header>
    <div className='App-list'>
    {store.lists.map(list => (
      <List key={list.id} header={list.header} cards={list.cardIds.map(id => store.allCards[id])}/>
    ))}
    </div>
  </main>  )
  }
}

export default App;