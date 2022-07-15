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
      robots: [],
      searchField: '',
    };
  }

  async componentDidMount() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const robots = await response.json();
    this.setState({ robots });
  }

  searchFieldChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    if (this.state.robots.length === 0) {
      return <div className='pa f1 tc'>Loading...</div>;
    } else {
      return (
        <ErrorBoundary>
          <div className='tc'>
            <h1 className='pa2 f1'>Monsters-Rolodex</h1>
            <SearchBox searchFieldChange={this.searchFieldChange} />
            <ScrollableContent>
              <CardList robots={filteredRobots} />
            </ScrollableContent>
          </div>
        </ErrorBoundary>
      );
    }
  }
}

export default App;
