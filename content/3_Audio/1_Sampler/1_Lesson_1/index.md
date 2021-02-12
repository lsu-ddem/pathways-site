---
title: Creating a Sound File Players
weight: '1'
---

Before beginning this chapter, it may be useful to go over the [Basics of Sound](https://pdm.lsupathways.org/3_audio/0_basicsofsound/) lesson to make sure you have an understanding of how sound behaves, how sounds are recorded, and interacted with by the computer. 

---

## Before we start

In the newer versions of Tone, you have to tell Tone to begin processing audio. to do this, simply include the line 

```js

Tone.start()

```

at the beginning of your setup() function. This will have Tone automatically start when the code begins. You can avoid potential errors by including this line right at the beginning! 

---

## Creating a Sound File Player

There are a few steps needed in order to create a way to playback sound files in Tone.js:

1. Create a variable that will contain the audio player, just like when creating a sprite.
2. Tell P5 where to access the necessary sound files. This process is identical to loading images, and the files can either be hosted online or loaded directly in the P5 server.
  a. Keep in mind that audio files are larger than image files. There are some sound files you can download in the [refrences tab](https://pdm.lsupathways.org/6_resources/7_soundandmusic/4_tate-tonestuff/sample-playback-and-effects/samples/). You can also find these and more sound samples [at this github repository](https://github.com/mbardin/PDM-resources).
3. Inside of function preload(), create the new player object as shown in the code below. We have to do this in `preload()` so that P5 can locate all of the files *_before_* it attempts to play them.
4. as an argument for the Tone.Player() object, list out the file pathway or url for the desired sound file.
5. after the arguments' closing parentheses, add `.toDestination()`.

You can then then trigger the sound with the `.start()` method as shown below:

```js
soundPlayerName.start();
```

However it is **IMPORTANT** that you do not try to use `.start()` inside of the draw function. Instead call this process in something like mousePressed() or keyPressed() because they only execute their code one time when triggered. The details for this are given in the code below.

{{% codepen 500 MXVgVR %}}

---

## Playing Multiple Sounds with Tone.Players

Instead of making multiple single-file sound file players, we can build one `Tone.Players()` instrument and load it with multiple sound files. To define which sounds to play we create an object with multiple file paths (done by opening a pair of { } brackets inside of the Tone.Players functions parenthesis), each with a unique name to call the sound up by later. You can think of this name as a type of variable that is inside of an object.

```
multiplayer = new Tone.Players({
    chains: baseURL + "Rhythmics/120+bpm/Rhythmic+Chains.mp3",
    bells: baseURL + "Natural+Sounds/Truro+Cathedral+Bell+with+seagulls.mp3",
    arpeggio: baseURL + "SID+Arps+119bpm.mp3"
  }).toDestination();
```

Since we are now dealing with multiple sound files, we should cover some of the best ways to trigger individual sounds in your project, as well as ways to modulate and manipulate those sounds while they are playing.

### Triggering Sounds

There are multiple ways of triggering and controlling sounds. Below we look at keyIsDown, buttons, and sliders.

#### keyIsDown()

Since we have multiple sounds to play now we can use keys on the keyboard to trigger them. To do that we use the p5 function keyIsDown. This function checks which key is being pressed every time the keyboard detects a key stroke, and returns the value `true` if the result matches the key passed in through the argument. By placing this inside of a conditional statement, and that conditional statement inside of function `keyPressed()`, we can map multiple sound triggers in one location. The embedded code below shows this method in action.

#### Starting the Sounds with the Keyboard

To get each specific sound to play we use a special syntax: 

```
players.get("samplename"). 
```
These are the same labels given in the `Tone.Players()` object.

In this case we do either players.get("bells") to select the bells sound or players.get("arpeggio”) to play the arpeggiated synthesizer sound. Then we call `.start()` on the same line to play those sounds. 

```
multiplayer.get("bells").start();
```
The example below shows `Tone.PLayers()` in action.

{{% codepen 500 vrzEjR %}}

#### Using buttons

Instead of using **keyIsDown()** we can create buttons to trigger sounds. The playback of sounds (creating the `Tone.Players().toDestination()` object and including the `.get().start()` methods) remains identical. The only change is how we trigger the sounds. in this case, we will be using on-screen buttons that can be clicked with the mouse.

We can create a button with the P5 function **createButton()**. Inside the ('') we give the button text to display. You need to have te button display a label or it will not appear. The label will also help determine the size of the button.

```js
createButton("button label");
```

We can then customize the button by modifying some of its properties.
**button1.position(x, y)** determines the button location. By default, the button will appear just outside of the canvas, so you will need to include this line if you want to be able to interact with you button while running the code. 

**button1.mousePressed()** calls a function that we define below, similar to a callback function in P5.play. Inside of this function put any code that you want to run when you click the button. In the embedded example below, we made three new functions: play1, play2, and play3. Inside of each, we have our **multiplayer.get("samplename").start()** function that causes the Tone.Players object to grab and play the corresponding sound file:

{{% codepen 500 OEoZyQ %}}

#### Using sliders

To change an aspect of our sound while it is playing we can use a slider. To make a slider in p5.js use `createSlider()`.

##### Syntax

```js
createSlider(min,max,[value],[step]);
```

* _min_ - minimum value of the slider
* _max_ - maximum value of the slider
* _value_ - default value of the slider [optional]
* _step_ - step size for each tick of the slider (if step is set to 0, the slider will move continuously from the minimum to the maximum value) [optional]


Remember: when a function's arguments are listed inside of flat brackets in a syntax example or on an API document, this indicates that those arguments are optional, and are not required in order for the function to run successfully. In the case of createSlider(), the first two arguments (min and max) are required, while the second two (value and step) can be added if you'd like to have more control over how your slider behaves.


To get the current value of the slider and use it in your code, call for slider.value() and attach it to a property of your player. 

#### Labeling your sampler

It's a good idea to label any sliders used to control your sampler so that you know what they do. Sliders do not have a built in label, so without some way to identify them, people using your codes will not know what the slider is controlling. Here is a quick reminder of how the text() function works: 


```
text(str,x,y);
```


*  _str_ - the alphanumeric symbols to be displayed, beginning at the x-coordinate of the text.
*  _x_ - the x axis coordinate of text.
*  _y_ - the y axis coordinate of text.

In the code below, we use a button to trigger the playback of each sound and  a slider, labeled "\[File Name] Playback Speed" to change the playback speed rate of our sound while it plays:

{{% codepen 500 LrJrVe %}}

We will discuss audio effects that can be controlled via sliders in the next page.

---

## Understanding the Audio Signal Path

Because computer audio playback is a real-time processing of data in a continual stream. This data is stored as a sound file and processed every time you tell the computer to play back the audio. However, because this playback a continual stream of information, we have to keep the data flowing so the computer can keep reading the next piece of upcoming data. To do this, when we playback our sound files, we need to send the playback to the destination speakers of our device with the method .toDestination() as shown below. Without this command, we will not hear our sound playback for any audio in this unit.

![null](/images/uploads/simple_audio_pathway-1-.png)

Because this is a stream of data, we can alter the flow of this data through different types of precessing to change the contents of that data with the `.connect()` and `.chain()` methods, which we will go over later.

---
