import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import NavigationBar from './components/NavigationBar';

// pages
import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
