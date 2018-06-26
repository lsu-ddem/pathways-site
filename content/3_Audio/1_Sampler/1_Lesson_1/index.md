---
title: WebAudio Basics & Sound File Players
weight: '1'
---
## Understanding the Audio Signal Path

![null](/images/uploads/simple_audio_pathway-1-.png)

## Creating a Sound File Player

{{% codepen 500 MXVgVR %}}

## 

## Playing Multiple Sounds with Tone.Players

Instead of making multiple single-file soundfile players, we can build one Tone.Players instrument and load it with multiple soundfiles. To define which sounds to play we create an object with multiple file paths (done by opening a pair of { } brackets inside of the Tone.Players functions parenthesis), each with a unique name to call the sound up by later. You can think of this name as a type of variable that is inside of an object.

### Triggering Sounds

There are multiple ways of triggering and controlling sounds. Below we look at keyIsDown, buttons, and sliders.

#### keyIsDown

Since we have multiple sounds to play now we can use keys on the keyboard to trigger them. To do that we use the p5 function keyIsDown. The embedded code below shows this method in action.

#### Starting the sounds

To get each specific sound to play we use a special syntax: players.get("samplename"). In this case we do either players.get("bells") to select the bells sound or players.get("arpeggio”) to play the arpeggiated synthesizer sound. Then we call .start() on the same line to play those sounds.

{{% codepen 500 vrzEjR %}}

#### Using buttons

Instead of using **keyIsDown** we can create buttons to trigger sounds. The below example is the same as the previous one just now we use buttons.

We create a button with the p5 function **createButton**. Inside the ('') we give the button text to display.

**button1.position(x, y)** determines the button location.

**button1.mousePressed()** calls a function that we define below. Inside of this function put any code that you want to run when you click the button.
