---
title: Playing Samples
weight: 3
disableToc: false
---

To play samples use with a new **Tone.Player** for one sound or a new **Tone.Players** for multiple sounds.

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

### Trigger sounds

There are multiple ways of triggering and controlling sounds. Below we look at **keyIsDown**, **buttons**, and **sliders**.

#### keyIsDown

Since we have multiple sounds to play now we can use keys on the keyboard to trigger them. To do that we use the p5 function **keyIsDown**.

#### Starting the sounds

To get each specific sound to play we use a special syntax: **players.get('samplename')**. In this case we do either **players.get('water')** to select the water sound or **players.get('bees")** to play the bee sound. Then we call **.start()** to play those sounds.

{{% codepen 410 qoxRxg %}}

#### Using buttons

Instead of using **keyIsDown** we can create buttons to trigger sounds. The below example is the same as the previous one just now we use buttons.

We create a button with the p5 function **createButton()**. The parameter is a string that decides the button label. Name it something that describes what your button does.

```
createButton('button label')
```

**button1.position(x, y)** determines the button location.

**button1.mousePressed()** calls a function that we define below. Inside of this function put any code that you want to run when you click the button.

{{% codepen 600 zWRNby %}}

#### Using sliders

To change an aspect of our sound while it is playing we can use a slider. To make a slider in p5.js use **createSlider()**.

##### Syntax

```
createSlider(min,max,[value],[step])
```

##### Parameters

* min - minimum value of the slider
* max - maximum value of the slider
* value - default value of the slider
* step - step size for each tick of the slider (if step is set to 0, the slider will move continuously from the minimum to the maximum value)

To get the current value of the slider: **slider.value()**

#### Labeling your sampler

To label the sampler we use the **text()** function.

##### Syntax

```
text(str,x,y,[x2],[y2])
```

##### Parameters

* str - the alphanumeric symbols to be displayed
* x - x-coordinate of text
* y - y-coordinate of text

{{% codepen 600 Brbbbj %}}
