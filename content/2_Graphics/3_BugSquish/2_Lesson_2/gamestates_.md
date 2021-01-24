---
title: Final Aspects of Game Design
weight: '5'
---

# Finishing Our Game

Now at this point we know just about everything in order to create the final project in the Graphics unit of this course. However there is one more section of content that we should go over before moving onto that project. This information isn't related to sprites and the p5.play library, but will add a level of usability to your games that will allow the player to have a more intuitive and enjoyable interaction with your finished product.

---

## Game States

When playing a game you may have noticed that there are times that different screens appear. Think of the 1985 Nintendo game `The Legend of Zelda`. In that game the entire map is divided into a grid of cells that the player can move through. The player can also move through a menu screen, has an intro screen, etc. Each of these can be represented as a different game state. 

Admittedly the version that we will be making is not as complex as the engineers at Nintendo created, but for our game this will be more than enough to create a unique gamep lay experience.

We can think of each game state as a small, localized portion of the draw function where we can separate various things out into their respective state. Then, we need to call that state when we need that content! To achieve this, you can utilize conditional nested statements and variables. 

First create a variable for that will store the states for your game. You can then store a value inside of the variable and change it to update the state. This can be a number or a string. As long as everything is spelled properly, using a string helps identify each state when looking through the code.

Look at the example below. by checking what the current value of the gameState variable, the computer can access certain parts of the code.

```js
let gameState;

function setup() {}
  gameState = 'start';
}

function draw() {
  if(gameState === 'start){
      //all code for this state goes here. This would be the starting screen.
      if(condition to trigger next state){
          gameState = 'play';
      }
  } else if(gameState === 'play'){
      //all code for this state goes here. This would be the main game play screen.
      if(condition to trigger next state){
          gameState = 'end';
      }
      } else if(gameState === 'end'){
          //all code for this state goes here. This would be the ending/game over screen.
          if(condition to restart the game){
              setup();
          }
      }
}
```

By setting things up this way, the computer will only run the code that is present for each game state. Within each main state there is also a nested loop containing a condition for changing the game state to a different value. If one game state can go to multiple other stats, you will need a separate nested test for each potential state change. By calling `setup()` at the end of the end state, the code resets everything to their state at the beginning of the game.

---

## Timer

A timer is a great way to work out when a certain game state should end. If you look a head to the example of the Bug Squish project, you can see that this game utilizes a timer to end the play game state. There are many possible ways to create a times in javascript and p5,. The example below is a quick and easy one.  

```js
let time;
let timerIsDone = false;
let startTime = 30; 

function timer() {
  time = int((millis() - startTime) / 1000);
  if (time > 30) {
    timerIsDone = true;
  }
  return time;
}
```

This timer won't function unless it is being called inside of draw(). This way it can be used within a game state. This example timer uses the millis() function in order to work. millis() counts up the total number of milliseconds that have passed since the sketch started running. By comparing this value to the startTime variable, we can use a conditional statement to determine when the timer has stopped. Think of the startTime value as the duration of the timer. Since we will set this in seconds, we have to divide the result of millis() by 1000 in order to get a timer that will count down in seconds. Additionally, once the difference reaches a certain threshold it will change the `timerIsDone` variable. You can use this variable as needed in a conditional statement to tell your computer what to do once the value has been changed from true to false.

---

### Let's Practice

Can you create a sketch that has a few different game states? What will be your triggers to change states? Maybe a timer, or if a certain object is clicked on, or maybe if two sprites bump into each other? The possibilities are endless.

Bonus: Try making a sketch with multiple game states and try to move back and forth between them in different orders without resetting the game.