---
title: Adding effects
weight: 4
disableToc: false
---

Effects in Tone.js alter the sound is some way. They can effect the timbre or rhythm of the sound.

## Making connections

* toMaster()
  * sends the sound directly to your speakers
  * if you are missing toMaster() you will not hear anything
* connect()
  * Sends the sound to an effect before it goes to the master

Every effect has a range that the effect can be applied to the sound, also called its **wet** value.

Below are some effects you can use for your Sampler with effects assignment. More information of other effects can be found [here](https://drive.google.com/open?id=17qRwp8q--n8KOMZeJDm_EDuTDy6vDH4n).

## Reverb

Reverb is the persistance of a sound that continues after the original sound has ceased. It is made up of many echos bouncing off the walls of a space and gives us cues to the size of that space. If you have ever been in a very large room, think church, stadium etc; and heard your voice echo around it, this is reverb.

### Parameters

Roomsize - The amount of time for the sound to decay.

{{% codepen 370 GxQWNW %}}

## Delay

A delay effect records a sound into a buffer and plays it back after a certain period of time.

### Parameters

* delayTime - the time between consecutive echos.
* feedback - The amount of the effected signal which is fed back through the delay.

{{% codepen 400 zWRZwV %}}

## Distortion

Gives sound a "fuzzy", "growling", or "gritty" tone, think electric guitar.

### Parameter

distortion - The amount of distortion (nominal range of 0-1)

{{% codepen 400 jzZBwp %}}

## Tremolo

Tremolo is the variation in amplitude of sound achieved through electronic means.

### Parameters

* frequency - the rate of the effect
* depth - the depth of the effect

{{% codepen 400 MVRjEG %}}
