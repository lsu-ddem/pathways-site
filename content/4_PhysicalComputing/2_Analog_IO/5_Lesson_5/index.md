---
title: Assignment - Creating Multiple Dimmer Switches
weight: '5'
---

Assignment: 

Earlier on this page you were shown how to utilize pulse width modulation in order to use a potentiometer to control the brightness of an LED, this will be the basis of the assignment for this chapter. The goal of this assignment is to create a circuit with the following criteria:

* Has a main power switch/button that supplies the entire circuit with power. None of the LEDs will turn on without this being 'on'. Think back to chapter 10 when we talked about creating a switch to interrupt power flow.
* Has at least 2 LEDs wired in parallel. (separate circuits with their own resistors and connections to the power and ground)
* Each LED can be controlled via PWM and a sensor (not a pot).
  * One sensor must be a variable resistor (2 leads).
  * The other must be a voltage divider (3 leads).

Think about what elements you will need to code in order for this to work. You will have to combine multiple elements from the previous examples in order to achieve this. Feel free to utilize the code below as a starting point.

<iframe src=https://create.arduino.cc/editor/mbardin/3a068f21-5180-443b-808a-def7db937692/preview?embed style="height:510px;width:100%;margin:10px 0" frameborder=0></iframe>
