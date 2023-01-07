import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './views/HomePage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>} />
      </Routes>
    </div>
  );
}

export default App;
