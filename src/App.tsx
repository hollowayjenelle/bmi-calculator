import React from 'react';
import './App.css';
import Header from './components/Header';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <div className='main-section'>
        <Header/>
        <Calculator/>
      </div>
    </div>
  );
}

export default App;
