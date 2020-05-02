---
title: 'Building a sequence'
weight: 1
---

In order to build a sequence we need threefour main items:

* the elements in the order we want them sequenced
* how fast we want the sequence to occur
* a synthesizer to generate th sounds
* a trigger to begin or end the sequence. 

## Timing Notes

To use any sequencing functions ```Tone.Transport()``` must be started. This object handles the internal clock for the timing of various musical events that occur within Tone.js. Some of its parameters include:

 - **start** 
 - **stop**
 - **toggle** - go between start and stop
 - **seconds** - get current position in seconds
 - **position** - get bars:beats:sixteenths
 - **bpm** - beats per minute


See <a href="https://tonejs.github.io/docs/r13/Transport" target="_blank">documentation</a> for more information. 

The example below contains all three elements above in order to generate a musical sequence. To create your own musical sequence, follow the steps below:

1. create your synth with information from the previous chapter. 
2. create an array containing all of the notes in the order you want them read.
    * each element in the array is one beat in the `Tone.Transport()` object.
    * nesting an array with this array will create subdivisions of those beats. 
3. create a variable to store this sequence. The next step becomes a little more complicated.

```
sequence1 = new Tone.Sequence();
```

4. open up a function within the .Sequence parentheses and format it as shown below. This lets us trigger the notes present in the array called melody. each element will be a quarter note at the transport's tempo.

```
sequence1 = new Tone.Sequence(function(time, note) { 
    simpSynth.triggerAttackRelease(note, 0.5);
  }, Melody, '4n');
```

5. you can change the interpretation of the melody by changing the third argument of `Tone.Sequence()`.
    * 16n: 16th nots
    * 8n: 8th note
    * 4n: quarter note
    * 2n: half note
    * 1n: whole note
6. next we can set the parameters of `Tone.Transport()` shown above.
7. The final step is to set the trigger to begin the sequence. You could include the `.start()` method at the end of the setup function to have music that begins automatically, or set up a condition to trigger/stop the sequence based on certain conditions. (remember to always use mousePressed(), mouseReleased(), keyPressed() and/or keyReleased() for these triggers)

{{% codepen 500 QWjvbzq %}}


Below are a few  more examples examples of sequences in various contexts.

### Another Basic Synthesizer

{{% codepen 500 NzZNBp %}}

### Modifying a Sequence During Performance

{{% codepen 500 dKjLpR %}}

### Removing and Replacing Patterns in the Same Sequence

{{% codepen 500 wXVVgX %}}
