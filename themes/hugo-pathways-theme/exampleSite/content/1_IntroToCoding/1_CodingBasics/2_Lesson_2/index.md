---
title: Storing Things in Code - Variables
weight: 2
---

So far, our code has used concrete, static data to create visuals. However, we can use updatable, changing data in order to modify our projects while they are running in order to make them more dynamic. To do this, we use **_variables._** A variable is a container that stores a single value in the memory or our code so that we can use it at a later time, in multiple places throughout our code. This make variables more flexible than fixed, concrete values.

Take a look at the embedded code below, and click on it's title to jump to an editable version of it on CodePen:

{{% codepen 400 pVXgNZ %}}

In this code, we draw two polygons to the screen. The teal square is built using four fixed values as arguments; its location, width, and height will never be changed unless we stop the code, edit the values, and rerun the program. The pink rectangle uses two variables: "rectWidth" and "rectHeight".

## Making Variables

To make a variable, we start by _declaring_ a name for the container. In our code, we've declared both "rectWidth" and "rectHeight" at the very top of our code by first typing the keyword 'var'. We've done this outside of either the `setup()` or `draw()` blocks, which means that we've declared these variables _globally_ (we'll discuss this in detail at the bottom of the page).

Next, we need to _assign_ an initial value to each variable. This is also called _initialization_, or _init_ for short. This step can be done immeditaly after declaring a variable:

```
var rectHeight =50;
```

or at a later time in a function block:

```
function setup(){
 rectHeight = 50;
}
```

Take note: unlike in math operations, the equals sign means assignment, NOT equality. In our example, rectHeight gets assigned a value of 50, but it is not equal to 50.

It's important to note a few things about making variables:

- You can only declare a variable once. If you try to declare it more than once, your code will wipe the previous value inside of your variable from its memory. For instance, the following code is an issue:

```
var xValue = 1;

function setup(){

  var xValue =21;

}
```

because the original value of "xValue", which was 1, has now be replaced with 21.

- You cannot have two separate variables that share the same name. The same code example above would also cause an issue due to the fact that you are attempting to declare two separate variables that share the same name. While this sort of thing is POSSIBLE to do, it makes for a very confusing code. This has to do with the scope in which both variables were declared (more on this below).

## Fixed Values vs. Changeable Values

Variables can contain fixed values as well as changeable values. In our example, rectHeight contains a fixed value of 50 inside of it (which happens at the very top of our code, above the `setup()` function block), allowing us to use the value of 50 in any location we type the phrase "rectHeight." rectWidth, however, contains the result of a function called `random()`, which generates a random number between its two arguments each time it is run. Since it only runs inside of the `setup()` block, we need to hit the rerun button in the embedded Result panel in order to get a different width for the pink rectangle. We can easily modify our code so that `random()` spits out a new value and updates our variable with every frame of the draw loop:

{{% codepen 400 qKWywY %}}

## System Variables

The p5.js library includes a series of built in variables that allow you to monitor the status of certain aspects of your device and use them as ways to interact with your projects. These variables are known as _**System Variables**_.

Take a look at the embedded code below to see an example of some common System Variables in p5.js:

{{% codepen 400 wjLMQj %}}

Since every variable in this example is a System Variable, we cannot declare or initialize them in our code like we would with custom-built variables. Their declaration occurs inside of the larger p5.js library, and their initialization/updating occurs differently based on the variable. `width` and `height` are variables that hold the current size dimensions for the project's canvas and are initialized when the `createCanvas()` function is called. Open this code on CodePen or copy it into your P5 Web Editor, then change the argument inside of `createCanvas()` to see how updating those values also updates these variables.

The values inside of `mouseX` and `mouseY` are updated every time you move your mouse cursor across the canvas. Using these variables, you can update the location of an object (like we're doing to one corner of the triangle) or use their current values in a calculation to generate changeable arguments.
