import React, { Component } from 'react';
import './App.css';
import ItemInput from './ItemInput';
import ClearList from './ClearList';
import ShoppingList from './ShoppingList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.onAddItem = this.onAddItem.bind(this);
  }
  onAddItem(name, quantity) {
    let item = name;
    if (quantity !== '') {
      item = item + `(${quantity})`;
    }
    this.setState((prevState) => ({items: prevState.items.concat(item)}));
    //items: [...this.state.items, item]});
  }
  render() {
    return (
     <>
       <ItemInput onAddItem={this.onAddItem}/>
       <ClearList/>
       <ShoppingList items={this.state.items}/>
       </>
    );
  }
}

export default App;
