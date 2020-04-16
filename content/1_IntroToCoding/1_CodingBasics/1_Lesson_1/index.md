---
title: Getting Started
weight: 1
---

Let's get started! In this first example, we'll cover the basics of text-based coding in the JavaScript language.

Head to the [P5.js Web Editor](http://alpha.editor.p5js.org/), sign up for a personal account, and open a new File. You'll be presented with a new editor window that displays the code found in your "sketch.js" file. The P5 Web Editor starts you off with some basic code that is needed to create a blank, grey canvas.

You can also edit and read the code found in your project's HTML and CSS files by clicking on the arrow found near the upper lefthand corner of the editor panel:

![](/images/uploads/screen-shot-2018-05-28-at-11.55.32-am.png)

<!-- ![](/images/uploads/screenshot.jpg) -->

And then clicking on the files that are listed:

![](/images/uploads/screen-shot-2018-05-28-at-11.57.41-am.png)

As we discussed, we will mainly be coding inside of the "sketch.js" file, so the P5 Web Editor presents this file to you automatically when a new File is created.

## Functions

Take a look at the code below, which matches the code in your project on the P5 Web Editor:

{{% codepen 500 MGMMXv %}}

When coding a project that uses the p5.js library, every JS file must contain the two large blocks you see below: `function setup() ` and `function draw()`. These are _**functions**_: code elements that behave like actionable machines, producing a result. In our projects, we will be mainly calling for certain functions to be run _inside_ of the two main function blocks you see here. These larger function blocks use a pair of curly braces ( "{ }" ) as boundary markers; any code that you want to place inside of these blocks must be typed between the open and closed curly brace pair.

In p5.js-based projects, code that is placed inside of the larger `setup()` and `draw()` blocks will behave differently based on which block they are called from within, and it's important for us to understand the difference between their behaviors.

Any code inside of `setup()` will only be run _once_ upon the loading of the HTML file. You can rerun anything in the `setup()` block by refreshing your browser.

The `draw()` function behaves like a loop. Any code placed inside this block will be read by our browser from top to bottom and executed over and over again. The speed of the `draw()` block loop is 60 cycles (or **_frames_**) per second.

Take a look at the embedded code below, and add the new console.log() lines into your project on the P5 Web Editor so that both code examples match. Once you've done that, hit the Run Button (shaped like a triangle) at the top of your editor window, and watch the section below marked "Console." After a few seconds, hit the Stop Button.

{{% codepen 500 GGKdaj %}}

Place your cursor inside the Console section and scroll up. You should see the statements "Ready" and "Set" printed only once, and then a long list of "Go!" plus an increasing number statements listed after that. The first two statements only printed to the console once since the were coded inside the`setup()` block, while the "GO!" statement printed multiple times. The increasing number attached to "GO!" represents the current iteration of the `draw()` loop.

## Arguments

Functions can be given additional information in order to specify the way they behave. This additional information is known as an _**argument**_, and is added into the parenthesis found behind function names. In our previous example, the `createCanvas()`, `background()`, and `console.log()` functions all include arguments designed to specify their behavior.

In your code, try changing the single number argument found inside the parenthesis for the `background()` function like this:

```
background(96);
```

`background()` sets the color of the canvas background, and a single number between 0 and 255 will result in a black (0), white (255), or gray canvas. If we want something more exciting, we can add two more arguments into the `background()` function, each of them separated by a comma, like this:

```
background(96, 110, 220);
```

Our canvas background is now a shade of violet. When three arguments are passed into the `background(`) function, it blends red, green, and blue hues together (in that order) based on the values you give it.

Each function in the p5.js library will require different types of data in different orders to adjust their behavior. Check the [P5.js Reference Page](https://p5js.org/reference/) to see a complete list of functions and their adjustable properties.

## Data Types

When making our code, there are a few different kinds of data that we will use in order to create various projects. 

Integer Numbers: These are whole numbers that you can type into your code. A few examples of this are the numbers that come up in the default P5 patch. 400 and 220 are both integer numbers. These are used for setting pixel locations on the canvas and other similar processes.

!{default}(images/graphics/p5default.png)

Floating Point Numbers: These numbers have a decimal point value attached to it. Some functions will require floats as arguments, or output them as results.  58.459, and 3.141592654359 are both examples of Floating Point Numbers.

Whenever you type a number value into p5, that value is what is referred to as ‘hard-coded’ This means that the value will never change unless you go into the code and change the value manually for each instance that you want to adjust it. There are better and less time consuming ways to work that we will get into later. 

Strings: A string is a list of  characters that your computer will read ‘as is’ when executing the code. Normally the computer will convert the characters you type into the code editor into binary code and follow the instructions you want it to do. However, there will be times when you want to have a specific item read out like you typed it (such as a URL or an on-screen text message) and you will need to utilize a string. To make a string, you must first type a set of quotation marks. “ “ Anything typed within the quotation marks will appear as a string, and you can see that it will change color in the P5 editor. Explore a little with the code below to see how you can edit strings by changin the text on line 24.

{{% codepen 500 qBOZNdy %}}

The beginning and ending quotation must match in order to create a string. You can use either double or single quotation marks, to speceify a string, but not both for the same string.

*  "this is a string"; 
*  'this is another one';
* "You can even use a single quote as an apostrophe  ' as long as you end with the double";
* this is not a string;
* "neither is this';

Boolean: Boolean data is extremely powerful in the world of computers. It can be interpreted in a few ways: 1 or 0, On or Off, True or False, etc. These data types form the brain behind conditional statements and for loops, which will serve as the brains for a large portion of the coding in this course. See the chapter on conditional statements for some examples of boolean data in action.
