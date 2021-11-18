---
title: 'Graphics Assignment #3 - Bug Squish game'
weight: '5'
---

Here is a working example of the Bug-Squish assignment. Notice the following items that need to be present in your version:

* There is a starting, playing, and ending state for the game. Instructions are given in the start state, and the score is given in the end state. 
* A timer is given to show how long is left before the game state ends, and the game state changes when the timer runs out.
* Each sprite behaves in the same way:
    1.  Moves in its specific direction (Up, Down, Left, or Right)
    2.  Is animated with the walking bug images.
    3.  Reacts to being clicked on. (movement stops, animation changes, score goes up, leaves the screen)
    4.  When all bugs are squished, more appear.
* A specific background image is present.

It is highly recommended that you create a custom function that will generate a large number of sprites and place them on the canvas whenever it is called. This way you can automatically generate additional bugs once the number on screen reaches 0.

In order to achieve this, you will need to utilize all of the skills we have learned so far: conditionals, for loops, custom functions, variables/arrays, as well as how to create groups of sprites. The images for this assignment are available in the [resources](https://pdm.lsupathways.org/6_resources/4_gaphics/p5.play/sprites-images-sprite-sheets/) page.

{{% codepen-results 600 b409072693c51cdbefdb8c778c33a041 %}}

---
