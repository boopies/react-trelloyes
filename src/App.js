//as this is being rendered 
import React from 'react';
import List from './List';
import './App.css';
import STORE from './STORE'


const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

class App extends React.Component{
  state = {
    store: STORE
  }

  handleAddCard = (listId) => {
    console.log ('New card Added')
    let newCard = newRandomCard()

//map out the lists to add in the card for the lists
    let newLists = this.state.store.lists.map(list => {
      if (list.id === listId){
        return{
          ...list,
          cardIds:[...list.cardIds, newCard.id]
        };
      }
      return list;
    })    

    this.setState({
      store: {
        lists: newLists,
        allCards:{
          ...this.state.store.allCards,
          [newCard.id]: newCard
      }}})
  }

  handleDeleteCard = (cardId) => {
    console.log ('Card Deleted')
        const newLists = this.state.store.lists.map(list =>({
      ...list,
      cardIds: this.state.store.lists.cardIds.filter(id => id !== cardId)
    }))

    let refreshLists = omit(this.state.store.allCards, cardId)

    this.setState({
      store: {
        lists: newLists,
        allCards:{ refreshLists
      }}})
  }

  render(){ 
    //create a constant with the object
    //.map() out the list item you need to make multiple of
    //the cards=(makes a new props)
    const {store} = this.state;
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
          <div className='App-list'>
          {store.lists.map(list => (
            <List key={list.id} 
                  id={list.id}
                  header={list.header} 
                  cards={list.cardIds.map(id => store.allCards[id])}
                  onDeleteCard={this.handleDeleteCard}
                  onAddCard={this.handleAddCard}
                  />
          ))}
          </div>
  </main>  )
  }
}

export default App;