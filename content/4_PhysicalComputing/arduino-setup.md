---
title: Arduino Setup
weight: 1
---

In order to complete the assignments for the remainder of this course, Arduino must first be setup on your computer. This program is available for fre both as a web-editor and stand alone program. You can go to [this webpage](https://create.arduino.cc/projecthub/Arduino_Genuino/getting-started-with-arduino-web-editor-on-various-platforms-4b3e4a?f=1) to see how to install the web editor on your specific device. If possible, it in a good idea to visit [this page](https://www.arduino.cc/en/main/software) to download and install the offline application. This way you can code without relying on the internet connection or Arduino's servers.

Keep in mind that you may be required to take pictures and videos of your assignments from this section onward as a method of recording and submitting your functional hardware and circuit boards.

Once you have downloaded the software, follow the steps below to make sure everything is ready to go.

1. Install [Arduino Create Agent](https://github.com/arduino/arduino-create-agent) for your Browser (web editor versions only)
2. Make sure your Arduino board is connected to the computer via USB.
3. Go to examples -> Built in -> 01.Basics -> Blink and load the file into the editor
4. Choose your Board and Serial:
    * In the web editor there is a dropdown menu that will allow you to select your serial port and arduino board model. Make sure these match with the hard ware you are using or else you will be unable to load your sketches.
    * In the application this same menu can be reached through Tools -> Board and Tools -> Port.
    * These values _should_ be filled automatically, but it is a good practice to double check to make sure that everything is working properly. 
    * If you have more than one option for the serial ports, start with the default selected option. if you are unable to load your sketch, then work your way through the list of available options until one is able to communicate. 
5.  Click the upload button to send your sketch to the board.
    * This process will first verify that the code is free of errors and then send your sketch to the Arduino.
    * This process will overwrite whatever is previously saved to the Arduino
    * Once the files have been uploaded and communication between the board and computer has been established, you should see a (usually) blue LED that is built into the Arduino board begin to blink in 1 second intervals.

Once this works, you are ready to go forward. However, there are a few things we need to go over before we can start safely building electrical circuits.