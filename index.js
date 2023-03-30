'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = `🎉 Correct Number!`;

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

/* 1. Choose the element on which the event will happen and add Event; then pass the type of the event inside ();
then we need to tell what to do/action by defining the function. Inside the function we specify what we what to happent.
We save user input into variable, and it should be string, but we will need to compare this number to randomly generated number.
So we will need to convert our output string to a number.
Now the logic of the game.
Simplest case: there is no guess or no value, then we can print some response   */
document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = `⛔ No number!`
  }

});
