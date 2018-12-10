import React from 'react';
import './GuessCounter.css';

export default function GuessCounter() {
  return (
    <p>
      "Guess #"
      <span id="count">0</span>
      "!"
    </p>
  )
}