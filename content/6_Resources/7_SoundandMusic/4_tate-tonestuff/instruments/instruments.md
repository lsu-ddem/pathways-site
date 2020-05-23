---
title: Instruments
weight: 1
---

A code instrument is a combination of a synthesizer various envelopes, parameters, and effects placed on it so that the object now has its own unique timbre and controls. Because we are building our own instruments from the ground up whenever we code them, we can have an extremely precise level of control in how the user can interact with the instrument and what kinds of sounds it can produce.

## Types of synths in Tone.js

Here is a tutorial video for creating a basic synthesizer in P5 and Tone:

<iframe width="560" height="315" src="https://www.youtube.com/watch?v=NbR9JTEcanQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Basic Synth 

The Tone.Oscillator is the most basic synth. it can play a single note at a time in a single waveform. You will need multiple oscillators in order to play multiple notes at one time. [Tone.Synth()](https://tonejs.github.io/examples/simpleSynth.html) is the most basic synthesizer which combines this oscillator with an envelope to generate a sound when triggered.

### MonoSynth

[Tone.MonoSynth()](https://tonejs.github.io/examples/monoSynth.html) is slightly more complex than the basic synthesizer. This instrument adds a filter with its own envelope to the synthesizer in order to generate a more complex sound.

### FMSynth

[Tone.FMSynth()](https://tonejs.github.io/examples/fmSynth.html) is comprised of two different Tone.Synth() objects, and uses one of those oscillators to modulate the *frequency* of the other. The video below briefly summarizes the idea of FM Synthesis.

<iframe width="560" height="315" src="https://www.youtube.com/embed/vvBl3YUBUyY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### AMSynth

[Tone.AMSynth()](https://tonejs.github.io/examples/amSynth.html) is set up similarly to `Tone.FMSynth()` in the fact that it has two oscillators set up so that one is affecting the other. In this case however, the first oscillator is altering the *amplitude* of the second one. The video below shows the basics of this process.

<iframe width="560" height="315" src="https://www.youtube.com/embed/3ZMPcPR7W3Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### PolySynth

[Tone.PolySynth()](https://tonejs.github.io/examples/polySynth.html) combines multiple synthesizers into one object in order to be able to play multiple notes at once. Each of these can be manually adjusted to create multiple voices within one instrument.

### FatOscillator

[Tone.FatOscillator()](https://tonejs.github.io/examples/jump.html) combines multiple oscillators to play the same note, but they are slightly detuned from each other in order to 'fatten up' the sound. This instrument functions similarly to a chorus effect.

### Percussion Synthesizers

[Tone.MetalSynth() and Tone.MembraneSynth()](https://tonejs.github.io/examples/jump.html) combine six different `Tone.FMOscillator()` objects in order to generate metallic and drum sounds respectively. This is achieved by adjusting the tuning between the different oscillators for each instrument, and applying different envelopes to each (they are all relatively short however.)

### Granular Synthesis

[Tone.GrainPlayer()](https://tonejs.github.io/examples/grainPlayer.html) uses the process of granular synthesis in order to generate itd tones. In this process, short samples called grains are sampled from a larger sound and processed and sequenced in order to create a new composite sound. The video below explains the process in more detail.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ftDLRYnRYZQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## Hardware Synthesizer instruments

In this class we mainly focus on software synthesizers, however there are many kinds of physical synthesizers available on the market as well. Below are a few common styles/models of synthesizer. All of these synthesizers function along the idea of generating a sound with an oscillator and patching the signal through various effects before outputting the final audio.

<iframe width="560" height="315" src="https://www.youtube.com/embed/n3K_fZDvINs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/W8I9kPTv1Dg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/L-7btbCLqF8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/tVBKto6Cfqo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/Uhtar8FlgzU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## Timing 

This is a tutorial video for creating basic small scale musical sequences in P5 and Tone:

<iframe width="560" height="315" src="https://www.youtube.com/watch?v=yGp1Y1SJru8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

We can use the idea of sequencing to schedule small-scale musical events. We can store these events and schedule them on a larger scale in order to create multiple event playback.

---


