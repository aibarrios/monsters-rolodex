import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardList from './components/CardList/CardList.component';
import SearchBox from './components/SearchBox/SearchBox.component.jsx';
import ScrollableContent from './components/ScrollableContent/ScrollableContent.component.jsx';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.component';
import './App.css';
import { searchFieldChange } from './redux/searchBoxSlice';
import fetchData from './redux/fetchDataThunk';

const App = () => {
  const monsters = useSelector((state) => {
    return state.monsters.monsters;
  });

  const searchField = useSelector((state) => {
    return state.searchBox.searchField;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData(`https://jsonplaceholder.typicode.com/users`));
  }, [dispatch]);

  const onSearchChange = (event) => {
    return dispatch(searchFieldChange(event.target.value));
  };

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
