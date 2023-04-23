import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

// pages 
import Home from './pages/Home';

// components
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
