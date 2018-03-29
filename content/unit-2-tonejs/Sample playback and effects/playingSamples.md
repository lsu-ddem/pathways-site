---
title: Playing Samples
weight: 3
disableToc: false
---

To play samples use with a new **Tone.Player** for one sound or a new **Tone.Players** for multiple sounds.

<!-- add this to codepen examples -->

<!-- <script async src="//jsfiddle.net/yotammann/8ozo3v9e/4/embed/"></script> -->

## Tone.Player

### Play one sound

This is an example of playing one sound with a **Tone.Player** object and triggering it to start with a mouseIsPressed function.

The variable **baseURL** stores the beginning part of the URL which is the same for all of our sound files. We use this variable to make our code shorter and more readable. Inside of the **Tone.Player** we add **baseURL** to the rest of the URL to complete our string.

Here's an example of string adding or concatenation:

```
"cat" + "dog" = "catdog"
"tree" + "hello" = "treehello"
```

Other things we can do to change how **Tone.Player** acts are **autostart**, **loop**, and **playbackRate**.

If **autostart** is set to true then the sound file will play as soon as the page is loaded.

If **loop** is set to true the sound file will repeat until forever.

**playbackRate** controls the speed of the sample. Above 1 will sound higher and below 1 will sound lower.

Click on the canvas to play.

{{% codepen 400 MVQeGQ %}}

## Tone.Players

### Play multiple sounds

We used **Tone.Players** when we want to collect multiple samples to play.

To define which sounds to play we create an object with multiple file paths, each with a unique name to call the sound up by later. You can think of this name as a type of variable that is inside of an object.

#### keyIsDown

Since we have multiple sounds to play now we can use keys on the keyboard to trigger them. To do that we use the p5 function **keyIsDown**.

#### Starting the sounds

To get each specific sound to play we use a special syntax: **players.get('samplename')**. In this case we do either **players.get('water')** to select the water sound or **players.get('bees")** to play the bee sound. Then we call **.start()** to play those sounds.

{{% codepen 410 qoxRxg %}}

#### Using buttons

Instead of using **keyIsDown** we can create buttons to trigger sounds. The below example is the same as the previous one just now we use buttons.

We create a button with the p5 function **createButton**. Inside the ('') we give the button text to display.

**button1.position(x, y)** determines the button location.

**button1.mousePressed()** calls a function that we define below. Inside of this function put any code that you want to run when you click the button.

{{% codepen 600 zWRNby %}}
