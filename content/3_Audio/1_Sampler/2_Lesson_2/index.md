---
title: Audio Effects
weight: '2'
---
Audio effects are used to modulate and manipulate a sound source in order to create more experimental sonic results. Let's learn how to start incorporating effects into our web project! 



## Adding Audio Effects into the Signal Path

![null](/images/uploads/effects_pathway.png)

In order to pass sound from our sound source into an audio effect, we need to complete the following steps: 

1. Build our chosen audio effect, assign it to a variable, and connect its output to the master speakers (using the .toMaster( ) method)
2. Build our sound source, assign it to a variable, and connect its output to our audio effect (using a new method called **.connect( )**
3. The argument passed into the **.connect( )** method is the variable we created to store our audio effect 

Here is an example of how to add an audio effect into your code and attach it to the output of your sound file player. In the code embedded below, we create a delay effect and send the output of our Tone.Players object through the effect before it gets passed to our master output speakers:

{{% codepen 500 QxBmpm %}}

Every effect has a universal parameter called its **wet** value. The wet value  represents the proportion of mix between the original (or "dry") sound source signal coming into the effect and the effected (or "wet") signal coming out of the effect. Try adjusting the slider in the embedded code above to hear the resulting sound at various rations of dry/wet mixes.

{{% notice info %}}
Remember to build your audio effects before you try to connect your sound source to them using the .connect( ) method. If you attempt to connect a sound source to an effect that hasn't been built yet, your code won't render  even if your code has no other mistakes. Since our code is read from top to bottom, it's best to put the code that builds your effects above any code that connects sound sources to them.\
{{% /notice %}}

## Common Audio Effects

Tone.js has a large collection of audio effects that can be used to modulate a sound source. Below, we discuss some of the most commonly used audio effects and demonstrate how we can use them. To see a complete list of possible audio effects and their parameters in the Tone.js library, head to the library's API documentation by clicking [here](https://tonejs.github.io/docs/). 

### Reverb

Reverb is the persistance of a sound that continues after the original sound has ceased. It is made up of many echos bouncing off the walls of a space and gives us cues to the size of that space. If you have ever been in a very large room, think church, stadium etc; and heard your voice echo around it, this is reverb.

#### Reverb Parameters

* **roomSize** - the amount of time for the sound to decay.

{{% codepen 600 oyaRoE %}}

### Delay

A delay effect records a sound into a buffer and plays it back after a certain period of time. The example below demonstrates a particualr style of delay known as a PingPong Delay. This causes the delayed sound to pan back and forth between your right output speaker and your left output speaker.

#### Delay Parameters

* **delayTime** - the time between consecutive echos.
* **feedback** - the amount of the effected signal which is fed back through the delay.

{{% codepen 600 KeGLed %}}

### Distortion

Gives sound a “fuzzy”, “growling”, or “gritty” tone, think electric guitar.

#### Distortion Parameters

* **distortion** - the amount of distortion (must use a nominal range of 0-1)
  * does _not_ require the addition of **.value** to modify

{{% codepen 600 GGYaLL %}}

### Tremolo

Tremolo is the variation in amplitude of sound achieved through electronic means. Musically, it results in a "warbly", vibrato-induced sound. This effect works best on longer duration, sustained sounds.

Because the tremolo effect relies on an oscilator to generate the amplitude change, we need to add the .start( ) method upon creation of the effect. This can be done on the same line, right after the .toMaster( ) method is called. More information on oscilators can be found in the Resources section, as well as the next chapter.

#### Tremolo Parameters

* **frequency** - the rate of the effect, reuslting in faster vibrato or slower vibrato
* **depth** - the depth of the effect upon the sound source

 {{% codepen 600 jKQKdP %}}

### BitCrusher

Bitcrusher is a distortion effect that creates a lo-fi version of the incoming sound source through a digital reduction of the audio's resolution (as known as its bitdepth). 

#### BitCrusher Parameters

* **bits**- the number of bits to downsample the signal (must use a nominal range of 1 to 8)
  * does _not_ require the addition of **.value** to modify

{{% codepen 600 pKQmPM %}}
