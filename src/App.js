import React from 'react';
import './App.css';
import SearchBar from './SearchBar.js';
import ItemsList from './ItemsList.js';
import Header from './Header.js';

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

		<SearchBar addItem={this.addItem}  />

        <button onClick={this.deleteLastItem} disabled={this.noItemsFound()}>
          Delete Last Item
        </button>

        <p className="items">Items</p>

		<ItemsList items={this.state.items} />

      </div>
    );
  }
}

export default App;
