---
title: Chapter 12 Review & Assignments
weight: 5
---

## Chapter 12 Review

Lets go over some of the basics from the previous lessons:

## Sending Data to P5

It is important to reduce the data being sent from the Arduino to just a pair of values: the label, and the number.

We can set up our arduino sketch to run normally, but we need to be sure to include the necessary libraries and commands to be able to send the proper values. It is recommended that you duplicate this starting template and adjust the necessary elements to match what you want to happen in your sketch.

<iframe src=https://create.arduino.cc/editor/mbardin/528034f3-239b-4ca5-9c8b-7b900b6c2e0f/preview?embed style="height:510px;width:100%;margin:10px 0" frameborder=0></iframe>

Once you have transmitted the data to P5, you must then utilize it in some way in the sketch. These values can be referred to like normal variables with the `sensors.label` syntax. (replace label with the label you gave the data in Arduino). Like with the Arduino code, it is recommended that you duplicate this starting sketch and make the necessary changes to reflect your project. 

<iframe src="https://editor.p5js.org/mbardin/embed/cbPYxKcIJ"></iframe>

---

## Receiving Data from P5

The process acts identically when sending data from P5 to Arduino. You must first reduce the data to a label/value pair, then transmit it with the `serialPDM.transmit()` method in P5. Once in Arduino, the code will use the conditional statement:

```js

  if(newData) {
    if(pdm.getName().equals(String("led"))) {
      digitalWrite(outPin, pdm.getValue());
    } else if (pdm.getName().equals(String("fade"))) {
      analogWrite(outPWMPin, pdm.getValue());
    }
  }

```

To determine the appropriate response to the values. In the starting example, the arduino will turn one LED on or off with one command, and adjust the amount of brightness (with PWM) of a different LED with another command.

---


## Chapter 12 Review Assignment


For this assignment, try to do the following:

Using the provided templates, add the necessary code so that you can achieve the following: Pressing a button on the breadboard causes something new to appear on the P5 canvas. for now this can be a simple shape, but if you want to push yourself, try and make a new sprite appear. 

In P5, add the necessary code so that whenever you click on an on-screen button a LED blinks for one second on the breadboard.

Use these interactions as the basis/starting point for your final project. Remember that each individual element from each unit in this class needs to work together.

---

## Another Review Assignment

As another, or different review assignment, pull up your old sketch for either Bug-Squish or the Paint App. Then duplicate it, and add the physical response controls that we have been discussing in this chapter. Be sure to think about what you want to happen when you interact with the physical items, and how you want those same physical items to respond to an event in your code.

Once you have completed this, you will have essentially completed the integrations project. Now go a head and create your own project!

---
