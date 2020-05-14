---
title: Chapter 4 Review & Assignments
weight: 5
---
## Chapter 4 Review

Lets go over some of the basics from the previous lessons:

---

### Basic and Advanced shapes

We already have experience with the basic shapes such as `rect()`, `triangle()`, and `line()`. In this chapter we were also introduced to `arc()` and the functions needed to create custom shapes.

Arc() requires a total of 6 arguments in order to be drawn ont the screen, as well as an optional 7th if you want ot change the arc from its default appearance. In order they are:

* x-location of center
* y-location of center
* shape width
* shape height
* arc start
* arc end

Keep in mind that for this course we will be referring to arcs in degrees, not the default radians of P5. To avoid confusion, always make sure you have the following line in your setup function when using an arc. 

```
angleMode(DEGREES);
```

To create a custom shape you must first call the function `beginShape()`. Then you must follow with a series of `vertex()` functions. These vertices mark the X-Y canvas location of the corners of your shape, in the order that the computer will draw them. Once you have listed all of the necessary shapes, use the function `endShape() to have your computer stop looking for vertices and fill in the shape based on the coordinates given.

```
//drawing a square with the custom shape functions
beginShape();
vertex(100, 100);
vertex(200, 100);
vertex(200, 200);
vertex(100, 200);
vertex(100, 100);
```

---

### Color and Transparency

Color can be represented in multiple ways. This course will mostly utilize RGB color values to represent color. RBG is made up of three numbers. All three of them range from 0-255, and indicate the amount of Red, Green, and Blue in a color make up respectively. 0 means none of a color, and 255 means the maximum of that color.

We can input these numbers directly into functions like `fill()` either as hard-coded numbers, or by first storing them inside an array.

By adding a 4th argument to `fill()`, we can indicate the desired transparency of a color. Transparency has the same range as RGB values, with 0 indicating a color that is completely invisible, and 255 indicating a color that is completely opaque,

---

## Chapter 4 Review Assignment

For this chapter, the review assignment is to create a piece of abstract art using te shape functions mentioned in this chapter. Your code should include:

* at least one of each of the advanced and basic shapes
* at least three unique colors using RGB values
* at least 2 shapes should have an outline, and those outlines should differ in color
* at least two shapes should overlap
* at least two shapes should be slightly transparent

Here is an example

{{% codepen-results 600 dyozqYw %}}

---
