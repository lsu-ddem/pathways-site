---
title: "Rhythm and Tuning"
weight: 4
---

The last application of the internal clock that we will discuss before moving into the next assignment will be automatically assigning pitches and rhythms together in order to create more rhythmically complex melodies. To make this easier, we can utilize a few more addon libraries.

<!-- <a href="/slides/sound/rhythm-and-tuning-slides" target="_blank">View slides</a> -->

## Tone-rhythm

Lets say that you wanted to crete a song in P5. You knew the melodies and rhythms, but so far we haven't been able to program more than occasional sub-divisions into a sequence. This problem brings up the following question: how do you match a rhythm and pitch array together to create the melody you want? 

Lets look at the example below to try and recreate part of the melody of "Maria" from _West Side Story_.

```
const mariaDurations = ['8n', '8n', ['2n', '4n'], '8n', '4t', '4t', '4t', '4t', '4t', '4t', '8n', ['2n', '4n'], '8n', '8n', '8n', '8n', '8n', ['4n', '8n'], '8n', '8n', '8n', '8n', '8n', '4n', '4n', ['2n', '4n', '8n'], '8n', '8n', ['2n', '4n'], '8n', '4t', '4t', '4t', '4t', '4t', '4t', '8n', ['2n', '4n'], '8n', '8n', '8n', '8n', '8n', ['4n', '8n'], '8n', '8n', '8n', '8n', '8n', '4n', '4n', ['2n', '4n', '8n']];

const mariaPitches = ["Eb4", "A4", "Bb4", "Eb4", "A4", "Bb4", "C5", "A4", "Bb4", "C5", "A4", "Bb4", "Bb4", "A4", "G4", "F4", "Eb4", "F4", "Bb4", "Ab4", "G4", "F4", "Eb4", "F4", "Eb4", "G4", "Eb4", "A4", "Bb4", "Eb4", "A4", "Bb4", "C5", "A4", "Bb4", "C5", "D5", "Bb4", "D5", "Eb5", "D5", "C5", "Bb4", "D5", "D5", "Eb5", "D5", "C5", "Bb4", "D5", "Eb5", "F5"];
```

The first solution that comes to mind might be to manually line up each pitch with its duration as shown below.


```
{"time" : 0, "note" : "C3", "velocity": 0.9},
{"time" : "0:2", "note" : "C4", "velocity": 0.5}
...
```

