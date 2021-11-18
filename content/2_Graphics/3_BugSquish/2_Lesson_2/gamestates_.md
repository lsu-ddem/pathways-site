---
title: Final Aspects of Game Design
weight: '5'
---

# Finishing Our Game

Now at this point we know just about everything in order to create the final project in the Graphics unit of this course. However there is one more section of content that we should go over before moving onto that project. This information isn't related to sprites and the p5.play library, but will add a level of usability to your games that will allow the player to have a more intuitive and enjoyable interaction with your finished product.

---

## Mouse Interactions: Clicking on a sprite

If you want to click on a sprite and have it respond, then a little more setup is required. We can use the `.onMousePressed()` method, however like `function keyPressed()` and `function mousePressed()`, we need to tell the p5.play library exactly what we want to happen before any code is executed. Luckily, the format for this is identical to creating methods, something we did in th [last unit](https://pdm.lsupathways.org/1_introtocoding/3_reuseitwithmodularcode/2_lesson_2/).

To make a sprite respond to being clicked, we first have to make a sprite. Then, when setting the properties for this sprite, we type the following so that our code starts to look like this:

```js
let sprite;

function setup(){
createCanvas(600,600);

sprite = createSprite(width /2, height / 2, 100,100);
sprite.shapeColor = [0, 255, 0];
sprite.maxSpeed = 3;
sprite.friction = 0.001;

sprite.onMousePressed = function(){
this.shapeColor = [255, 0, 0];
this.rotationSpeed = 5;
this.setSpeed(3, 45);
this.life = 500;
 }
}

function draw(){
  background(220);

  drawSprites();
}

```

In this example, we see that we begin with a green sprite that is in the middle of the canvas. Then, we define the contents of the method `onMousePressed()` just as if we were making a method in a class. We only need to do this one time for as long as the sprite exists, so we can just do it in setup as shown. From there we can specify exactly what will happen when the sprite is clicked on. Be sure to use `this.` notation for this part to avoid any issues with naming sprites (especially important when creating sprites locally within a function or for loop). In this case, when the sprite is clicked it turns red, begins spinning, and travels downward to the left before eventually being removed from the sketch all together. 

When using the `.life` property, p5 will count down the number of frames indicated and then remove the sprite from the sketch. These sprites are no longer drawn or updated; they are essentially dead.

---
### Let's Practice!

The above code was intentionally not embedded so you could see the results. Copy it into a new p5 sketch and see how the sprite behaves. Try making an additional sprite that reacts differently when clicked on. Try and be as creative as possible to see how you can make your sprites react!

---

## Game States

When playing a game you may have noticed that there are times that different screens appear. Think of the 1985/86 Nintendo game [The Legend of Zelda](https://www.youtube.com/watch?v=6g2vk8Gudqs). In that game the entire map is divided into a grid of cells that the player can move through. The player can also move through a menu screen, has an intro screen, etc. Each of these can be represented as a different game state. (While it would be _a lot_ of work, and not a recommended assignment, this is something that we could potentially recreate using py and the p5.play library)

Admittedly the version that we will be making is not as complex as the engineers at Nintendo created, but for our game this will be more than enough to create a unique game lay experience.

We can think of each game state as a small, localized portion of the draw function where we can separate various things out into their respective state. Then, we need to call that state when we need that content! To achieve this, you can utilize conditional nested statements and variables. 

First create a variable for that will store the states for your game. You can then store a value inside of the variable and change it to update the state. This can be a number or a string. As long as everything is spelled properly, using a string helps identify each state when looking through the code.

Look at the example below. by checking what the current value of the gameState variable, the computer can access certain parts of the code.

```js
let gameState;

function setup() {}
  gameState = 'start';
}

function draw() {
  if(gameState === 'start'){
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

### Let's Practice!

There has been a lot of code on this page so far. The video below combines everything we have worked with in sprites so far with game states. Watch the live-coding demo to see how you can use this information to create your own games.

<iframe width="560" height="315" src="https://www.youtube.com/embed/H-6jaZBH-hs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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

You can use this timer code to advance game states based on the value stored inside of the "timerIsDone" variable.

---

### Let's Practice

Can you create a sketch that has a few different game states? What will be your triggers to change states? Maybe a timer, or if a certain object is clicked on, or maybe if two sprites bump into each other? The possibilities are endless.

Bonus: Try making a sketch with multiple game states and try to move back and forth between them in different orders without resetting the game.

---

## Bringing it All Together

Here is an example of an "advanced" game that features animations (Something we will be going over a few lessons from now), movement through key and mouse interaction, and collisions between groups and single sprite characters:

{{% codepen 600 jKKZjz %}}

Our goal is to create a few different 2D based games that feature custom animation and various different levels of interactivity. Feel free to explore more options on your own, but don't worry if your game doesn't look like the hottest new AAA feature to come out on Steam.

At this point we have seen many code examples that already show ways to move a sprite around the canvas with keyboard and mouse interactions, by combining these with the sprite interactions you can create dynamic 2D games for other people to interact with. In this example we can see the dog (a sprite named 'rover') responding to being clicked on with the `.onMousePressed` custom method, and is also able to move across the screen with key presses. Rover also interacts with the sprites in different ways. Rover's sprite cannot move past the sprites inside of the hydrant group, but he can interact with the sprites in the bones group. This later interaction has a callback function that removes the bone from the group and increases the score on the screen. Notice how the hydrants also displace each other so that they do not overlap.

The next unit assignment will have you work to combine all of the elements we have gone over in order to create your own game: ["Bug Squish"](https://pdm.lsupathways.org/2_graphics/3_bugsquish/5_lesson_5/). This game will require you to code similar interactions between sprites and the user in a new context. However before you can get to `Bug Squish`, you will have to learn how to add images and animations to your sketches and sprites. Lets face it, as-is, a game with just squares can be confusing and boring to look at, even if it has wonder interactions with all of the sprites.

---
