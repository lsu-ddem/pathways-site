---
title: Physical Computing (Arduino)
weight: 4
---
## Chapter 6

The following lessons and assignments will introduce students to the practice of Physical Computing using the Arduino platform. **While code for the Arduino is not written in JavaScript, the syntax and structure of basic coding concepts covered in previous chapters will carry over to these lessons with only minor changes required.** Topics covered include basic understanding of electrical signals and components for building circuits, analog and digital input and output into an interactive circuit, understanding differences between JavaScript and Arduino coding, and how to get an Arduino to communicate with a web-based project.

While completing these lessons, be sure to check out additional examples and extended readings in the **Resources** section as well as the lessons and example codes found on the [Arduino](https://www.arduino.cc/en/Tutorial/HomePage) website to build a stronger understanding of these concepts.

---


## Specific differences between Arduino and Javascript, and things to note:

Below is a list of some of the more common differences and functions that we will come across when using arduino for this class. Be sure to reference this page if you need a refresher on these items when you are working on your assignments. 

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

```
// arguments: 
// pinNumber: number designation of the pin you want to set (can be stored as variable)
// mode: INPUT or OUTPUT

pinMode(pinNumber, mode);
```

### digitalWrite()

sends data out through a digital pin

```
// arguments: 
// pinNumber: number designation of the pin you want to set (can be stored as variable)
// state: HIGH or LOW

digitalWrite(pinNumber, state);
```

### digitalRead()

receives data from a digital pin. value can be stored in a variable

```
// arguments: 
// pinNumber: number designation of the pin you want to set (can be stored as variable)

digitalRead(pinNumber);
```

### analogRead()

sends data through an analog pin

### analogWrite()

receives data from an analog pin

---

When you are ready, head to the next page to get Arduino set up on your computer.