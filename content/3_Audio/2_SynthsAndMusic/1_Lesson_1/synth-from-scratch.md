---
title: synth making from scratch
weight: 2
---

<a href="/slides/sound/synth-from-scratch-slides" target="_blank">View slides</a>

### Building blocks: Sources and Signals

- A [source](https://github.com/Tonejs/Tone.js/wiki/Sources) in tone is something that produces a sound on its own. 
- Sources are combined to make more complex synthesis and sampling instruments. Sources need to be started with .start().

---

- A [signal](https://github.com/Tonejs/Tone.js/wiki/Signals) is something that processes a source. 
- Signals are combined to make effects and components. 
- Signals are set by using .value = a number

---

### Oscillators

The most basic unit of synthesis in tone is [Tone.Oscillator](https://tonejs.github.io/docs/r11/Oscillator). 

* Sine
* Triangle
* Sawtooth
* Square

[example](https://tonejs.github.io/examples/oscillator.html)

---

## Enevelopes 

- [Tone example](https://tonejs.github.io/examples/envelope.html)

---

## ADSR

- Attack time is the time taken for initial run-up of level from nil to peak, beginning when the key is first pressed.
- Decay time is the time taken for the subsequent run down from the attack level to the designated sustain level.
- Sustain level is the level during the main sequence of the sound's duration, until the key is released.
- Release time is the time taken for the level to decay from the sustain level to zero after the key is released.


---

## Filters

- A [filter](https://tonejs.github.io/docs/r11/Filter) modifies a source sound by either amplifying or attenuating certain frequency ranges of that sound.

---

### Filter types can include:
* lowpass
* highpass
* bandpass 
* lowshelf 
* highshelf 
* notch 
* allpass
* peaking 

---

### Noise

- [Tone.Noise](https://tonejs.github.io/docs/r11/Noise) produces different colors of noise. 
- Each has a different sound, covers a different frequency range,  and is used for different purposes. 
- There are other colors of [noise](https://en.wikipedia.org/wiki/Colors_of_noise) that tone doesn't implement that are good to know about.  

---

## Most often used types

* white
* brown
* pink
  
---

## click left arrow for noise

<iframe height="300" style="width: 100%;" scrolling="no" title="PDM Sound - Tone.Noise remake" src="//codepen.io/lsuddem/embed/VdxRxz/?height=300&theme-id=35490&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/VdxRxz/'>PDM Sound - Tone.Noise remake</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[starter](https://codepen.io/lsuddem/pen/ZwwBPL?editors=0010)

---

## Envelopes example

<iframe height="300" style="width: 100%;" scrolling="no" title="PDM Sound - Envelopes" src="//codepen.io/lsuddem/embed/OddbRB/?height=300&theme-id=35490&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/OddbRB/'>PDM Sound - Envelopes</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[starter](https://codepen.io/lsuddem/pen/bzzBgZ)

---

## More envelopes

<iframe height="300" style="width: 100%;" scrolling="no" title="PDM Sound - More Envelopes " src="//codepen.io/lsuddem/embed/rPPWwL/?height=300&theme-id=35490&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/rPPWwL/'>PDM Sound - More Envelopes </a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[starter](https://codepen.io/lsuddem/pen/Oddbgr)

---

## LFO (Low Frequency Oscillator)

<iframe height="300" style="width: 100%;" scrolling="no" title="PDM Sound - LFO" src="//codepen.io/lsuddem/embed/JxxbMy/?height=300&theme-id=35490&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/JxxbMy/'>PDM Sound - LFO</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[starter](https://codepen.io/lsuddem/pen/QYYGmL)