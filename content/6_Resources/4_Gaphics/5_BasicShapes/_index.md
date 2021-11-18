---
title: Basic & Advanced Shapes/Colors
weight: 5
---
## shapes

P5 can generate multiple basic shapes natively.

Below are some additional functions that can change exactly how P5 draws these shapes:

* rectMode() changes how P5 draws rectangles. The most common use is to draw them from the middle with the argument CENTER. RADIUS is used to specify half of the shape's width and height, and CORNERS fills in a rectangle between two given points
* ellipseMode() changes how ellipses are drawn to the canvas. RADIUS will make the arguments given in ellipse determine the radius instead of the diameter, and CORNER draws the shape from the upper-left corner, and CORNERS fill in a circle between two points given as an argument.
* point() draws a single pixel point on the canvas at a given location
* circle() only draws circles, square() only draws squares, and quad() functions like triangle, but creates a 4 sided shape.

[Here is an example](https://p5js.org/examples/hello-p5-simple-shapes.html) of P5 making several basic 2D shapes.

---

## colors

A Computer color mixer is available [here](https://www.w3schools.com/colors/colors_rgb.asp). You can experiment with the color values and see them output as both RGB and hex values. A second one is available [here](https://www.csfieldguide.org.nz/en/interactives/rgb-mixer/), this time with interactive sliders, but no hex values.

[Here is a lesson](https://p5js.org/learn/color.html) on the basics of color from the book [Learning Processing](http://learningprocessing.com/) by Daniel Schiffman.

Here are a few different Coding Train videos involving working with colors in P5.js.

<iframe width="560" height="315" src="https://www.youtube.com/embed/riiJTF5-N7c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

A slightly older video talking about the same kind of idea in P5.

<iframe width="560" height="315" src="https://www.youtube.com/embed/9mucjcrhFcM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## Measuring the boundaries of shapes

This live-stream recording by [Matthew A. Bardin](https://matthewbardin.com/) goes over how to measure the boundaries of rectangle and circles, have the shapes react to that information, and how to apply the concepts to objects and classes.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ypx8rypBYs8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---