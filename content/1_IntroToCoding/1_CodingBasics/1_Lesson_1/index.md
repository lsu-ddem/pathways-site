---
title: Getting Started
weight: 1
---
Let's get started! In this first example, we'll cover the basics of text-based coding in the JavaScript language. 

Head to the [P5.js Web Editor](http://alpha.editor.p5js.org/), sign up for a personal account, and open a new File. You'll be presented with a new editor window that displays the code found in your "sketch.js" file. The P5 Web Editor starts you off with some basic code that is needed to create a blank, grey canvas.

You can also edit and read the code found in your project's HTML and CSS files by clicking on the arrow found near the upper lefthand corner of the editor panel:

![null](/images/uploads/screen-shot-2018-05-28-at-11.55.32-am.png)

And then clicking on the files that are listed:

![null](/images/uploads/screen-shot-2018-05-28-at-11.57.41-am.png)

As we discussed, we will mainly be coding inside of the "sketch.js" file, so the P5 Web Editor presents this file to you automatically when a new File is created. 

## Functions

Take a look at the code below, which matches the code in your project on the P5 Web Editor:

{{% codepen 500 MGMMXv %}}

When coding a project that uses the p5.js library, every JS file must contain the two large blocks you see below: _function setup() _and _function draw()_. These are _**functions**_: code elements that act like actionable machines, producing a result. In our projects, we will be mainly calling for certain functions to be run _inside_ of the two main function blocks you see here. 

In p5.js-based projects, code that is placed inside of the larger _**setup()**_ and _**draw()**_ blocks will behave differently based on which block they are called from within. Any code inside of _**setup()**_ will only be run _once_ upon the loading of the HTML file. You can rerun anything in the _**setup() **_block by refreshing your browser.

The _**draw()**_ function behaves like a loop. Any code placed inside this block will be read by our browser from top to bottom and executed over and over again. The speed of the _**draw()**_ block loop is 60 cycles (or **_frames_**) per second. 

Take a look at the embedded code below, and add the new console.log() lines into your project on the P5 Web Editor so that both code examples match. Once you've done that, hit the Run Button (shaped like a triangle) at the top of your editor window, and watch the section below marked "Console." After a few seconds, hit the Stop Button.

{{% codepen 500 GGKdaj %}}
