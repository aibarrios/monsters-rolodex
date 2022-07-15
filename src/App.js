import React, { Component } from 'react';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';
import ScrollableContent from './components/ScrollableContent/ScrollableContent';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  async componentDidMount() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const monsters = await response.json();
    this.setState({ monsters });
  }

  searchFieldChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    if (this.state.monsters.length === 0) {
      return <div className='pa f1 tc'>Loading...</div>;
    } else {
      return (
        <ErrorBoundary>
          <div className='tc'>
            <h1 className='pa2 f1'>Monsters-Rolodex</h1>
            <SearchBox searchFieldChange={this.searchFieldChange} />
            <ScrollableContent>
              <CardList monsters={filteredMonsters} />
            </ScrollableContent>
          </div>
        </ErrorBoundary>
      );
    }
  }
}

export default App;
