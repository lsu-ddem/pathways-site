---
title: User-Based Interactivity (Mouse/Keyboard Events)
weight: '4'
---

## Bringing it All Together

Here is an example of an advanced game that features animations, movement through key and mouse interaction, and collisions between groups and single sprite characters:

{{% codepen 600 jKKZjz %}}

At this point we have seen many code examples that already show ways to move a sprite around the canvas with keyboard and mouse interactions, by combining these with the sprite interactions you can create dynamic 2D games for other people to interact with. In this example we can see the dog, rover, responding to being clicked on with the `.onMousePressed` method, and move across the screen with key presses. Rover also interacts with the sprites in different ways. Rover's sprite cannot move past the sprites inside of the hydrant group, but he can interact with the sprites in the bones group. This later interaction has a callback function that removes the bone from the group and increases the score on the screen. Notice how the hydrants also displace each other so that they do not overlap.

The next assignment will have you work to combine all of the elements we have gone over in order to create your own game: "Bug Squish". This game will require you to code similar interactions between sprites and the user in a new context. Check out the next page for an example of your final goal!

---

## Game States

Now that you have looked at the working example for 'Bug Squish", you will notice that the game has several different states:

1. A start screen with game play instructions displayed.
2. The time where the game is being played.
3. A game over screen with the final score and more instructions displayed. 

To achieve this, you can utilize conditional nested statements and variables. 

First create a variable for that will store the states for your game. You can then store a value inside of the variable and change it to update the state.

Look at the example below. by checking what the current value of the gameState variable, the computer can access certain parts of the code.

```
let gameState;

function setup() {}
  createCanvas(400, 400);
  background(220);
  gameState = 'start';
}

function draw() {
  if(gameState === 'start){
      all code for this state goes here
      if(condition to trigger next state){
          gameState = 'play';
      }
  } else if(gameState === 'play'){
      all code for this state goes here
      if(condition to trigger next state){
          gameState = 'end';
      }
      } else if(gameState === 'end'){
          all code for this state goes here
          if(condition to restart the game){
              setup();
          }
      }
}
```

By setting things up this way, the computer will only run the code that is present for each game state. Within each main state there is also a nested loop containing a condition for changing the game state to a different value. If one game state can go to multiple other stats, you will need a separate nested test for each potential state change. By calling `setup()` at the end of the end state, the code resets everything to their state at the beginning of the game.

---

## Timer

Also present in 'Bug Squish' is a tier function. in order to achieve this, be sure to include the following variables and function in your code:

```
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

As long as this function is being called it will check the current time of the computer's clock against the time that the the function was called and return that value as a whole number. Additionally, once the difference reaches a certain threshold it will change the `timerIsDone` variable. You can utilize this function and variables to help your code keep a timer and change states from 'play' to 'end'.

---
