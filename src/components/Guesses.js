import React from 'react';
import './Guesses.css';

export default function Guesses() {
  return (
    <form>
      <input type="text" name="userGuess" id="userGuess" class="text" maxlength="3" autocomplete="off" placeholder="Enter your Guess" required=""></input>
      <input type="submit" id="guessButton" class="button" name="submit" value="Guess"></input>
    </form>
  )
}