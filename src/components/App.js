import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import GuessCounter from './GuessCounter';
import Guesses from './Guesses';
import GuessMonitor from './GuessMonitor';
import GuessResponse from './GuessResponse';



export default function App() {
  return (
    <div className="app">
      <header>
        <Header />
      </header>
    </div>
  )
}