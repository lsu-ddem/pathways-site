---
title: User-Based Interactivity (Mouse/Keyboard Events)
weight: '3'
---

## Moving Your Sprites

Here is an example of a sketch that allows our sprite to move around the canvas in different ways.

{{% codepen 600 RzPbrY %}}

If you look at functions mousePressed() and keyPressed() you can see specific properties and methods used to tell the sprite how to move around the canvas. By clicking the mouse, we can use `.attractionPoint()` to indicate a spot the sprite should move to. This is great for a "click and move" type environment common in many games. 

But what if you want to move by using the keyboard? Inside of keyPressed() we can see a series of conditional statements that test to see if a certain key is pressed. because we are using .setSpeed() as the results of this test, we can tell the sprite to move up, down, left, and right to match with the arrow keys. Using this logic we can tell our sprites how to move around the canvas. Different sprites can be mapped to different key combinations, or multiple sprites can be given the same keys to have identical, synchronized movements.

When using `setSpeed()` we need to specify both the speed (pixels per frame) to move, and a direction to move in (degrees). Below is a chart of some common directions to move in as well as the degree that corresponds to that direction.

| Angle (degrees) | Direction                |
| --------------- | ------------------------ |
| 0               | RIGHT                    |
| 90              | DOWN                     |
| 180             | LEFT                     |
| 270             | UP                       |
| 45              | RIGHT-DOWN DIAGONAL      |
| 135             | LEFT-DOWN DIAGONAL       |
| 225             | LEFT-UP DIAGONAL         |
| 135             | RIGHT-UP DIAGONAL        |

Keep in mind that in p5, 0 degrees is always _horizontally to the right_, and the numbers _increase moving clockwise_ around a circle.

It is recommended to give each sprite a `.friction` value in the setup function when moving them around the canvas. This will make the sprite eventually stop moving, as if real-world friction wa being applied to the object. Without this, the sprite would move forever in the direction most recently pressed. You can also set a `.maxSpeed` value in order to prevent your sprite form accelerating too much if the same direction is continually pressed or held down.

---

### Let's Practice: Automatic Movement

We can also use these methods and parameters to set automatic movements. In the code below there is an additional sprite that now moves automatically. This is done by setting the movement speed and direction inside of `setup()` and then utilizing conditional statements inside of `draw(()` to adjust those properties. Try changing the values of the properties in order to change how the sprite named `otto` automatically moves around the canvas. Try adding new properties and methods as well!

{{% codepen 600 NWGaMxa %}}

Check out the [p5.play reference pages](https://p5-play.netlify.app/) for a full list of sprite properties and methods available.

Later on we will discuss how to program collisions with other sprites to build more complex environments to move through. 

---

