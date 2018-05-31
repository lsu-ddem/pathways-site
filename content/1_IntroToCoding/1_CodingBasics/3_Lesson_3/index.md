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
| %      | Modulus        |


## Using Math in Code

Lets look at a few examples of where we can use simple math in our code. In the example below, we've created four rows of squares. Each square is placed on the canvas based on the result of a different mathematical equation to determine its X and Y coordinate. Take a look at each grouping of **rect() **functions to see how we use the same "rectX" and "rectY" variables, but return different location results based on the various equations we code for:

{{% codepen 400 OEJEWp%}}

We can also run these same equations against a variable that isn't a fixed, static value. In the example below, move your mouse left and right across the canvas to watch how the squares update their location on the X axis. Take a look at the first and third row: their X locations are determined through addition or subtraction, so they are simply **shifting** their position across the canvas. Since the second and fourth rows determine their X position through multiplication and and division, we are **scaling **their position.

{{% codepen 400 GGgmam%}}

## Math for Animation
