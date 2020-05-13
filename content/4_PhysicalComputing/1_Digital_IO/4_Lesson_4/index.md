---
title: Chapter 10 review and assignments
weight: '5'
---

Before we get into the details of the assignment for this chapter, lets review some of the core concepts covered in chapter 10.

## P5 vs Arduino

In this unit we will start by stepping back from P5 as we delve into Arduino and become more comfortable in the realm of physical computing. There are a few differences in the coding languages. P5 is built in Javascript, while Arduino is built in C++. While some of the syntax may differ a little between the platforms, the concepts and processes that we have been learning will remain largely identical. You can still create functions, conditional statements, and for loops in your Arduino code in order to create the complex logic and modular code that we have been creating so far. In fact, you may see that once we get a little more practice your Arduino codes will be much simpler than the ones we make in P5!

## Basics of Electricity

The core elements of this unit are sending electrical current from the Arduino board to power various physical components, and receiving data from various elements so our code can respond to it. In order to create working circuits safely, we need ot understand some of the basics for how electricity works and can be measured. in short electricity is the flow of electrons from a place of high concentration to a place of low concentration via the path of least resistance. We can control this flow by connecting electric power sources to various elements with wires so that the electricity flows through an intended circular path.

Electricity has three main components that are all related:

* Voltage: the driving force of the electrical current. Measured in Volts.
* Current: the electrons being moved by the voltage. Measured in Apms.
* Resistance: elements that impede the natural flow of electricity. MEasured in Ohms. Resistors are the opposite of conductors. 

Conceptually electricity flows similarly to a river. Gravity moves the river from upstream to downstream (Voltage). The amount of water can vary from a trickle to a deluge (current), and debris such as rocks can slowdown or stop the flow of water (resistance). 

These elements are all related through Ohm's Law: V = I/R.

## Digital Signal

In this course we will be focusing on two main types of electrical signal: digital and analog. So far we have had our first experiences with digital signal: a signal that exists in a boolean state. Just like our boolean system variables in P5, digital signal contains only two states which can be represented as either '1' and '0' or 'HIGH' and 'LOW'.

We can use this type of signal in order to control various components that exist in a digital state such as LEDs. A LED has two main states: on and off. This state depends on whether or not current is being passed through the LED. By setting a digital pin to OUTPUT with the `pinMode()` function in side of setup(), we can then tell the arduino when to turn the connected LED on and off. To do this we use the `digitalWrite()` command inside of loop and speficy when we want the digital value to be HIGH or LOW. In the examples we set up our code to change these values based on an automatic delay, or with a conditional statement depending on the input from another digital source: a button.

## Buttons and Switches

Adding buttons and switches can create ways for us to interact with the circuits that we build, and ultimately with our code in P5. Buttons and switches can both block or route an electrical current, but have one main difference: buttons return to their initial state when they are not being pressed, and a switch will remain in its current state until it is changed. in our examples we used buttons and switches un several different ways. We interrupted a circuit with a button in order to act as a basic on/off switch for an LED. We were able to do the same with a switch, but we were also shown how to set up a switch to transition between two different complete circuits in order to toggle between two different LEDs.

Lastly we built a more sophisticated light switch by passing (or blocking) a current going to a digital input pin with a button. Using a conditional statement, we were then able to change the state of an LED based on whether the button was pressed and allowed a current through. For more details on these circuits and the code involved, be sure to go through chapter 10 again.

---

## Extra practice assignments

For the upcoming chapters there will be two different practice assignments in order ot help prepare for the chapter assignment. 

Assignment 1 is to recreate the LED switch toggle shown in this video. However, you must utilize a push button instead of a switch. You will always have one LED on, but the light will change if the button is pressed.

<iframe width="560" height="315" src="https://www.youtube.com/embed/etvNOnt-G0Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Remember that the switch must happen in the circuit before the LEDs, and each branch will need its own resistor and connection to ground.

The second assignment will require multiple buttons, LEDs and resistors. The goal is to recreate the results shown below:

<iframe width="560" height="315" src="https://www.youtube.com/embed/t3gY2J9-ROk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Each LED is triggered by a separate button and can all be operated independently. Keep in mind that in the video the components were spread out over 2 breadboards, in order to make them easier to film, but this is not required for the assignment. If you have all of the materials and finish the assignment easily, try adding a master power switch like shown in the video.
