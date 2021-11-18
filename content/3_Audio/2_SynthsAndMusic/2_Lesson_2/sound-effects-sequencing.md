---
title: "Sound Effects with Sequencing"
weight: 5
---


<!-- <a href="/slides/sound/sound-effects-sequencing-slides" target="_blank">View slides</a>

--- -->

This page contains multiple examples of various sound effects that utilize sequencing. Each code will contain a description of how it utilizes a sequence, but be sure to take the time to explore how each example functions. Also feel free to duplicate the code and develop your own versions of these effects for additional experience.

## Bubbles with sound

Click on the bubbles!

<iframe height="490" style="width: 100%;" scrolling="no" title="Bubbles with sound!" src="//codepen.io/lsuddem/embed/rROVea/?height=490&theme-id=35490&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/rROVea/'>Bubbles with sound!</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

This example, inspired by [HackPact](https://github.com/stc/HackPact), starts be generating 10 circles of random sizes and positions around the canvas. The code then uses the circle's horizontal position to determine a pitch, and size to determine a volume. THese values are then applied to a synthesizer that is triggered to play whenever the circle is clicked on.

---

## Massive impact

Click the button (watch your volume level before interacting with this code)

<iframe height="490" style="width: 100%;" scrolling="no" title="Massive Impact" src="//codepen.io/lsuddem/embed/moyYbx/?height=300&theme-id=35490&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/moyYbx/'>Massive Impact</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

This example crates an instrument that plays back a long, loud synthetic impact sound when triggered with the on-screen button. This instrument has multiple effects applied to the synthesizer, and each of them has one or more parameters scheduled to ramp to a new value once the start button has been clicked. By combining filters, delays, and reverb to what would normally be a simple 'C4' note, we are able to generate this automated effect.

<!-- [starter](https://codepen.io/lsuddem/pen/eXNXMy?editors=0010) -->
---
## Rain on a tin roof

click the start button to start raining.

<iframe height="490" style="width: 100%;" scrolling="no" title="Rain on a tin roof " src="//codepen.io/lsuddem/embed/ZPYdLa/?height=300&theme-id=35490&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/ZPYdLa/'>Rain on a tin roof </a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

This code, like the previous one, generates sound via a synthesizer instrument and effects. However, instead of automating the parameters of those effects, the sequencing and scheduling is applied to the loop that begins when the start button is clicked. The loop is set to trigger and repeat a certain number of times on the trigger, but is given a probability value to increase the randomness of the event occurring. This causes the metallic hit to happen continually, but in a random fashion, simulating rain on a tin roof.

<!-- [starter](https://codepen.io/lsuddem/pen/wOaOxW?editors=1010) -->

---

## Sirens

Click the button to start the alarm.

<iframe height="490" style="width: 100%;" scrolling="no" title="Sirens" src="//codepen.io/lsuddem/embed/oVXyaE/?height=300&theme-id=35490&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/oVXyaE/'>Sirens</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

This effect Applies an LFO to the cutoff frequency a filters connected to 8 different noise synthesizers. The LFO is used to oscillate that cutoff frequency back and forth as various rates, and delay the entrance of each synthesizer to create the building effect. By changing the LFO parameters independently of each other using a for loop, we are able to generate a much more complex effect than with just one LFO.

<!-- [starter](https://codepen.io/lsuddem/pen/jJPJoL?editors=0010) -->

---

Before we move on to the chapter assignment, which will have you combine your knowledge of synthesizers and sequences to create a new code, lets review what we have learned so far because there has been a lot of information given in the past few pages.

---