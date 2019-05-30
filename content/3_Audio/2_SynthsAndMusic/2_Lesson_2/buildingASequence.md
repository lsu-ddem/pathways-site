---
title: 'Building a sequence'
weight: 1
---

## Understanding Sequences

{{% codepen 500 NzZNBp %}}

## Modifying a Sequence During Performance

{{% codepen 500 dKjLpR %}}

## Removing and Replacing Patterns in the Same Sequence



{{% codepen 500 wXVVgX %}}

## Sequencing notes

* Tone.Transport
  * start
  * stop
  * toggle
    * go between start and stop
  * seconds
    * get current position in seconds
  * position
    * get beats:bars:sixteens
  * bpm
    *  beats per minute

---

  * schedule
  * scheduleRepeat

<iframe height="265" style="width: 100%;" scrolling="no" title="Tone.Transport - schedule and scheduleRepeat" src="//codepen.io/lsuddem/embed/EMxjzd/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/EMxjzd/'>Tone.Transport - schedule and scheduleRepeat</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
  
---

# higher level sequencers

---
  
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


