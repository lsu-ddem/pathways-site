---
title: Creating a Sound File Players
weight: '1'
---

Before beginning this chapter, it may be useful to go over the [Basics of Sound](https://pdm.lsupathways.org/3_audio/0_basicsofsound/) lesson to make sure you have an understanding of how sound behaves, how sounds are recorded, and interacted with by the computer. 

---

### Side-Note Before we start

If you are not using p5 for this course, you will likely have to utilize the command below in order for Tone to work. you have to tell Tone to begin processing audio. to do this, simply include the line. 

```js

Tone.start()

```

Because the default audio library utilizes elements of Tone.js, we don't have to include this command normally, however if your code is not working, but you have Tone properly installed, or if you are using another editor such as [codepen.io](codepen.io), then you may want to include the code below in your starting template. 

When you interact with the canvas. By default, browsers will not begin playing audio until you have interacted with them in some way. You could possibly make a "start audio" button (more on buttons later), or include the code below in your sketches:

```js
let toneStart = 0;


function mousePressed(){
  if (toneStart = 0){
    Tone.start();
    toneStart = 1;
  }

  //place other code needed in function mousePressed() here
}

```

This will check to see if Tone has started, and automatically start it when the user clicks on the canvas for the first time. 

---

## Creating a Single Sound File Player

There are a few steps needed in order to create a way to playback sound files in Tone.js:

1. Create a variable that will contain the audio player, just like when creating a sprite.
2. Tell P5 where to access the necessary sound files. This process is identical to loading images, and the files can either be hosted online or loaded directly in the P5 server.
  a. Keep in mind that audio files are larger than image files. There are some sound files you can download in the [reference tab](https://pdm.lsupathways.org/6_resources/7_soundandmusic/4_tate-tonestuff/sample-playback-and-effects/samples/). You can also find these and more sound samples [at this github repository](https://github.com/mbardin/PDM-resources).
3. Inside of `function preload()`, create the new `Tone.Player()` object as shown in the code below. We have to do this in `preload()` so that P5 can locate all of the files *_before_* it attempts to play them.
4. As the argument for the Tone.Player() object, list out the file pathway or url for the desired sound file. (see step 2)
5. after the arguments' closing parentheses, add `.toDestination()`.

By adding .toDestination() to the end of our command to create the player, we are chaining on the command to connect the output of the playback object to the destination speakers on our computer. (whatever the default speakers on your device are, or the headphones if you are using those)

You can then then trigger the sound with the `.start()` method as shown below:

```js
soundPlayerName.start();
```

However it is _*EXTREMELY IMPORTANT*_ that you do not try to use `.start()` inside of the draw function. Instead call this process in something like mousePressed() or keyPressed() because they only execute their code *one time when* triggered. The details for this are given in the code below.

{{% codepen 500 MXVgVR %}}

---

### Let's Practice!

Can you make a new Tone.Player() that can play a sound? How about two or three with unique sounds? 

Don't forget that you can link to a sound file hosted online, or have your own sound file uploaded to the project.

---

## Playing Multiple Sounds with Tone.Players

Instead of making multiple single-file sound file players, we can build one `Tone.Players()` instrument and load it with multiple sound files. Both ways are perfectly fine, but using Tone.Players() can save some typing; something that can come in handy with longer sketches. To define which sounds to play we must create an object with multiple file paths (done by opening a pair of { } brackets inside of the Tone.Players function's parenthesis), each with a unique name to call the sound up by later. You can think of this name as a type of variable that is inside of an object. This should look just like a (JSON object)[https://pdm.lsupathways.org/1_introtocoding/3_reuseitwithmodularcode/2_lesson_2/]. Keep in mind that each differently labeled sound is a different instance of `Tone.Player()`, wrapped inside of a single `Tone.Players()`. (This may seem confusing at first, but will come in handy when triggering different sounds later in the lesson.)

```js
multiplayer = new Tone.Players({
    chains: baseURL + "Rhythmics/120+bpm/Rhythmic+Chains.mp3",
    bells: baseURL + "Natural+Sounds/Truro+Cathedral+Bell+with+seagulls.mp3",
    arpeggio: baseURL + "SID+Arps+119bpm.mp3"
  }).toDestination();
```

In all of the sketches in this lesson we are using online-hosted sound files, just like when we are using hosted image files. To make our code a little easier to read, we are storing the part of the file's URL that doesn't change between any of the sound files in a variable, then adding the unique part of the file pathway when we are loading the sound. This will save us a lot of typing when building the code, and make our code easier to read.

Since we are now dealing with multiple sound files, we should cover some of the best ways to trigger individual sounds in your project, as well as ways to modulate and manipulate those sounds while they are playing. The sketch below shows off using the Tone.Players() object, and a way to trigger the sounds with key presses.

{{% codepen 500 yLVgJv %}}

---

### Let's Practice!

Take your sketch from the last practice and see if you can turn the multiple Tone.Player() objects into a single `Tone.Players()`. The sections below will go over some common triggers to play back the sounds.

---

## Triggering Sounds

There are multiple ways of triggering and controlling sounds. Below we look at keyIsDown, buttons, and sliders.

### keyIsDown()

Since we have multiple sounds to play now we can use keys on the keyboard to trigger them. To do that we use the p5 function `keyIsDown()`. This function checks which key is being pressed every time the keyboard detects a key stroke, and returns the value `true` if the result matches the key passed in through the argument. By placing this inside of a conditional statement, and that conditional statement inside of function `keyPressed()`, we can map multiple sound triggers in one location. The embedded code below shows this method in action.

### Starting the Sounds with the Keyboard

To get each specific sound to play we use a special syntax: 

```js
Players.player("samplename"). 
```
These are the same `labels`, or individual .Player() objects given in the `Tone.Players()` object. Keep in mind that you will replace Players with the name of the object you gave it.

Using the code sample from earlier in this lesson, we can use either multiplayer.player("bells") to select the bells sound or multiplayer.player("arpeggio”) to play the arpeggiated synthesizer sound. Then we call `.start()` on the same line to play those sounds. 

```js
multiplayer.player("bells").start();
```
The example below shows `Tone.PLayers()` in action.

{{% codepen 500 vrzEjR %}}

As we keep moving on in this chapter, you may notice that we start to chain multiple methods together onto a single object. The above example uses the `.player()` and `.start()` method on the same line to trigger each sound. This is ok, and actually the preferrec way of triggering sounds. You could reads this line as "multiplayer, find the desired sound, then immediately play it back." This way we can immediatly trigger desired actions without having any previous data lost or changed by another part of our code.

#### Using Tone.player()

To play back a single sound loaded into Tone.player(), we would simply use `Player.start()` within our trigger. Since only one sound file is present with these objects, we don't need the extra level of specification.

### Using buttons

Instead of using **keyIsDown()** we can create buttons to trigger sounds. The playback of sounds (creating the `Tone.Players().toDestination()` object and including the `.player().start()` methods) remains identical. The only change is how we trigger the sounds. in this case, we will be using on-screen buttons that can be clicked with the mouse.

We can create a button with the P5 function **createButton()**. Inside the ('') we give the button text to display. You need to have te button display a label or it will not appear. The label will also help determine the size of the button.

```js
createButton("button label");
```

We can then customize the button by modifying some of its properties:
 * **button1.position(x, y)** determines the button location. By default, the button will appear just outside of the canvas, so you will need to include this line if you want to be able to interact with you button while running the code. The arguments are the x,y location on the canvas.
 * **button1.mousePressed()** sets a callback function, like with sprite colissions in p5.play. Inside of this function put any code that you want to run when you click the button. In the embedded example below, we made three new functions: play1, play2, and play3. Inside of each, we have our **multiplayer.player("samplename").start()** function that causes the Tone.Players object to grab and play the corresponding sound file. The callback function will only execute one time each time the button is clicked. Remeber when storing a callback function for later use, you do _not_ include the parentheses; only type the name of the function.

{{% codepen 500 OEoZyQ %}}

---

## Understanding the Audio Signal Path

Because computer audio playback is a real-time processing of data in a continual stream. This data is stored as a sound file and processed every time you tell the computer to play back the audio. However, because this playback a continual stream of information, we have to keep the data flowing so the computer can keep reading the next piece of upcoming data. To do this, when we playback our sound files, we need to send the playback to the destination speakers of our device with the method .toDestination() as shown below. Without this command, we will not hear our sound playback for any audio in this unit.

![null](/images/uploads/simple_audio_pathway-1-.png)

(In previous versions, the `.toDestination()` method was called .toMaster(). This has been removed in modern version and sketches shown in this book. You may still see various resources referring to this method, however.)

Because this is a constant stream of data, we can alter the flow of this data through different types of precessing to change the contents of that data with the `.connect()` and `.chain()` methods, which we will go over later.

---

### Let's Practice!

This lesson has a lot of information about how to load and playback sounds. Earlier in the lesson you were asked to make an instance of Tone.players() that had three different sounds. Now, add at least two more sounds to that object, and see if you can trigger them in the following ways:

* pressing specific keys on the keyboard (x2)
* pressing a button on the screen (x2)
* clicking the mouse

If you want you can see what you can achieve with a slider using the above code as an example, but we will be going over that in more detail in the next lesson.

---