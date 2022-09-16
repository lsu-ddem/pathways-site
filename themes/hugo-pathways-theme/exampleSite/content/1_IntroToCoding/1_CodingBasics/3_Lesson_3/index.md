---
title: Everything is a number - Math
weight: 3
---
Adding mathematical calculations to our code allows us to create projects that intelligently adapt to changes and change on their own. We can also use math equations to create basic animations and cycles of change for any element in our project.

Many of the same mathematical operators that we commonly encounter in the world are used in JavaScript, but there are some exceptions. Here is a quick chart of common math operations and their equivalent symbols in JavaScript: 

| Symbol | Operation      |
| ------ | -------------- |
| +      | Addition       |
| \-     | Subtraction    |
| \*     | Multiplication |
| /      | Division       |
| %      | Modulo         |

## Using Math in Code

Lets look at a few examples of where we can use simple math in our code. In the example below, we've created four rows of squares. Each square is placed on the canvas based on the result of a different mathematical equation to determine its X and Y coordinate. Take a look at each grouping of **rect() **functions to see how we use the same "rectX" and "rectY" variables, but return different location results based on the various equations we code for:

{{% codepen 400 OEJEWp%}}

We can also run these same equations against a variable that isn't a fixed, static value. In the example below, move your mouse left and right across the canvas to watch how the squares update their location on the X axis. Take a look at the first and third row: their X locations are determined through addition or subtraction, so they are simply **shifting** their position across the canvas. Since the second and fourth rows determine their X position through multiplication and and division, we are **scaling** their position.

{{% codepen 400 GGgmam%}}

## Math for Animation

In order to animate a shape or image, we will need to replace one or more of its fixed location arguments with a variable, and then write a line of code that causes that variable to update with a new, changed. This last action will need to repeat continuously at a rate fast enough for our eyes to percieve the location change as a smooth motion. The **draw()** block is a perfect place to add this new code since it loops the code inside of it at a rate of 60 frames per second.

Take a look at the two examples embedded below. The first code produces a PacMan character that is fixed in place, while the second example produces a PacMan that is gradually moving across the screen as the "pacX" variable gradually updates with a growing value:

{{% codepen 400 dKyWVG%}}





{{% codepen 400 mKdLOg%}}

The math works like this: each time the draw() block loops, we take the initial value inside of **pacX** and replace it with the result of the equation **pacX - 2**. This causes the value inside of **pacX **to gradually decrease and push Pac-Man off the left-hand side of the canvas. Open your console to see the result of this equation printed out for you.

This second example makes it look as if Pac-Man is stretching  across the entire screen instead of moving his entire body along the entire canvas. This is because with each new loop of the draw() block, we're drawing a new Pac-Man that is located two pixels to the left of the previous one. All of these Pac-Man copies overlap on top of each other, which makes it look as if he's stretching. In order to delete the old Pac-Man copies, make sure to call the **background()** function at the very beginning of your **draw()** block. This essentially "clears" the screen before drawing our newly-moved yellow friend. The example below shows this in action, and also adds a new variable called **speed** to stand in for the rate at which Pac-Man moves across the screen:

{{% codepen 400 KeKePy%}}

## Cyclical Animations with Modulo

In order to have a cyclical animation pattern, we would need to produce a cycling series of numbers and use that cycle as position data for our shape. There are very few processes in p5.js that loop in a cyclical fashion, so we'll need to get creative with how we create one. 

Read [this article](https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/what-is-modular-arithmetic) on a mathematical process known as modular arithmetic. Using the modulo operator (%), we can take a series of increasing numbers and divide them by a fixed number (the modulus) in order to create a pattern of repeating numbers.  Lets tap into the power of the looping **draw()** block and use the **frameCount** variable (which updates to provide the current count of draw() block loops) as our dividend. Mathematically, it looks like this:

Current Frame Count % Total Number of Pixels We Want to Move =  _Cyclical Pattern_

{{% notice tip %}}
Number sequences produced by this method will always start at zero and end at a number that is **one less than the modulus**. Therefor, you'll want to use a modulus that is one number greater than the position location you want your shape to reach. For example, if you want a shape to move between X location 0 and X location 415, you'll need to use a modulus of 416.
{{% /notice %}}

The embedded code below shows this process in action. Notice how we are reassigning the value inside of the **rectX** variable to be the result of **frameCount** mod 300. This produces a repeating pattern between 0 and 299 (one less than the modulus). The rest of the code draws a new purple square at each new updated position, traveling to position 299 on the X axis before telporting back to 0. 

{{% codepen 400 JZowZv%}}

If you want to slow down the speed of the square's travel, call the **frameRate()** function in your **setup()** block and give it a number that is less than 60 in order to slow down the looping rate of the **draw()** block.