While this could work, there is a much easier and less time consuming option that we can utilize:  [Tone-rhythm](https://github.com/scraggo/tone-rhythm/blob/master/src/tone-rhythm.js#L102)

Tone-rhythm is one more addon library that does exactly what we need and feeds the material into a part that `Tone.Sequence()` can read. To add this library into your project, simply copy this line into your HTML file like we have done for the previous two libraries. Remember that You will have to have `Tone.js` installed as well for this to work.

```
  <script src="https://unpkg.com/tone-rhythm@0.0.2/dist/tone-rhythm.min.js"></script>
```

You can see the [source code](https://github.com/scraggo/tone-rhythm) of this library by following the link.
  
---

## using Tone-rhythm:

Now that Tone-rhythm is installed, it it time to apply it to our melody components to generate our vocal line. 

<iframe height="300" style="width: 100%;" scrolling="no" title="Tone-rhythm - Maria " src="//codepen.io/lsuddem/embed/zbNyeK/?height=300&theme-id=35490&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/zbNyeK/'>Tone-rhythm - Maria </a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

First we have to combine them together with the `.mergeMusicDataPart()` method of toneRhythm. To do this, we need to tell the library which elements to use for the note pitches and note durations. we can store this information inside of a variable. 


```
const mergedData = toneRhythm.mergeMusicDataPart({
  rhythms: mariaDurations,
  notes: mariaPitches
});
```
The next step is to set up this information so that Tone.js can read it by creating a new part. Once this has been done, we can start the transport and trigger he playback like normal.

```
const melodyPart = new Tone.Part((time, value) => {
  synth.triggerAttackRelease(value.note, value.duration, time);
}, mergedData).start(0);
```

<!-- The [starter code](https://codepen.io/lsuddem/pen/qvRgOp) for this example can be found at this link.  -->

---

## Scales and tuning

A scale set of notes in a given pattern. In Western Music come of these common patterns include major, minor, chromatic and whole-tone.

- notes in a C major scale: C D E F G A B 
- notes in a F natural minor scale:  F G Ab Bb C Db Eb


By adding in the [scale maker](https://github.com/davidcole1977/scale-maker) library, we can have the program define these scales for us before giving the information to toneRhythm and Tone.js.


### Creating a Scale 

To create a scale with [scale maker](https://github.com/davidcole1977/scale-maker), first we need to add the library into our project.

```

 <script src="https://unpkg.com/scale-maker@0.2.2/lib/scaleMaker.min.js"></script>

```

Once we have added in the library, we can then store our scale inside of a variable to be used by other parts of our code. To create this scale we need to use `ScaleMaker.makeScale.inHertz`

```

let myScaleInHertz = ScaleMaker.makeScale('naturalMinor', 'F#3', 9).inHertz;

```

The arguments for this function are the scale pattern you want to use, the starting pitch to begin the scale on, and how many notes to play in that scale. In this example we are converting the notes into frequency numbers in the background so that they can be easily passed into the various libraries.

The scale pattern options are:

* 'major'
* 'naturalMinor'
* 'harmonicMinor'
* 'melodicMinor'
* 'chromatic'
* 'wholeTone'
* 'majorPentatonic'
* 'minorPentatonic'
* 'kuomiPentatonic'
* 'chinesePentatonic'

Both the scale type and starting notes are passed in as strings, and the note count is an integer number.

Once we have created the scale, we can feed it into the `toneRhythm.mergeMusicDataPart()` function like we did in the previous example. You can speficy the rhythm that you want your synthesizer to play through the scale in this step.

```
// collecting all of the materials to feed into toneRhythm
const pitches = myScaleInHertz 
const durations = ['8n', '8n', '8n', '16n', '2n', '16n', '8n', '8n', '16n']
console.log(pitches.length === durations.length)
// combine them together 
const mergedData = toneRhythm.mergeMusicDataPart({
  rhythms: durations,
  notes: pitches
});
```

Once we have done this, the steps are identical to the previous example. 


<iframe height="300" style="width: 100%;" scrolling="no" title="Tone + Teoria - Scales / Chords" src="//codepen.io/lsuddem/embed/pYRGeb/?height=300&theme-id=35490&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/pYRGeb/'>Tone + Teoria - Scales / Chords</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<!-- [starter](https://codepen.io/lsuddem/pen/GereRg?editors=0011) -->



### Tunings

In addition to traditional western scale, we can utilize the [Tune.js](https://github.com/abbernie/tune) in order to define our own microtonal scales.

  * a scale with divisions smaller than a half-step.

Below is a demo of the tune.js library where you can choose from various microtonal scales and hear their output.

<iframe src="https://abbernie.github.io/tune/" width="100%" height="500px"></iframe>

We will come back to this after discussing Control Patterns in greater detail, but you can add this library to your projects by including this line in your HTML file.

```
<script src="https://cdn.jsdelivr.net/gh/abbernie/tune/tune.js"></script> 
```

---

## Control Patterns

Control patterns are a part of the `Tone.js` library used to control various elements and automatons with `Tone.Transport()`. There are four different control patterns that behave in different ways. We have already briefly seen Tone.CtrlPattern in the [Building a Sequence](https://pdm.lsupathways.org/3_audio/2_synthsandmusic/2_lesson_2/buildingasequence/) section, but now lets dive a little deeper into what these do.

- Tone.CtrlPattern(values, pattern)
  - used in Tone.Pattern.
  - runs through an array of notes in a specific order:

| Parameter (string)     | Description                                                                   |
| ---------------------- | ----------------------------------------------------------------------------- |
| 'up'                   | cycles upward through the values.                                             |
| 'down'                 | cycles downward through the values.                                           |
| 'upDown'               | cycles upward then downward through the values.                               |
| 'downUp'               | cycles downward then upward through the values.                               |
| 'alternateUp'          | jumps up two then down one through the values.                                |
| 'alternateDown'        | jumps down two then up one through the values.                                |
| 'random'               | randomly selects a value.                                                     |
| 'randomWalk'           | randomly selects a value from one index away from the current value.          |
| 'randomOnce'           | randomly selects a value without repeating until all values have been chosen. |



- [Tone.CtrlMarkov(values)](https://tonejs.github.io/docs/13.8.25/CtrlMarkov.html)
  - uses a [markov chain](https://brilliant.org/wiki/markov-chains/) to determine the next value in the array to select.
    - a sequence of possible events in which the probability of each event depends only on the state attained in the previous event.
  - can algorithmically switch between musical phrases without the need to program additional logic. 
- [Tone.CtrlRandom(min, max)](https://tonejs.github.io/docs/13.8.25/CtrlRandom.html)
  - returns a random number within a given range.
  - same as p5's `random()` function. 
- [Tone.CtrlInterpolate(values, index)(https://tonejs.github.io/docs/13.8.25/CtrlInterpolate.html)]
  - interpolate between a list of numbers
  - similar to p5's map()

---

## combining control Patterns and tuning 

The example below combines elements from `Tune.js` and `Tone.js` in order to create different scales and patterns. To do this we first have to define a new scale tuning to use:

```
let tune;

function setup(){
tune = new Tune();
}
```

We can then specify a pre-made scale, the tonic note of that scale, and how to output the values with the `.loadScale(string)`, `.tonicize(frequency)`, and `.mode.output` methods  and property respectively.

```
 tune.loadScale('ji_12');
 tune.tonicize(440);
 tune.mode.output = 'frequency';
```

Looking through the code in more detail below, we can see how this scale is then loaded into a synthesizer, and then the sequence is fed into teo different control patterns. CtrlPattern is set to randomly move between all of the notes, where as CtrlMarkov has the probabilities of moving to each potential value set. 

<iframe height="300" style="width: 100%;" scrolling="no" title="Tone Ctrl and Tuning" src="//codepen.io/lsuddem/embed/QodXJm/?height=300&theme-id=35490&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/QodXJm/'>Tone Ctrl and Tuning</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The buttons and sliders come from another external library to give them a unique look, but they function just like the ones built into P5. by interacting with them, you can change the probability of moving through the scale for each control pattern. Try changing the scale type inside of `tune.loadScale()` to one of the options given in code comments to see how the patterns change.

<!-- [starter](https://codepen.io/lsuddem/pen/PLWMWQ?editors=1011) -->

---
