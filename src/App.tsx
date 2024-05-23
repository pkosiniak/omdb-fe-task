import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { movieListAction, movieListSelector } from './store/movieList';

function App() {
  const dispatch = useDispatch();
  const state = useSelector(movieListSelector.movieList);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <button onClick={() => dispatch(movieListAction.request({ search: 'man' }))}>test</button>

        <p>{JSON.stringify(state)}</p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

