---
title: WebAudio Basics & Sound File Players
weight: '1'
---
## Sound Basics

Sound is a series of vibrations that are generated from a source, such as a person talking, and travel through the air until they reach someone's ears. These vibrations travel at approximately 343 meters per second through air. THere are a few important properties of sound that we should cover before going too deep into digital audio.

### Frequency and Amplitude

Sound waves can be measured as teh energy from the sound pushes air molecules, causing them to condense and separate in oscillating patterns. The number of times per second that a sound wave is oscillating at is its **frequency**. Humans can generally hear frequencies between 20 and 20,000 Hertz (Hz), or times per second. The higher the frequency, the higher the pitch of the sound.  

If the frequency of a sound is the number of times per second that a wound wave oscillates, then the **amplitude** is the size of that oscillation. When the sound source vibrates more air, it increases the amplitude, and resulting volume, of that sound. To test this, try lightly placing your finger on the computer speaker and playing a sound at a quiet volume. Then play it again at a much louder volume. Did you feel a difference in the vibrations? The louder sound contains much larger vibrations than the softer one.

## Getting the Sound into the Computer

So how do you go from vibrations in the air to a sound file you can play back on a computer? To get there you need a few pieces of equipment; most of this equipment is available built into electronics such as phones and laptops, but the sound, part quality, and price can all vary widely. To record and playback a sound, the following processes must happen:

1. The sound must happen and travel through the air.
2. The air pressure caused by the sound hits a microphone. This pressure causes slight movements of a wire coiled around a magnet. These movements result in an electrical charge to be sent out of the microphone cable. (There are different types of microphone with slightly different types of mechanisms for picking up sound)
3. This electrical signal, which matches the original audio, is sent to the computer's _Analog-to-Digital Converter_ which takes snapshots of the electrical signal and stores its current level as data in the sound file.
4. The sound file, which is just a series of numbers, can be stores, moved and changed as needed until it is processed and read by the device's _Digital-to-Analog Converter_. This device outputs an electrical signal that corresponds to the stream of data from the sound file being read.
5. This electrical signal is then amplified and sent to a speaker, where the fluctuation in signal cause wire coils wrapped around a magnet to vibrate. These coils are attached to a speaker cone which pushes the air next to the cone, resulting in the sound playback being heard.

### Sample Rate and Bit Depth

In the above process number three, the computer takes a series of snapshots of the electrical signal in order to recreate it at a later time. there are two important elements to this process which determine the quality of the audio recording. 

* **Sample Rate**: The number of times per second that the computer takes a snapshot of the incoming signal level. The standard rate is 44,100 times per second. Higher quality products such as movies can go as high as 48,000 or 96,000 times per second, but these higher sampling rates result in larger file sizes. 
* **Bit Depth**: The resolution of the sound. When the computer checks the incoming signal, it can only check to a certain level of exactness for each sample. Standard audio recording happens at 16-bits, which is 2^16 potential discrete values (just over 65 million). Higher quality audio can be recorded at 24-bits, but like increasing the sample rate, will increase the file size. 

## Understanding the Audio Signal Path

Because computer audio playback is a real-time processing of data in a continual stream. This data is stored as a sound file and processed every time you tell the computer to play back the audio. However, because this is a continual stream of information, we have to keep the data flowing so the computer can keep reading the upcoming data. To do this, when we playback our sound files, we need to send the playback to the master speakers of our device with the method .toMaster() as shown below. Without this command, we will not hear our sound playback for any audio in this unit.

![null](/images/uploads/simple_audio_pathway-1-.png)

Because this is a stream of data, we can alter the flow of this data through different types of precessing to change the contents of that data with the `.connect()` and `.chain()` methods, which we will go over later.

## Creating a Sound File Player

There are a few steps needed in order to create a way to playback sound files in Tone.js:

1. Create a variable that will contain the audio player, just like creating a sprite.
2. Tell P5 where to access the necessary sound files. This process is identical to loading images, and the files acn either be hosted online or loaded directly in the P5 server.
3. Inside of function preload(), create the new player object as shown in the code below. We have to do this in `preload()` so that P5 can locate all of the files before it attempts to play them.
4. as an argument for the Tone.Player() object, list out the file pathway or url for the desired sound file.
5. after the arguments' closing parentheses, add `.toMaster()`.

You can then then trigger the sound with the `.start()` method as shown below:

```
soundPlayerName.start();
```

However it is **IMPORTANT** that you do not try to use `.start()` inside of the draw function. Instead call this process in something like mousePressed() or keyPressed() because they only execute their code one time when triggered. The details for this are given in the code below.

{{% codepen 500 MXVgVR %}}


## Playing Multiple Sounds with Tone.Players

Instead of making multiple single-file sound file players, we can build one `Tone.Players()` instrument and load it with multiple sound files. To define which sounds to play we create an object with multiple file paths (done by opening a pair of { } brackets inside of the Tone.Players functions parenthesis), each with a unique name to call the sound up by later. You can think of this name as a type of variable that is inside of an object.

```
multiplayer = new Tone.Players({
    chains: baseURL + "Rhythmics/120+bpm/Rhythmic+Chains.mp3",
    bells: baseURL + "Natural+Sounds/Truro+Cathedral+Bell+with+seagulls.mp3",
    arpeggio: baseURL + "SID+Arps+119bpm.mp3"
  }).toMaster();
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

Instead of using **keyIsDown()** we can create buttons to trigger sounds. The playback of sounds (creating the `Tone.Players().toMaster()` object and including the `.get().start()` methods) ramins identical. The only change is how we trigger the sounds. in this case, we will be using on-screen buttons that can be clicked with the mouse.

We can create a button with the P5 function **createButton()**. Inside the ('') we give the button text to display. You need to have te button display a label or it will not appear. The label will also help determine the size of the button.

```
createButton("button label");
```

We can then customize the button by modifying some of its properties.
**button1.position(x, y)** determines the button location. By default, the button will appear just outside of the canvas, so you will need to include this line if you want to be able to interact with you button while running the code. 

**button1.mousePressed()** calls a function that we define below, similar to a callback function in P5.play. Inside of this function put any code that you want to run when you click the button. In the embedded example below, we made three new functions: play1, play2, and play3. Inside of each, we have our **multiplayer.get("samplename").start()** function that causes the Tone.Players object to grab and play the corresponding sound file:

{{% codepen 500 OEoZyQ %}}

#### Using sliders

To change an aspect of our sound while it is playing we can use a slider. To make a slider in p5.js use `createSlider()`.

##### Syntax

```
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
