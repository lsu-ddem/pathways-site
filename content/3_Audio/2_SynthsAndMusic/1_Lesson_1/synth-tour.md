---
title: "Synthesizer Examples"
weight: 10
---

Over the course of the past several chapters we have gone over how to build simple synthesizers using Tone.js. This page serves as a series of examples and the ideas behind different, more complex synthesizers.



#  Simple Synths 
  
This is where we left of. We can generate a sound with an oscillator, apply an envelope, maybe a filter, and then send the output to the master speakers.
![](https://docs.google.com/drawings/d/1-1_0YW2Z1J2EPI36P8fNCMcZG7N1w1GZluPs4og4evo/pub?w=1163&h=231)

---

## PolySynth

We can create multiple copies of these in order to generate multiple notes at once. We could do this manually by creating multiple `Tone.Synth()` objects with varying settings and identical triggers, or you could utilize the `Tone.Polysynth()` object.  

This is an [example](https://tonejs.github.io/examples/polySynth.html) of what the object can do, and what parameters are available. 

---

## MonoSynth

This kind of synth applies an envelope to the filter applied to a sound, in addition to the amplitude envelope being applied to the sound's loudness.
  
![monosynth diagram](https://docs.google.com/drawings/d/1gaY1DF9_Hzkodqf8JI1Cg2VZfwSElpFQfI94IQwad38/pub?w=924&h=240)


* `FilterEnvelope()` is similar to `ScaledEnvelope()` but with musical values.
  * see: [FrequencyEnvelope docs](https://tonejs.github.io/docs/r13/FrequencyEnvelope) for more information on the object
  * parameters only noticeable with longer amplitude envelopes
  * baseFrequency - min
  * octaves - max

---

<iframe height="265" style="width: 100%;" scrolling="no" title="Synth - Presets - MonoSynth - Pianoetta" src="//codepen.io/lsuddem/embed/rRBwxo/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/rRBwxo/'>Synth - Presets - MonoSynth - Pianoetta</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---
 
## DuoSynth

Utilizes two different `monoSynth()` objects and the ratio between them (also called harmonicity) to generate a modulated sound output.

![diagram](https://docs.google.com/drawings/d/1bL4GXvfRMMlqS7XyBm9CjL9KJPSUKbcdBNpqOlkFLxk/pub?w=1012&h=448)

Parameters include;

*  vibratoAmount
*  vibratoRate
*  harmonicity
   *  ratio between two voices, 1 - 2
   *  1 - no change
   *  2 - an octave change
*  portamento
   *  glide time between notes, like a slide on a guitar
  
---

<iframe height="265" style="width: 100%;" scrolling="no" title="Synth - Presets - DuoSynth - preset1" src="//codepen.io/lsuddem/embed/GeKEyE/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/GeKEyE/'>Synth - Presets - DuoSynth - preset1</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

## AMSynth

Creates sound through [amplitude modulation](https://en.wikipedia.org/wiki/Amplitude_modulation), or AM. AM is achieved by combining one signal with another. The [example](https://tonejs.githubio/examples/amSynth.html) here shows how to use `Tone.AMSynth()` to generate various amplitude modulations simply. You can manually create amplitude modulations with more control, but this method is a little more user friendly at first. To modulate a signal, you can send the output of one oscillator to adjust a parameter of another, like with LFOs or sliders from the previous sections.

---

## FMSynth

[Frequency Modulation](https://en.wikipedia.org/wiki/Frequency_modulation) is a more complex version of modulation, but it can result in a larger variety of sound outputs. many of which are great for use in video games. rather than altering the amplitudes of the original frequency, FM will modulate the frequencies.

![diagram](https://docs.google.com/drawings/d/1h0PUDZXPgi4Ikx6bVT6oncrYPLluFKy7lj53puxj-DM/pub?w=902&h=462)

The modulation index is essentially the amound of modulation occuring. It is the ratio of the frequency of the modulating signal (mf) to the amplitude of the modulating signal (ma) – as in ma/mf.

<iframe height="265" style="width: 100%;" scrolling="no" title="Synth - Presets - FMSynth - Kalimba" src="//codepen.io/lsuddem/embed/XGrgPr/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/XGrgPr/'>Synth - Presets - FMSynth - Kalimba</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

## NoiseSynth

This object generates noise.
  
<iframe height="265" style="width: 100%;" scrolling="no" title="Synth - Presets - NoiseSynth" src="//codepen.io/lsuddem/embed/ywBXrW/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/ywBXrW/'>Synth - Presets - NoiseSynth</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
  
---

## MetalSynth
  
Utilizes a highly filtered FM signal to create noisy, metallic sounds; similar to cymbals. 
  
---

<iframe height="265" style="width: 100%;" scrolling="no" title="Synth - Presets - MetalSynth - hihat" src="//codepen.io/lsuddem/embed/pYzrNz/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/pYzrNz/'>Synth - Presets - MetalSynth - hihat</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

## MembraneSynth

 utilizes both amplitude and frequency envelopes to replicate drums and other instruments with a membrane that can be hit.


<iframe height="265" style="width: 100%;" scrolling="no" title="Synth - Presets - MembraneSynth - Kick" src="//codepen.io/lsuddem/embed/XGraJm/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/XGraJm/'>Synth - Presets - MembraneSynth - Kick</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

Now that we have a through understanding of how we can create and customize synthesizers inside of Tone.js, lets discuss how to program automatic melody sequences that we can utilize in our codes. 