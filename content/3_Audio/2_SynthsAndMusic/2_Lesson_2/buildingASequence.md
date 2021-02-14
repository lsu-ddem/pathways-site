---
title: 'Building a sequence'
weight: 1
---

In order to build a sequence we need three-to-four main items:

* the elements in the order we want them sequenced.
* how fast we want the sequence to occur.
* a synthesizer to generate th sounds.
* a trigger to begin or end the sequence. (optional. This could be a never-ending sequence that begins as soon as the sketch is loaded)

---

## Timing Notes with Tone.transport()

To use any sequencing functions ```Tone.Transport()``` must be started. This object handles the internal clock for the timing of various musical events that occur within Tone.js. Some of its parameters include:

 - **start** 
 - **stop**
 - **toggle** - go between start and stop.
 - **seconds** - get current time position in seconds.
 - **position** - get current time position in bars:beats:sixteenths.
 - **bpm** - beats per minute. (tempo).

 To set the parameters for `Tone.Transport()`, you can simply call the parameters you wish to set in the `setup()` function. In the next code example this happens after all of the other code that is used to set up the synthesizer and the sequences. No matter what settings you use for `Tone.Transport()`, you **HAVE** to call `Tone.Transport.start()` in order for your sequence to be able to be triggered. You can't keep time to schedule events if you never start the clock!


Check out the <a href="https://tonejs.github.io/docs/r13/Transport" target="_blank"> Tone.js documentation</a> for more information on `.Transport()`. 

---

## Steps to Make a Sequence

The next code example contains all of the elements listed at the beginning of this section in order to generate a musical sequence. To create your own musical sequence, follow the steps below:

1. Create your synth with information from the previous chapter. 
2. Create an array containing all of the notes in the order you want them read.
    * each element in the array is one beat in the `Tone.Transport()` object.
    * nesting an array with this array will create subdivisions of those beats. 
3. Create a variable to store this sequence. The next step becomes a little more complicated.

    ```js
    sequence1 = new Tone.Sequence();
    ```

4. Open up a function within the `.Sequence()` parentheses and format it as shown below. This lets us trigger the notes present in the array called melody (if you copy this code, you will have ot make an array of notes and call it melody). each element will be a quarter note at the transport's tempo.

    ```js
    sequence1 = new Tone.Sequence(function(time, note) { 
        simpSynth.triggerAttackRelease(note, 0.5);
      }, melody, '4n');
    ```

5. You can change the interpretation of the melody by changing the third argument of `Tone.Sequence()`.
    * These values are all relative to the `Tone.Transport().bpm` parameter.
        * 16n: 16th nots (4 per beat)
        * 8n: 8th note (2 per beat)
        * 4n: quarter note (1 per beat)
        * 2n: half note (2 beats per note)
        * 1n: whole note (4 beats per note)
    * There are additional beat divisions of the tempo that we can use, as well as ways to discuss time using seconds, which we will discuss in higher level sequencing and scheduling.
6. Next we can set the parameters of `Tone.Transport()` shown above.
7. The final step is to set the trigger to begin the sequence. You could include the `.start()` method at the end of the setup function to have music that begins automatically, or set up a condition to trigger/stop the sequence based on certain conditions. (remember to always use mousePressed(), mouseReleased(), keyPressed() and/or keyReleased() for these triggers)

{{% codepen 500 QWjvbzq %}}


Below are a few  more examples examples of sequences in various contexts.


---

### Let's Practice!

Looking at the code and information above can you create a basic sequence of notes that play when the mouse is clicked?

Use this array of notes in your code:

```js

let melody = ["C3", ["E3", "G3", "D3", "C3"], "A3", "B2", "C2", "E3", ["A2", "G2"], "C4"];


```

Keep in mind that each element in the array is a single beat in our tempo. To make divided beats, we must an array within the desired element of our melody.

Once you have recreated this melody, try adding another of your own creation!

---

### Another Basic Synthesizer: musical pitches

This is another basic synthesizer sequence. In fact, they even have the same melody by default. The main difference is how to stop the sequence: this code uses `function keyPressed()` instead of `function mouseReleased()` Experiment with this code by changing the melody notes to see what kind of sounds you can come up with. 

{{% codepen 500 NzZNBp %}}

Musical pitches are labeled with their note names and octaves as if they were on a keyboard. Below is an image of an 88-key keyboard with all of the notes and their octaves labeled. Each letter designates a musical pitch (C-B), and the number designates a specific octave (0-8, with higher numbers meaning higher pitches.) Tone.js ustilizes this notation so that you do not have to memorize 88+ different sound frequencies in order to generate a simple sequence.

![](/images/graphics/keyboard.png)

---


<!-- This section has changed with the newest updates to Tone. Need to look at the code and re-write it to have everything work in V14. -->

<!-- ### Modifying a Sequence During Performance -->

<!-- This next code functions a little differently that the previous ones: you are able to change the contents being performed in real time by adjusting the slider. This is done by using the [Tone.CtrlPattern()](https://tonejs.github.io/docs/13.8.25/CtrlPattern.html) object ot process the melody array before it is fed into the sequence. With this object you can specify ways that Tone.js interacts with a pattern of notes given to it as an array. In this example, the pattern is set to 'Random once' which cycles through the given notes in a random order. By adjusting the probability value with the slider on line 46 we are able to change how likely it is that Tone.js will feed the next array index into the `Tone.Sequence()` on the following beat.

{{% codepen 500 dKjLpR %}}

We will discuss control patterns in more detail in the [Rhythm and Tuning](https://pdm.lsupathways.org/3_audio/2_synthsandmusic/2_lesson_2/rhythm-and-tuning/) section. -->

<!-- ### Removing and Replacing Patterns in the Same Sequence

This code interacts with `Tone.Sequence()` in a different way than any of the previous examples. You can start and stop the sequences by pressing the capital P and S keys respectively. (play and stop) Once the transport has started you are able to specify which of the melodies from the nested array is fed into `Tone.Sequence()` by clicking on the corresponding rectangular tab on the canvas.

{{% codepen 500 wXVVgX %}}

Looking at the code, we can see that these tabs are defined as a specific class of objects in the code. The majority of code within the setup and draw functions tell the tabs how to appear and behave once they are clicked. However, like most of the examples in this unit, the code to adjust the sound is located within `function MousePressed()`. We can see every time the mouse is clicked the code automatically removes the current notes from the sequence. Then, using a for loop, the code checks which tab is being clicked through custom function checkForClick() and uses the return of that function to trigger the change in appearance oon the canvas, as well as select the new melody from the nested array to give to `Tone.Sequence()`.

--- -->
