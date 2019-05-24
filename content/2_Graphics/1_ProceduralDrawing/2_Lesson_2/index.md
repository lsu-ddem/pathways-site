---
title: Color and Transparency
weight: 2
---
## Working with Color in p5.js

There are a number of ways to set the color of objects, shapes, backgrounds, and outlines in p5.js. With the exception of stroke outlines (which uses the `stroke()` function) and canvas backgrounds (which uses the `background()` function), we will use the `fill()` function to add color to things that we draw.

{{% notice warning %}}

The `fill()`function works like a paint can resting on top of a ladder: when it tips over, it will change the color of everything below it. Since our code is read top to bottom, calling the `fill()` function before calling any shape functions will set the color of all shapes drawn from that point forward. To change the color of a specific shape, you will need to call the `fill()` function again immediately before the function that draws that shape.

{{% /notice %}}

p5.js allows the `fill()` function accept a number of different data types. Strings allow you to choose from a handful of colors that p5.js designers have preprogrammed into the main p5.js library. Not all colors imaginable are possible to represent with a string, so try out as many as you can think of and see what works!
