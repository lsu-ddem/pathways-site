---
title: "Scheduling Signals"
weight: 2
---

In addition to programming notes and events, we can also schedule changes to an audio signal. This will allow us to automate any processing of our sound synthesis or sound file playback.

<!-- <a href="/slides/sound/scheduling-signals-slides" target="_blank">View slides</a> -->

## Setting & scheduling values

Calling these properties of our `Tone.Synth()` will set the value when ever you trigger it
  
```
oscillator.frequency.value; //returns the current frequency value
oscillator.frequency.value = 100; //sets the value to 100Hz immediately
```

In order to schedule value changes, you will need to utilize the following methods with the object that is outputting an audio signal. You may have noticed a few of these in the code examples on the previous page.

- **setValueAtTime(value, time)** - to schedule a value change at a precise time after the command is given.
- **linearRampToValueAtTime(value, endTime)** - to ramp to a value starting from the previously scheduled value over a given amount of time.
- **exponentialRampToValueAtTime(value, endTime)** - same as the above, but with an exponential curve instead of a linear curve.
- **setTargetAtTime(value, startTime, timeConstant)** - unlike the RampValueAtTime methods, in setTargetAtTime, the time attribute is when it should start ramping towards the value instead of arrive at the value. It takes a third parameter which is the time constant at which it will change.
- **setValueCurveAtTime(values, startTime, duration, scaling)** - sets an array of values which will be evenly invoked over the course of the duration.
- **cancelScheduledValues(time)** - cancels all values after the specified time.

---

## Ramping values on command

If you want to manually trigger changes in signal values, you can utilize the following methods. They function like their counterparts above, but without the time elements. You must set up a trigger that will start the ramping automatically.

- **linearRampTo(value, rampTime)** - set a value and a ramp time and the signal will begin linearly ramping towards that value.
- **exponentialRampTo(value, rampTime)** - same as above but exponential ramp.
- **rampTo(value, rampTime)** - same interface as the above methods, but will automatically decide to use linear or exponential based on the units of the signal.

---

## Time and musical notation

As a refresher, we can specify times, beats and durations in various ways

- Number: seconds
  - 1.2: 1.2 seconds 
- String: synchronized to the `Tone.Transport()` '2:1:2' is measure two, beat 1, 2 subdivisions 
- Musical Beats & Subdivisions
  - Speed is relative to the `Tone.Transport.bpm` value
    - "4n" = quarter note
    - "8t" = eighth note triplet
    - "2m" = two measures
    - "8n." = dotted-eighth note
    - etc.

### Relative time 

You can prefix any of the above with "+" and it will be interpreted as "the current time plus whatever expression follows"

 - "+1m" = 1 measure from now
 - "+0.5" = half a second from now

---

## scheduling examples

- see the [Tone.Signal](https://tonejs.github.io/docs/r13/Signal) reference material for specifics and parameters that you can utilize these signal changes with.
  
This code example shows off each of the different types of signal change by adjusting the volume of computer generated pink noise. you can both hear the difference in loudness, as well as see the numerical values change in real time by clicking on the buttons. 

{{% codepen 600 yZrROR %}}

Try changing the parameters of the various ramp methods to see how they can affect the sound.

<!-- [starter](https://codepen.io/lsuddem/pen/daLEpG?editors=0010) -->

---

# Creating LFOs to make automatic effects

---

## remaking effects with lfos

We can usesignal scheduling to generate an LFO that we can then use to remake any effect with 'auto' in the name. This auto effect will perform changing manipulations to the audio signal automatically.

- autowah, autopanner, autofilter
- also tremolo, vibrato
  - a fast tremolo effect is the same as amplitude modulation
   - a fast vibrato is the same as frequency modulation

Tone.js has some [examples](https://tonejs.github.io/examples/lfoEffects.html) of a few of these effects built into its website. You can experiment with a few of them by following the link.

---

<!-- ### Tremolo and Vibrato

{{% codepen 600 VgNOVb %}}

 -->

<!-- [starter](https://codepen.io/lsuddem/pen/ErzRmz) -->



### Autofilter and Autopan

To use an LFO to automatically control an effect parameter, you can follow these steps: 

1. Create the effect chain as you normally would.
2. Once you have connected your oscilator or sound file playback, create a new `Tone.LFO()` object.
  * the arguments are:
    * frequency: how fast the signal changes
    * minumum: lowest value of the signal
    * maximum: highest value of the signal
3. Use `Tone.Connect()` to set the output of the LFO to the desired parameter.
4. Tell your LSO to begin with the `start()` method.
  * you can enable or disable the automatic changes with `Tone.LFO().stop()` and `Tone.LFO().start()`

```
autoFilter = new Tone.LFO(2, 200, 1000).connect(filter.frequency).start();
autoPan = new Tone.LFO(1, -1, 1).connect(panner.pan).start();
```

{{% codepen 600 VgNOVb %}}



<!-- [starter](https://codepen.io/lsuddem/pen/ErzeKo?editors=1011) -->