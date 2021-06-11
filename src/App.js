import React from 'react';
import './App.css';
import AddItem from './AddItem.js';
import ItemsList from './ItemsList.js';
import Header from './Header.js';
import DeleteItem from './DeleteItem.js';

class App extends React.Component {
  state = {
    value: '',
    items: [],
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addItem = (event, article) => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, article],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
      
		<Header />
      
        <h2>Shopping List</h2>

		<AddItem addItem={this.addItem}  />

		<DeleteItem deleteLastItem={this.deleteLastItem} noItemsFound={this.noItemsFound} />

		<ItemsList items={this.state.items} />

      </div>
    );
  }
}

export default App;
