---
title: Physical Computing with Arduino
weight: 4
---

The following lessons and assignments will introduce students to the practice of Physical Computing using the Arduino platform. **While code for the Arduino is not written in JavaScript, the syntax and structure of basic coding concepts covered in previous chapters will carry over to these lessons with only minor changes required.** Topics covered include basic understanding of electrical signals and components for building circuits, analog and digital input and output into an interactive circuit, understanding differences between JavaScript and Arduino coding, and how to get an Arduino to communicate with a web-based project.

While completing these lessons, be sure to check out additional examples and extended readings in the **Resources** section as well as the lessons and example codes found on the [Arduino](https://www.arduino.cc/en/Tutorial/HomePage) website to build a stronger understanding of these concepts.

The remainder of this course will require an Arduino kit. If this is not provided by the school, or you would like to purchase your own for at-home use or experimenting after you have completed the course, these kits are open-source and can be purchased online. Kits containing that [Arduino Uno board and necessary components](https://www.amazon.com/s?k=arduino+uno+kit&i=electronics&ref=nb_sb_noss_1) usually range form $40-$60.

---


## Specific differences between Arduino and Javascript, and things to note:

Below is a list of some of the more common differences from Javascript as well as functions that we will come across when using Arduino for this class. Be sure to reference this page if you need a refresher on these items when you are working on your assignments. 

### semicolons

In P5 the software would be a little forgiving and still function without proper semicolon syntax at the end of lines. However Arduino is not quite as user friendly in that regard. When writing this code you will have to be sure that the appropriate lines end with a semicolon or you will not be able to upload your code to the board.

### void vs function

The designation 'void' replaces 'function' that we have been using in P5

### loop vs draw

`void loop()` in Arduino behaves in the same was as `function draw()` in P5

### Variable types

Unlike in P5, you will have to specify the kind of variable you are using in Arduino. The words below all replace `let` depending on the data type or behaviors of the variable

####  int

used for integer numbers

#### float

Used for floating point numbers

#### const

Used for values that do not change. You may want to utilize a const if you want to assign the same value to multiple objects in the code and be able to edit them all at one time when the code is not running.

#### char (strings)

This designation is used when your variable will contain a string

### pinMode()

Sets the Arduino's pins to either transmit or receive data. each pin can only do one or the other at one time. 

```js
// arguments: 
// pinNumber: number designation of the pin you want to set (can be stored as variable)
// mode: INPUT or OUTPUT

pinMode(pinNumber, mode);
```

### digitalWrite()

sends data out through a digital pin

```js
// arguments: 
// pinNumber: number designation of the pin you want to set (can be stored as variable)
// state: HIGH or LOW

digitalWrite(pinNumber, state);
```

### digitalRead()

receives data from a digital pin. 
values can be stored in a variable.

```js
// arguments: pin number you wish to read
// pinNumber: number designation of the pin you want to set (can be stored as variable)
//returns: HIGH or LOW

digitalRead(pinNumber);
```

### analogRead()

receives data through an analog pin
arguments: pin number (A0-A5 on Arduino Uno)
values can be stored in a variable.

### analogWrite()

Sends Pulse Width Modulation data through a PWM compatible pin

```js

//arguments: pin number, value
//pin number: certain pins can be used to our put pulse width modulation to control various elements such as leds and motors. On an arduino Uno, those pins are 3, 5, 6, 9, 10, & 11 (on the digital side)
//value: PW duty cycle. Range 0-255. 0 is always off, 255 is always on.

analogWrite(5, 100);

```

---

When you are ready, head to the next page to get Arduino set up on your computer.

---
