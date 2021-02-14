---
title: Higher Level Sequencers
weight: 1
---

So far we have only utilized `Tone.Transport()` to schedule musical note playback, but remember, this object functions as an internal clock within the Tone.js library. Once we have started the transport, we can utilize this clock in order to program, schedule, and execute specific events in our code.
  
## Event

Events abstract away the Tone.Transport.schedule and provides the user with schedulable callback function actions to occur along the timeline. These events  can be scheduled to occur once, or multiple times for as long as the transport is running.

Tone.ToneEvent has a few useful parameters:

* loop: tells the event to repeat
  * true of false
  * you can also give a loop duration
* loopEnd: tells the event to stop repeating
* loopStart: tells the event to begin looping
* mute: turns event off and on
  * won't fire if mute is true
* playbackRate: speed the loop plays
  * 0.5 is half speed
  * 2.0 is twice as fast
  * etc.
* probability: likelihood of en event triggering or not
  * add randomness to note triggered probability
* progress: where are we in the loop?
  * range of 0-1


  {{% codepen 500 bZGwaz %}}

  The code above shows these aspects in action with two events: chords that occur on the downbeat of transport measure, but contain different notes and loop structures of probabilities of occurring. You can adjust these parameters as well as the transport tempo through the on-screen sliders and buttons. Experiment wit the code and the different parameters to get a feel for how you can control scheduled events.


---
  
## Part

Parts serve as a collection of multiple `Tone.ToneEvent()` which can be started/stopped and looped as a single unit.

{{% codepen 500 aMbBPa %}}

In this example we can see that the notes being played are now stored within the array `score`.

```
let score = [
    {"time": "0:0", "note": ["D4", "E4", "F4"]},
    {"time": "1:0", "note": ["F4", "A4", "C4"]}, 
    {"time": "2:0", "note": ["G4", "Bb4", "D4"]},
    {"time": "3:3", "note": ["A4", "A4", "E4"]}, 
  ];
  ```

  Inside of this array, we can see the event parameters stored in the JSON format. The information stored in this instance is the time within the transport that each event happens, and what will occur. In this case, three notes will be triggered as a chord. 

When we define the new `Tone.Part()`, we can then give it the score array as an argument.

```
 chord = new Tone.Part(
    (time, chord) => {
      console.log(chord.note, chord.time)
      synth.triggerAttackRelease(chord.note, "8n", time);
    }, score);
    ```

Then we can treat the part as an event with all of the same properties. You can see in the code excerpt above that this part will be used to trigger notes in our synthesizer (defined later) based on the tempo of the Tone.Transport() object. Again, experiment with the parameters to see how you can adjust the elements of a part.

---
