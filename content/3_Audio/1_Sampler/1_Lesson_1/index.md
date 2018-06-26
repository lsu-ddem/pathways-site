---
title: WebAudio Basics & Sound File Players
weight: '1'
---
## Understanding the Audio Signal Path

![null](/images/uploads/simple_audio_pathway-1-.png)

## Creating a Sound File Player

{{% codepen 500 MXVgVR %}}

## 

## Playing Multiple Sounds with Tone.Players

Instead of making multiple single-file soundfile players, we can build one Tone.Players instrument and load it with multiple soundfiles. To define which sounds to play we create an object with multiple file paths (done by opening a pair of { } brackets inside of the Tone.Players functions parenthesis), each with a unique name to call the sound up by later. You can think of this name as a type of variable that is inside of an object. 

Since we are now dealing with multiple sound files, we should cover some of the best ways to trigger individual sounds in your project, as well as ways to modulate and manipultae those sounds while they are playing.

### Triggering Sounds

There are multiple ways of triggering and controlling sounds. Below we look at keyIsDown, buttons, and sliders.

#### keyIsDown

Since we have multiple sounds to play now we can use keys on the keyboard to trigger them. To do that we use the p5 function keyIsDown. The embedded code below shows this method in action.

#### Starting the sounds

To get each specific sound to play we use a special syntax: players.get("samplename"). In this case we do either players.get("bells") to select the bells sound or players.get("arpeggio”) to play the arpeggiated synthesizer sound. Then we call .start() on the same line to play those sounds.

{{% codepen 500 vrzEjR %}}

#### Using buttons

Instead of using **keyIsDown** we can create buttons to trigger sounds. The below example is the same as the previous one just now we use buttons.

We create a button with the p5 function **createButton**. Inside the ('') we give the button text to display.

```
createButton("button label");
```

We can then customize the button by modifying some of its properties.
**button1.position(x, y)** determines the button location.

**button1.mousePressed()** calls a function that we define below. Inside of this function put any code that you want to run when you click the button. In the embedded example below, we made three new fuctions: play1, play2, and play3. Inside of each, we have our **multiplayer.get("samplename").start()** function that causes the Tone.Players object to grab and play the corresponding sound file:

{{% codepen 500 OEoZyQ %}}

#### Using sliders

To change an aspect of our sound while it is playing we can use a slider. To make a slider in p5.js use createSlider().


##### Syntax

```
createSlider(min,max,[value],[step])
```

##### Parameters

* _min_ - minimum value of the slider
* _max_ - maximum value of the slider
* _value_ - default value of the slider
* _step_ - step size for each tick of the slider (if step is set to 0, the slider will move continuously from the minimum to the maximum value)

{{% notice tip %}}
Remember: when a function's arguments are listed inside of flat brackets ina syntax example or on an API document, this indicates that those arguments are optional, and are not required in order for the function to run successfuly. In the case of createSlider(), the first two arguments (min and max) are required, while the second two (value and step) can be added if you'd like to have more control over how your slider behaves.
{{% /notice %}}

To get the current value of the slider and use it in your code, call for slider.value() and attach it to a property of your player. 



#### Labeling your sampler

It's a good idea to label any sliders used to control your sampler so that you know what they do. Here is a quick reminder of how the text() function works: 

##### Syntax

text(str,x,y,\[x2],\[y2])

##### Parameters

*  _str_ - the alphanumeric symbols to be displayed
*    _x_ - x-coordinate of text
*    _y _- y-coordinate of text



In the code below, we use a button to trigger the playback of each sound and  a slider, labeled "\[File Name] Playback Speed" to change the playback speed rate of our sound while it plays:

{{% codepen 500 LrJrVe %}}
