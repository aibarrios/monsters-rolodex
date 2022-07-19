import React, { Component } from 'react';
import CardList from './components/CardList/CardList.component.jsx';
import SearchBox from './components/SearchBox/SearchBox.component.jsx';
import ScrollableContent from './components/ScrollableContent/ScrollableContent.component.jsx';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.component.jsx';
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

  onInputChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    if (this.state.monsters.length === 0) {
      return <h1 className='pa f1 tc'>Loading...</h1>;
    } else {
      return (
        <ErrorBoundary>
          <div className='tc'>
            <h1 className='pa2 f1'>Monsters-Rolodex</h1>
            <SearchBox
              className='pa3 ba b--green bg-lightest-blue'
              placeholder='Search monsters'
              onChangeHandler={this.onInputChange}
            />
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
