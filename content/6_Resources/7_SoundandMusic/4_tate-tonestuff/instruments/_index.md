---
title: "Sound Synthesis"
weight: 11
chapter: true
---

Here we learn about synthesizer instruments and how to trigger them.

### Building block of Synthesizers:

All synthesizers are built off of an oscillator: something that moves between two states in a repeated fashion at a given speed. The one we utilize within this course is `Tone.Oscillator()`. When triggered the object generates numbers that will produce a certain sound when sent to the computer's Digital-to-Analog converter. By changing the waveform we can change how the oscillator transitions between the two states, which will alter the timbre of the sound. We can also adjust how many times per second that the oscillator transitions in order to adjust the pitch. Below is an instructors video on the concept of oscillators, which can be physical or digital.

<iframe width="560" height="315" src="https://www.youtube.com/embed/xyVFIPtOsm8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

All of the synthesizers listed on the next page are built our of different combinations of the basic `Tone.Oscillator()`, as well as other parameters and effects to generate their unique tone.

<iframe width="560" height="315" src="https://www.youtube.com/embed/X76j7v6n-V8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

### Amplitude Envelopes: ADSR

In addition to adjusting the timbre of a sound by adjusting the waveform, we can adjust its envelope in order to give the sound a unique shape. This gives the synthesized sound a unique volume contour over time. Without an envelope, the synthesized sounds would either be on or off with no variations between the states. By adjusting the 4 components of the envelope (attack, decay, sustain, and release) we can custom design exactly how we want our sounds to be shaped. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/9SMi47AEnSo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

![adsr](/images/graphics/adsr.jpg)


---

This playlist contains all of te videos from the series that are given throughout this page.

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL6gRE6x7kQfpDQ3v0rnP872jdNGwpskez" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
