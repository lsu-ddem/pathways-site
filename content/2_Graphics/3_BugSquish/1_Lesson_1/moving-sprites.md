---
title: Moving Sprites Around the Canvas
weight: '2'
---

## Properties vs Methods

In order ot talk to our sprites, we will need to utilize the dot notation that was first mentioned in [this](https://pdm.lsupathways.org/1_introtocoding/3_reuseitwithmodularcode/2_lesson_2/) chapter.

In the code below we have generated a single sprite and set specific properties and methods. The way you set these values is similar (both using dot notation), but their purposes are slightly different.

{{% codepen 600 RzPbrY %}}

### Properties

A property is an element of a sprite's characteristics that can be set to a value and changed. Properties are utilized in the following format:

```
sprite.property = value;
```

Looking in the setup() function of the code above we can see several properties being used to make our sprite function in a specific way.

* **.shapeColor** can be used to make a sprite be drawn with th same shape every time it is created instead of being given a random color. You can assign this to the results of the `color()` function.
* **.rotation** rotates the sprite by a given number of degrees. Positive numbers move the sprite clockwise, negative move the sprite counter clockwise.
* **.rotationSpeed** rotates a sprite by a given number of degrees _per frame_ of the draw() function; resulting in the shape spinning on the canvas. Positive values cause a clockwise rotation, and negative cause a counter clockwise rotation.
* **.maxSpeed** keeps the speed of a sprite from moving past a given threshold.
* **.friction** applies friction to the movement of a sprite to slow down and stop its movement. 0 = no friction; 1 = maximum friction.
* **.position** teleports the sprite to a specific location on the canvas.
  * **.position** needs to have one of its sub-properties called in order to work. You must specify either **sprite.position.x** or **sprite.position.y**, and you must call each of them separately.

There are several other properties that can be used in the P5.play library, and their details can be found [here.](https://molleindustria.github.io/p5.play/docs/index.html)

---

### Methods

Methods serve as functions or actions that the sprite can be told to perform. They are called in the following manner:

```
sprite.method(argument(s));
```

In the code above we can see `.attractionPoint()` is used. This method tells the sprite to move at a given speed (pixels per frame) toward the X,Y position indicated in its arguments. `.setSpeed()` however, only specifies an initial speed and single angular direction in which to move. A few commonly used angles are:

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


Any angle between 0 and 359 can be used, but those are some of the more commonly utilized ones in 2D character movement. Keep in mind that 0 degrees is horizontal to the right, and that the degrees then follow clockwise.

We will utilize many more methods throughout this unit, but for now lets focus on these. You can look more into a sprite's methods here.](https://molleindustria.github.io/p5.play/docs/index.html)

---

## Moving Your Sprites

{{% codepen 600 RzPbrY %}}

Once again we have this spinning sprite code. If you look at functions mousePressed() and keyPressed() you can see specific properties and methods used to tell the sprite how to move around the canvas. By clicking the mouse, we can use `.attractionPoint()` to indicate a spot the sprite should move to. this is great for a "click and move" type environment common in many games. Inside of keyPressed() we can see a series of conditional statements that test to see if a certain key is pressed. because we are using .setSpeed() as the results of this test, we can tell the sprite to move up, down, left, and right to match with the arrow keys. Using this logic we can tell our sprites how to move around the canvas. Different sprites can be mapped to different key combinations, or multiple sprites can be given the same keys to have identical, synchronized movements.

We can also use these parameters to set automatic movements. In the code below there is an additional sprite that now moves automatically. This is done by setting the movement speed and direction inside of `setup()` and then utilizing conditional statements inside of `draw(()` to adjust those properties. Try changing the values and properties in order to change ho the sprite otto automatically moves around the canvas. 

{{% codepen 600 NWGaMxa %}}

Later on we will discuss how to program colossians with other sprites to build more complex environments to move through. 

---
