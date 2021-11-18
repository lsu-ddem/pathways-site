---
title: Chapter 9 Review & Assignments
weight: 3
---
## Chapter 9 Review

Lets go over some of the basics from the previous lessons:

---

In chapter 9 we went about different ways to trigger sound playback when using sprites, which we went over in chapter 6. The main ways we set up sound playback were:

* on sprite collisions
* on mouse interactions
* as background music
* sounds that evolve with or without game states

The sounds that can be triggered ban be sound files, synthesizer playback, or a combination of both.

---

### Playback on Sprite Collisions

When using a sprite, you can utilize certain methods such as `.displace()` or `.bounce()` in order to tell the sprite how to interact with other groups of sprites that are being drawn to the canvas. Each of the 5 native collision methods in P5.play has the option to use a callback function. As a refresher, these are custom functions that will be triggered one time whenever a sprite in one group is detected  to be overlapping with a sprite in another. (as given in an argument for the collision method). Because this function will happen one time we can use this to trigger sound playback. 

This playback can either be a sound file that uses `Tone.Player().start()`, or it can be a synthesizer note using `Tone.Synth().triggerAttachRelease()` inside fo the callback function. Depending on the context, you could even set up a sequence of notes to play, but unless it is an important interaction, shorter sounds are generally recommended for sprite collisions. You can also tailor unique sounds for if your player character sprite interacts with multiple other kinds of sprites on the screen, as each possible combination of collisions can have its own callback function.

---

### Playback on Mouse Interactions

Setting a sprite to trigger a sound playback when you click on it is similar to the above process because we can define the sprite's `.onMousePressed()` method as a function like we did in *Bug Squish*. 

```
sprite.onMousePressed() = function() {
    everything that you want to occur when the sprite is clicked on
}
```

This new function will function just like `function mousePressed()`, but only when the mouse is pressed over the specific sprite. By simply adding in the same commands from when two sprites were colliding we can include sound playback when we click on a sprite. More complex interactions can be set up by incorporating conditional statements into the triggers in this new function, but those are situational based on the context for the game and sounds you are trying to create.

---

### Background Music

When we make our code there are functions that P5 includes that behave in a certain way. Some functions occur before others, some have unique triggers, and some continuously run for as long as the program is operating. Using this we can set up background music to occur during our codes that help make the interactions more interesting to whomever is using the project. 

When creating a sequence of sounds we should build the synthesizer in either the preload or setup functions. (preload is a better choice because it guarantees that everything is built prior to the setup function completing.)  Once we have a synthesizer and sequence built, all that is left to do is play it. In the case of background music we want to have the music begin when the game starts and continue until the game ends. 

```js
let synth, bgSeq;
let melody = [A1, A2, A3, E4, A3, E3, G#2, A2]

function preload(){
synth = new Tone.Synth().toMaster();
bgSeq = new Tone.Sequence(function(time, note){
    synth.triggerAttackRelease(note, 0.5);
}, melody, '4n');
}

function setup(){
Tone.Transport.bpm = 100;
Tone.Transport.loop = true;
Tone.Transport.loopStart = 0;
Tone.transport.loopEnd = '2:0:0';
Tone.TRansport.start()

playBgMusic();
}

function playBgMusic(){
bgSeq.start();
}
```
In this example we make a basic synthesizer and sequence inside of the preload function. When we are setting up the sketch, we set all of the parameters for the Tone.TRansport() object, and the last thing that is done before any other code begins is to start the background music. in this example you could just use the command bgSeq.start() instead of calling a separate function, however by crating additional functions that can stop, start, or change the background music you open up your code to many more opportunities for unique, adaptive background music that can enhance your game play experience. For example you could stop one sequence and start another based on the game states or another condition Or you could update the synthesizer or transport settings.

As it stands right now this code will play the given sequence on loop for as long as the code is running. Can you think of a way to make it a little more interesting?

---

### Sounds with Game States

One easy way to change the background music in a code is with the use of game states. Simply add commands to stop the current sound and begin  the next one in the part of your code that transitions states.

```js
let gameState = 1;

if(gameState === 1){
    sound1.start();

    if(transition criteria is met){
    sound1.stop();
    gameState++;
    }
}  
if (gameState === 2){
    sound2.start();
}

```

If you want, you can place the .start() and .stop() commands within a separate function so that you have the opportunity to trigger them whenever you need to. As the example shown is set up, the original sound will start, but only stop when the criteria for changing to a new game state is met, and sound 2 will never start up until the second state begins.

---

### Sounds without Game States

There are multiple ways to trigger a background music change without the use of game states, but remember that the "never trigger sounds in draw" rule always applies. We can get around this in two main ways, other than the methods we have already mentioned:

1. Complex logic within functions such as mousePressed() and keyPressed() can be utilized to alter the playback based on specific keystrokes or mouse locations.
2. You can create new objects and classes that can alter the music based on their interactions. 

Remember that when working with sprites we can adjust the sound playback through using the `.onMousePressed()` method. The same is true for any objects we make. We can set up tests within the object's `.onMousePressed() = function(){}` line in order to determine how to update the code's audio playback. These objects could be characters like a sprite, or blend into the background depending on the context needed by the project.

{{% codepen 700 wXVVgX %}}

---

## Chapter 9 Review Assignment

For this practice assignment, your goal is to build a basic game utilizing both sprites and the Tone.js library. This does not have ot be a complex game and the sprites do not have to be animated. But what does have to happen is:

* a sound event should occur when two sprites interact
* background music should be playing
* background music should adapt in some way based on a condition within the game.

Below is a working example of a potential solution.

When you are ready, then it is time to move on to the final assignment of the Sound unit: Adding an Adaptive Soundtrack and Sound Events to *Bug Squish* or *Paint App*.

---
