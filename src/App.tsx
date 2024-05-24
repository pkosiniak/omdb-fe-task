import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SearchBox } from './modules';
import { MovieList } from './modules/MovieList';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />

        <SearchBox />

        <MovieList />
        {/* {state?.[0] && <MovieCard {...state[0]} />} */}
        {/* <p>{JSON.stringify(state)}</p> */}
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

