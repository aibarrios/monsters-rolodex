import { useState, useEffect } from 'react';
import CardList from './components/CardList/CardList.component';
import SearchBox from './components/SearchBox/SearchBox.component.jsx';
import ScrollableContent from './components/ScrollableContent/ScrollableContent.component.jsx';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.component';
import './App.css';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');

  const onSearchChange = (event) => {
    return setSearchField(event.target.value);
  };

  useEffect(() => {
    async function fetchData(url) {
      const response = await fetch(url);
      const newMonsters = await response.json();
      setMonsters(newMonsters);
    }

    fetchData(`https://jsonplaceholder.typicode.com/users`);
  }, []);

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField.toLowerCase());
  });

  if (monsters.length === 0) {
    return <h1 className='pa f1 tc'>Loading...</h1>;
  }

  return (
    <ErrorBoundary>
      <div className='tc'>
        <h1 className='pa2 f1'>Monsters-Rolodex</h1>
        <SearchBox
          className='pa3 ba b--green bg-lightest-blue'
          placeholder='Search monsters'
          searchField={searchField}
          onSearchChange={onSearchChange}
        />
        <ScrollableContent>
          <CardList monsters={filteredMonsters} />
        </ScrollableContent>
      </div>
    </ErrorBoundary>
  );
};

export default App;
