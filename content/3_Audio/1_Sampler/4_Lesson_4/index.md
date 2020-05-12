---
title: Chapter 7 Review & Assignments
weight: 5
---
## Chapter 7 Review

Lets go over some of the basics from the previous lessons:

## Tone.JS library

Be sure to include this line in your HTML file if you want to utilize Tone.js in your P5 projects. 

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/tone/13.8.9/Tone.min.js"></script>
```

## loading sounds

You can load a sound file into a P5 project just like an image file. The only difference is that now we are using the file with `Tone.Player()` and `Tone.Players()` instead of `loadImage()`

## audio file playback

You must first create a new `.Player()` or `.Players()` object and store it inside of a variable so that you can refer to it by name in your code. THe main difference between the two objects is that `.Players()` can contain multiple files. You have to name the files when they are loaded inside the object, and specify which one you wish to play back when triggering the sound.

You can trigger the file playback with the .start() method. However you **HAVE TO** use this method inside of functions like `setup()`, `mousePressed()`, or `keyPressed()` that only occur once when they are called in order to prevent playback malfunctions.

```
//plays a certain sample whenever the space bar is pressed. 

function keyPressed(){
    if(keyCode === 32){
        playersName.get(sampleName).start()
    }
}
```

## Audio Signal Pathway

in order to hear any sound playback, you need to connect the player output to the master speakers when you crete the object. 

```
let player = new Tone.Player(soundSample.mp3).toMaster();
```

Then you will be able to hear the playback through your computer's main sound output whenever you trigger the sound with `.start()`.

You can also load audio effects with the Tone.js library and pass the signal playback through a series of effects to process the sounds using `.connect()` or `.chain()`

```
reverb = new Tone.reverb().toMaster();
delay = new Tone.FeedbackDelay().connect(reverb);
playler player = new Tone.Player(soundSample.mp3).connect(delay);
```

## Buttons and Sliders

P5 has built in buttons and sliders that can be programmed to control various elements. 

```
let button1 = createButton('button label')
button1.position.x = 100;
button1.position.y = 100;
button1.mousePressed(soundPlayback)

let slider1 = createSlider( min, max, default, increments)
delay.feedback.value = slider1.value();
```

The buttons can call a callback function whenever they are clicked and those can be used to trigger sounds. Slider values can be used to update the parameters of various audio effects. Keep in mind that buttons and sliders will not appear on the canvas unless they are placed there with the .position properties,and that sliders do not have a label by default, so you will have to add one using the `text()` function.

---

All of the elements from chapter 7 are covered in the [Sound assignment #1](https://pdm.lsupathways.org/3_audio/1_sampler/3_lesson_3/) page, so there will be no additional assignment. However if you would like more practice before attempting the assignment, try loading various sound files into a project and applying various effects to their playback in order to see what kind of sounds you can achieve.

