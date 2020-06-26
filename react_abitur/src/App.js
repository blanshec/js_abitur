import React from 'react';
import './App.css';
import './vendor/normalize.css';
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
    </div>
  );
}

export default App;
