import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import GuessCounter from './GuessCounter';
import Guesses from './Guesses';
import Feedback from './Feedback';
import GuessList from './GuessList';



export default function App() {
  return (
    <div className="app">
      <header>
        <Header />
      </header>
      <Feedback />
      <Guesses />
      <GuessCounter />
      <GuessList />
    </div>
  )
}