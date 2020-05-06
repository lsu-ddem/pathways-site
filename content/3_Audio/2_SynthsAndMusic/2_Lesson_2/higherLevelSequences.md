---
title: Higher level sequencers
weight: 1
---

So far we have only utilized `Tone.Transport()` to schedule musical note playback, but remember, this object functions as an internal clock within the Tone.js library. Once we have started the transport, we can utilise this clock in order to program, schedule, and execute specific events in our code.
  
## Event

* abstracts away Tone.Transport.schedule and provides a schedulable callback for a single or repeatable events along the timeline
* loop
  * true of false
* loopEnd
* loopStart
* mute
  * won't fire if mute is true

---

* playbackRate
  * interval if looped
* probability
  * add randomness to note triggered probability
* progress
  * where are we in the loop?

---

 * https://codepen.io/lsuddem/pen/bZGwaz?editors=0011

---
  
## Part

*  collection Tone.Events which can be started/stopped and looped as a single unit.
*  https://codepen.io/lsuddem/pen/aMbBPa


