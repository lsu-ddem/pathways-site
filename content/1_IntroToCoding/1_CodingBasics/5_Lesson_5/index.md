---
title: Chapter 1 Review & Assignments
weight: 5
---
## Chapter 1 Review

Lets go over some of the basics from the previous lessons:

In our online code editor there are three main files, CSS, HTML, and JS. We will be doing the majority of our coding in the Javascript file. 

The area that we can interact with when out code is rendered is called the `canvas`. We can specify how large the canvas, and how it appears with the **createCanvas()** and **background()** functions. We can place items in specific places on the canvas by telling our computer the pixel location that we want to place the item. Remember, increasing the X-value of a coordinate will move an object to the right, and increasing the Y-value will move it towards the bottom of the screen.

We can create containers to store values for later use. these containers are called variables. We first have to tell the computer to make space for the variable in its memory and give our variable a unique name with the indicator `let`. We can then assign the variable a specific value with a single equal sign `=`. Remember, you can store a value inside of a variable and access as many times as you want, but once you replace that value with a new one, the old value is gone forever. 

Computers think with numbers. We can use the relationships between numbers in order to create different patterns in our code. This could be simply adding or subtracting values for a constant relationship, multiplying or dividing them for exponential changes, or using modulo for repeated animations. There are also some shorthand symbols that we can use in our code to represent mathematic equations.

---

## Chapter 1 Review Assignment

Below is the code that utilizes all of the elements discussed so far:

* Canvas locations
* Basic shapes and colors
* Variables
* Manipulating values with math

For this assignment, your goal is to recreate the code below as accurately as possible. Remember that you will have to use variables and modulo in order to achieve this.

<!-- {{% codepen-results 600 WNQJLeW %}} -->

<iframe src="https://editor.p5js.org/mbardin/embed/h_dsP2Bs3" width=500 height=500></iframe>

---

## Additional Practice Assignment

Here is another practice assignment that utilizes all of the concepts discussed in this chapter.

Use the code below as a starting place. Copy it into a blank p5 sketch.

```js
 
 //create your variables here 
 let redX, redY;
  
function setup() {
  createCanvas(400, 400);
}

function draw() {
//use this space to add the necessary math  
redX = mouseX;
redY = mouseY;
  
  background(0);
//you will need to use the variables you created and altered in order to draw the various shapes
  fill("red");
  ellipse(redX, redY, 25, 25);
  fill("green");
  ellipse();
  fill("lightBlue");
  ellipse();
  fill("white");
  ellipse();
  fill("coral");
  ellipse();
}  

```

For this assignment, you will need to create 2 variables for each ellipse function given. Then you will have to assign them a value. These values should all be based on mouseX and mouseY. Lastly you should use these vales inside of the ellipse functions. If done properly, all 5 ellipses should follow the mouse at different distances. The red ellipse has been completed for you as an example.

---
