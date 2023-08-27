import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Cats } from './pages/Fetch';
import { AddTask } from './pages/TodoList';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <Navbar/>
        <Routes>
            <Route path='/cats' element={<Cats/>}/>
            <Route path='/todolist' element={<AddTask/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path="*" element={<h1>Page Not Found</h1>}/>
        </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
