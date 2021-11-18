---
title: Sprite Collisions
weight: '4'
---

## Understanding Collisions

Each sprite has a hidden hit-box around its perimeter that is constantly checking if the sprite is overlapping with any other sprite. This condition is stored as a boolean variable. (is this sprite currently hitting another sprite? yes or no?) We can utilize these hit-boxes in order to create dynamic interactions between sprites. Lets look at the code below as it does a few things using these boxes.  

{{% codepen 400 RzwPKX %}}

the first thing to notice are a few new methods being utilized:

* **.bounce()** detects a collision with a specific sprite or group and reverses the direction of the initial sprite's movement. Causing the sprite to bounce off of the obstacle it just collided with. 
* **.displace()** causes one sprite to push the other when they collide. this moves the secondary sprite to the closest pixel where the hit-boxes are not activated.  
    * By combining this with **.immovable** property, you can create sprites that both do not move or overlap, resulting in various obstacles around the canvas. 

Each of these methods require the same arguments:

1. The name of the sprite (or group) to interact with
2. An optional callback function

## Callback Functions

A callback function is a function that is utilized in your code whenever some other action occurs. In both the above and below cases, when a collision between the sprite names `character` and the obstacles, a callback function is referenced (`bounceAndBlock()` in the first example, and `removeBlocks()` in the second example). These callback functions can be pre-defined functions in the p5 library, however you will find a more flexible use for them when you define custom functions for each different sprite interaction. The possibilities are endless!

{{% codepen 400 JQjxra %}}

One thing to note that is extremely important is that when you refer to a callback function like this, you *_DO NOT_* include the parentheses like you normally would when referring to a function. You will only refer to the name of the function. Otherwise, the p5.play library will not function properly.

---

### Let's Practice!

For this practice, lets start with the code below. Copy it into a new p5 sketch (be sure to include the p5.play library!)

{{% codepen 400 qBaGvQy %}}

Start by adding the necessary conditional statements to make the player sprite move. (you can decide how the sprite moves, but you have to control it). Then, add use the `.displace()` method to have the player sprite move the ball sprite around the canvas.

---

## Sprite Group Interactions

Earlier in the lesson a few new methods were introduced: 

* .bounce()
* .displace()

These, along with several more ([listed here](https://p5-play.netlify.app/docs/classes/group)) are methods that can be applied to several sprites in a group all at once.

Lets look at this example to see some of these in action.

{{% codepen 400 RwGmOrb %}}

Here we see a few things happening. First, the player sprite is created like normal. The block sprites are created in a slightly different way: using a for loop to create multiple identical sprites at the same time. This is achieved by creating an empty array, then in the for loop, creating the sprite, assigning all of its properties, then adding it to the group. Since the array index will change with each iteration of the for loop, we don't have to worry about a sprite being overwritten in this process. 

In the draw function we have an important line:

```js
player.collide(walls, gameOver);

```

This can be read as "Every time the sprite `player` collides with a sprite in the `walls` group, run the `gameOver()` function." In this case, if the player bumps into the walls, then the player is removed and it is a game over.

There are a few more interesting things about this code that we should mention before we put it away. One is that the walls are randomly placed when they are created in the for loop. This can mean that some of them will overlap. To avoid this we have the following line on line 30 of the sketch. 

```js
walls.displace(walls);

```

This line will cause any sprite in the walls group to move any sprite also in the walls group when they overlap. This will stop as soon as the sprites are no longer touching. This is a handy way to avoid having your sprites annoyingly overlap when making a larger quantity at once or placing them randomly on the canvas.

The last part of this code to look at is when we set the `.immovable` property to try for each of the wall sprites. This property will make any sprite cannot be moved by another sprite. If you remove the call to function gameOver() on line 28, you can see that the player sprite will bump into the walls, but they will not move.

---

### Let's Practice!

Let's use what we have learned to avoid an annoying problem: sprites moving off the canvas and disappearing.

To do this:

1. start by creating a new sketch.
2. Then create a sprite that you can move around the canvas. (the method of movement does not matter, as long as you can control the direction in some way. You can look at example codes in this lesson, or at the next lesson for information on how to do this.)
3. Next, add 4 more sprites. These will serve as invisible walls. Place the sprites on the canvas so that they line up with the edges of the screen. (remember that sprites are drawn form the center, not the edge)
4. Then set the properties of these walls so that they are immovable.
5. Lastly use the .collide() or .bounce() method to change how your player sprite interacts with the walls. 

Here is an example of the end goal:

{{% codepen-results 400 zYKQXzm %}}

In this example, the background color also changes every time the player sprite bounces off of one of the walls. This is done with a callback function.

---
