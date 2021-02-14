---
title: 'Adding Sound Events to Games: Synthesizers & Sequences'
weight: '2'
---

There are a few ways that we can utilize synthesizers and sequences with sprites, but first lets go into how we can set that up. If you did the activity on the previous page, they you will already have a code that is ready to go. Otherwise you will need to follow the steps below:

1. open a new P5 project. Make sure that **BOTH** Tone.js and P5.play are installed in the HTML file.
2. Create a single sprite that you can move around the canvas. This will be the player character (PC)
3. create 2 groups of multiple sprites. Our PC will have unique interactions with the different groups.
4. create a `.collide()` command for each sprite group and a callback function for each collision. 

To save time, it is recommended that you begin with there-made code, however you will have to follow these generalized steps whenever you want to make a project utilizing both sound and sprite interactions. (see [Integrations Project](https://pdm.lsupathways.org/5_integrationproject/) for more information)

---

## Background Music

Once you have a working code with sprites, we can start building sound into it. Lets begin with simple background music. The first step is to create a synthesizer. For this example, it can be a simple one. Live we have done before, we need to create a condition to start the sequence. To create background music, we can place this trigger inside of a custom function. 

```js
//starts the sequence
function bgMusic() {
  sequence1.start();
}
```
We can then call this function as the last line inside of the `setup()` function. This will start the music automatically when the code initializes. 

{{% codepen 600 GRpOyNZ %}}

Because a browser will no automatically begin playing music, we have to interact with the canvas in some way for the audio to begin playing. In this simple example we have the audio begin when the canvas is clicked. In other games you may have a start button or something a little more sophisticated.

Once we have a single melody playing, we can change that background melody with different combinations of the `.start()` and `.stop()` methods, which we will get into later on this page.

---

## Melodies Based on Interactions

Now that we have our background music playing, lets develop a more complex sounding series of interactions. This process will setup a sound interaction that sounds complicated, but you actually already know everything you need to to achieve this type of interaction!

In your codes (either the one from the previous page or another one you made) there are callback functions that play back a sound file as part of their program. This can be easily changed to a sequence of synthesizer notes instead of a pre-recorded sound. Start by creating 2 new melody sequences. You can look at the code above this section for a refresher on setting up a `Tone.Sequence()` object if you need to. Once you have these sequences ready to go, simply change out the code inside of the callback functions to start the sequence instead of the sound file. It is that easy! Here is an example of the new callback function for the dog, rover's, interactions with the bone sprites. 

```js
function collectBones(character, bone) {
  bone.remove();
  boneCount++;
  sequence1.start();
  if (bones.length === 0) {
   sequence2.start();
  }
}
```

Now, whether or not you decide to have a sound file playback or sequence depends on the context of the sprite interaction that is happening. in most contexts, you will want ot make sure to set the `Transport.loop = false` otherwise the sequence will continue to run until you give a `.stop()` command, which could potentially be distracting to the player.  Another tip is to use shorter synthesizer sequences for these types of interactions. in the previous example, all of the sound files were short accents on a collision This type of sound is helpful for enhancing the environment without getting in the way of game play. experiment with different sound files, sequence tempos, and other elements to find what works best for the project that you are trying to create. 

### Sounds on Mouse Interactions

One more type of interaction we commonly use are those with the computer mouse. Both _Bug Squish_ and the _Paint App_ utilize mouse interactions as their main driving force. We can utilize this force to set up sound playback when we interact with our sprites via the mouse. 

As a refresher from the _Bug Squish_ assignment, we needed a method called `.onMousepressed()` in order to tell our sprites how to behave when they were clicked on. We can easily add in a sound file playback or sequence to these interactions, just like with sprite collisions. The example below contains just the code needed to achieve this sequence or file playback when a sprite is clicked. sprite1 is set up to play the sequence when clicked, and sprite2 is set up to play a sound file.

```js
let clickMelody = [[B3, F3], B3];
let sequence, synth, sprite1, sprite2;

function preload(){
    bloop = new Tone.Player(example_sound.mp3).toMaster();
}

function setup(){
    createCanvas(400, 400)
        synth = new Tone.Synth({
    oscillator: {
      type: "square"
    },
    envelope: {
      attack: 0.05,
      decay: 0.5,
      sustain: 1,
      release: 5
    }
  }).toDestination();

sequence = new Tone.Sequence(function(time, note) {
    synth.triggerAttackRelease(note, 0.5);
  }, clickMelody, '16n');

Tone.Transport.bpm.value = 144;
Tone.Transport.start();
Tone.Transport.loop = false;

sprite1 = createSprite(100, 100, 50, 50);
sprite1.onMousePressed() = function(){
      playClick();
  }
}
sprite2 = createSprite(200, 200, 50, 50);
sprite2.onMousePressed() = function(){
      playBloop();
  }
}

function playClick(){
sequence1.start();
}

function playBloop(){
bloop.start();
}
```

This example contains a lot of separate parts, however it once they have been built, it is a relatively simple matter to connect them all together via the `.onMousePressed()` method. Keep in mind that this is a basic example, and that everything we have talked about in regards to sprites and sound could potentially be applied to this idea, resulting in much more complex environments.

If you want to see this code in action, you will have to copy it into a new P5 project with both of our libraries installed, and add in your own sound file. Also, don't forget to add `drawSprites()` so that they will be drawn to the canvas. 

---

## Changing Background Music

Now that we have gone over how to set up sequences of background music and trigger sequences on sprite collisions and mouse interactions, lets discuss an effective, but sometimes overlooked part of sound design in coding: changing the background music.

If your code has game states, changing the background music can be done as part of the state change.

```js

let gameState;

function setup() {}
  createCanvas(400, 400);
  background(220);
  gameState = 'start';
  bgMusic();
}

function draw() {
  if(gameState === 'start){
      all code for this state goes here
      if(condition to trigger next state){
          bgChangePlay();
          gameState = 'play';
      }
  } else if(gameState === 'play'){
      all code for this state goes here
      if(condition to trigger next state){
          bgChangeEnd();
          gameState = 'end';
      }
      } else if(gameState === 'end'){
          all code for this state goes here
          if(condition to restart the game){
              setup();
          }
      }
}

function bgMusuc(){
    start the background music that begins at the beginning of the game
}

function bgChangePlay(){
    change any aspect of the background music to take effect in the play state
    Other changes could happen here too
}

function bgChangeEnd(){
    change any aspect of the background music to take effect in the end state
    Other changes could happen here too
}

```

By including a call to a separate function inside of the test to change the state, we can alter parameters of the background music based on how the game is being interacted with by the user. These changes can be subtle, such as tempo or timbre changes, or more drastic such as switching the entire sequence being utilized in each section.

---

## Changing a Sequence Without Game States

But what if your code does not have built in game states? Lets look at this example from a previous chapter in more detail to see how we can achieve that.

{{% codepen 700 wXVVgX %}}

In this example, the sequence being played changes based on where the user clicks on the canvas. (you have to press capital 'P' to start the sound and capital 'S' to stop it.) These sequences are stored inside of the patterns array on line 16. Each tab on the canvas is given a set of characteristics that check whether it has been clicked and tell it how to appear on the canvas. When we click on a tab, the `mousePressed()` function is called. Inside this function the current set of notes is removed from the sequence, followed by a test to check which tab was clicked, and then based on that tab, a new set of notes is added into the `Tone.Sequence()` object. 

So what does this mean for you? I'm fairly sure that you won't be recreating this code for an assignment in this class. The key points to take a way from this example is how you can set up a conditional statement to check where the mouse is being clicked on the screen and define specific sequences to play based on that location. also, just like before, you do not have to change the entire sequence as part of this test. instead of replacing the sequence on line 139, the code creators could have altered some other parameter of the synthesizer or the sequence. Try thinking of ways you could utilize these ideas to modify the Paint App to contain dynamic audio interactions. 

---
