---
title: Serial Communication
weight: 3
---
The following lessons will focus on adding serial communication to the completed "Bug Squish!" game **or** the "Paint App" from the previous chapters, allowing for control of your program from an Arduino. By the time you have completed this section you will have the following:

* A functional program that a user can interact with
* Working sounds that respond to various conditions of the game
* The ability to physically manipulate the computer code through physical means such as a button or sensor.

Before we move on however, there is one more item that needs to be installed on your device. This program helps to control the serial input and output going to P5 to avoid data conflicts with the ret of your computer. Follow the steps below to install this program on your device. 


### Using P5 Serial Control

`P5 Serial Control` is a 3rd party application that needs to be installed on your devices in order to allow P5 to interact with devices through the USB port on a computer. In short, the program tells the computer to stop sending/receiving data through a serial port in one program, and use P5 with that serial port. We don't need to get into the fine details of it here, but know that a USB port can only be utilized for one specific protocol at a time, so having this tool will save up a lot of headaches in the long run.

#### Download and install

[P5 Serial Control](https://pdm.lsupathways.org/p5.serialcontrol.zip) can be downloaded directly from the embedded link, or the github repository, which contains multiple versions and an updated READ_ME file can be access at the address below:

```
https://github.com/p5-serial/p5.serialcontrol/releases
```

Once you follow the install instructions for your device following the READ_ME's instructions, you can open the application and explore its functionality. 

![p5serialcontrol1](/images/graphics/p5sc1)

![p5serialcontrol2](/images/graphics/p5sc2)

As shown above, the interface is minimal. In the middle of the screen you have a list of all of your devices serial ports. Selecting the 'list ports' button will refresh this list. 