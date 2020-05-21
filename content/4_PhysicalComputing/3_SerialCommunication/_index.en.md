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

`P5 Serial Control` is a 3rd party application that needs to be installed on your devices in order to allow P5 to interact with devices through the USB port on a computer. In short, the program tells the computer to stop sending/receiving data through a serial port in one program, and use P5 with that serial port. We don't need to get into the fine details of it here, but know that a USB port can only be utilized for one specific protocol at a time, and Arduino and your web browser will fight over access to the port. This is why people utilizing the arduino web editor needed to install an additional plug-in. Having this tool will save up a lot of headaches in the long run by helping to minimize this conflict.

#### Download and install

[P5 Serial Control](https://pdm.lsupathways.org/p5.serialcontrol-darwin-x64.zip) for macOS version 1.2 can be downloaded directly from the embedded link, However, it is preferred that you visit the link below in order to download whichever version is the most up-to-date. This page will also include several reference articles and links that may prove helpful.
```
https://github.com/p5-serial/p5.serialcontrol/releases
```

Once you follow the install instructions for your device, you can open the application and explore its functionality. 

![serial1](/images/graphics/p5serial1.png)

In the default screen you will see a list of serial ports available on your device. If you do not see the one for your arduino, reconnect the USB and click the rescan button. This port will generally look like this:
```
/dev/cu.usbmodem1462301
```

Only the numbers that identify the port will vary from device to device, and port to port. If you disconnect your Arduino and reconnect it to a different USB port when working on the codes in this unit, you will have to close the original port, select the new one, and then open it before te code will work again.

![serial2](/images/graphics/p5serial2.png)

Once you select the correct serial port from the dropdown menu and click on the open button, you will see several new things pop up. There are now window that you can use to send serial messages through the selected port in order to ensure that they are connected, as well as a box of code that appears on the right side of the screen. This will be important to getting our codes up and running in P5 in the next lessons. You can copy this starter code into a new P5 project in order to have the necessary port information already filled in when the project starts. just don't forget to include the P5.serial library, which will be discussed in the P5 section of the next page.

---
