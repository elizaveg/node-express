import logo from './logo.svg';
import React from 'react';
import './App.css';
import './index.js';

//Import Components
import Product from "./components/Product";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <User />
      <Product />
    </div>
  );
}

export default App;
