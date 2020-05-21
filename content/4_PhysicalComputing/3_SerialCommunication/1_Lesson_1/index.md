---
title: Sending Data to P5 for Analog Controls
weight: '1'
---

In this lesson we will start to combine elements from our work in P5 with the Arduino codes and circuits that we have been learning in the past two chapters. To start, we will send information from the Arduino to P5 and have P5 respond in real time. This can be a fairly time consuming process until you get the hang of it, so be sure to go through this lesson slowly and make sure you have an understanding of the steps and concepts before you move onto the next section.

---

## The Circuit

On their own, each element of this process is not super complicated. It is making all of the elements talk to each other that we want to focus on. We can begin by creating a simple circuit with a potentiometer like the one shown below:

* Connect pot to power & ground
* Connect middle pin to A0

![serialpot](/images/graphics/serialpot.png)

This will be a basic basic circuit. For now all we want to do is measure the potentiometer's voltage division with pin A0. We will now move on to the Arduino code. However you may want to move your potentiometer closer to one end of the breadboard, especially if you have one of the smaller sizes of boards, or only one available. By the end of this unit we will have a pot, a button, an analog sensor, and two LEDs wired into the breadboard, so saving space is necessary.

---

## Arduino Code

For this step we need to tell our Arduino board to rad the incoming analog signal and send the data out along the USB connection where it will ultimately be read by P5. In order to do that our code needs a few things:

* 
* 
* 

Once all of these elements are present, your code should look like the one below. Flash that to your board and navigate to a new P5 project.

---

## P5 Code

We are in the home stretch now. We have built a circuit that measures input from a voltage divider and sends that information out via a USB connection. All we have to do now is tell P5 where to find this data and what to do with it. But first there is one more library we have to add: p5.serial

### P5.serial

This library is officially supported by P5 and can be found on their [libraries page](https://p5js.org/libraries/). In order to save time, below is the line of HTML code that is needed to install this library into a P5 project:

```
<script src="https://cdn.jsdelivr.net/npm/p5.serialserver@0.0.28/lib/p5.serialport.js"></script>
```

Over the next several lessons we will discuss the elements of this library needed in order to complete this course, but additional information on the library can be found at the library's [github](https://github.com/p5-serial/p5.serialport) and [reference page](https://processing.org/reference/libraries/serial/index.html).

Once this library is installed, we will be able to utilize serial communications in P5, as well as the p5.serialcontrol app that was mentioned at the beginning of this chapter. Remember that these lessons will not work without the app and libraries.

---

## Bringing it all together: P5 reacting to physical input

Now that the library is installed we can begin coding in P5. It has been a few chapters since we have worked in this platform, so feel free to check out the [reference material](https://p5js.org/reference/) if needed. This will be the longest/most complicated step in the process, but once you get a hang of it, it will only take slight modifications in order to get through the remaining lessons.

Lets start by making a few variables. These variables will be used to store important serial information later on in the code.

```
let serial; // Variable to hold instance of serialport library
let portName = '/dev/cu.usbmodem144101'; // Fill in  serial port name here. You can get this number from the serial control app. It will be different for every USB port on each individual device.
let sensorData = {};
let inData; // For incoming serial data
let circ1; //the circle that we will be adjusting with our Arduino sensor
```

Next, arrange your `setup()` function to have the following contents:

```
function setup() {
  serial = new p5.SerialPort(); // Make new instance of serialport library
  serial.on('data', serialEvent); // Callback when new data arrives
  serial.on('error', gotError); // Callback for errors
  serial.open(portName); // Open serial port
  createCanvas(1000, 1000);
  circ1 = new Circle(width / 2, height / 2, 200); // we will be making this circle with a function later in our code. The dimensions are irrelevant at this point
}
```

We need to include this information in the setup function so that P5 knows to create a new serial connection. The `.on()` methods tell P5 to reference callback functions when it receives certain messages. You will recognize the strings from our Arduino code. Once all of the methods for the serial port are set we can open the specific one that we want with the `.open()` method. If you have a complex project with multiple Arduino boards, you could use this library to have multiple serial ports open. However the code becomes much longer and complicated as you introduce these extra elements. If possible, it is recommended that you only utilize one serial connection at a time for the purposes of this course.

Next lets make the callback functions for the serial data transmissions. 

```
function serialEvent() {
  //inData = serial.read();                   // Read *bytes* from serial port. Used with serial.write from the Arduino.
  //inData = serial.readStringUntil("\r\n");  // Read *strings* from the serial port. Used with serial.println from the Arduino.

  inData = serial.readStringUntil(";\n");
  let sensors = inData.split(',');
  // // ['a0:997','d7:0'] . => . {'a0':997,'d7':0}
  sensors.forEach(function(element) {
    let el = element.split(':');
    sensorData[el[0]] = parseFloat(el[1]);
  });
```

This function may look a little complicated at first, but lets break it down. `serial.read()` will take the information being transmitted by the Arduino's `serial.write() ` function. This will take in bytes of data. `serial.readStringsUntil()` will receive strings sent from the Arduino's `serial.println()` function. This will happen until ir receives a specific set of characters to cutoff that string.

Next we are making a unique function within `function serialEvent()`. This function takes the data coming in and breaks it up so that we can use it in our code elsewhere.

```
function gotError(theerror) {
  console.log('Something went wrong with the serial port:' + theerror);
}
```
```
This function simply reports to the console whenever an error occurs. This way the user can go into the code and fix whatever error may have occurred. There is one more custom function to include in the code next and it should contain the following information.

function Circle(x, y, size) {
  this.xPos = x;
  this.yPos = y;
  this.size = size;

  this.display = function() {
    let dialPos = map(sensorData.float0 * 100, 0, 255, 300, 700);
    //let button = sensorData.p7;
    this.xPos = dialPos;
    if (button === 1) {
      fill('purple');
    } else(fill('green'));
    ellipse(this.xPos, this.yPos, map(sensorData.pressValue, 0, 1023, 100, 900), map(sensorData.pressValue, 0, 1023, 100, 900));
  }
}


```

These function tells the on-screen circle how to appear based on the incoming data from the sensor. The commented out line will be addressed in the next lesson.

Now it is on to our draw function and we are done with typing code for this example.

```
function draw() {
  background(255);
  textSize(32);
  fill(32, 140, 110);
  text("a0: " + sensorData.a0, 10, 30);
  //text("p7: " + sensorData.p7, 10, 80);
  circ1.display();
}
```
In this function we will be looking at the data coming in from the serial port and displaying it via the text function so the user can see it. Then we will display the circle object that we created in the `setup()` function.

Now we have a working code. Connect the arduino to the computer and go into P5.serialcontrol. Close the serial port that the Arduino is connected to and make sure the string at the beginning of your code marches that port exactly. Once that is done, open the port again and run the code. If everything was done properly, you should see the onscreen circle change in size depending on the position of the potentiometer like in the video below. Our next step will be to include a button in addition to out analog data. This button will be used to control boolean information within P5. in the following lesson we will use it to set the color of the on-screen circle.

---

## Practice

Now that we have been able to send analog data into P5 via a potentiometer, try to experiment with the other sensors you have in your kit. What kinds of interactions are you able to achieve? The chapter assignment and the [Final Integrations Project](https://pdm.lsupathways.org/5_integrationproject/) will have you creating your own codes that receive and transmit serial data using P5 and Arduino. Start thinking now about what interactions you can use that make logical sense for what you want to alter on the screen. This will help save you a little time later on and help you to make a stronger final project!


### Library Suggestion

As of this lesson we have introduced all of the required libraries for the P5 web-editor. In order to make your life easier it is recommended that you create a starting template with the following libraries already installed in your code's HTML file:

* P5.play
    ```
    <script src="https://cdn.jsdelivr.net/gh/molleindustria/p5.play/lib/p5.play.js"></script>
    ```

* Tone.js
    ```
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tone/13.8.9/Tone.min.js"></script>
    ```

* P5.serial
    ```
    src="https://cdn.jsdelivr.net/gh/vanevery/p5.serialport/lib/p5.serialport.js"></script>
    ```

There were other libraries mentioned in the [Sound](https://pdm.lsupathways.org/3_audio/) unit. If your project requires these libraries in order to generate melodic synthesis, it is recommended to add them to this file as well.
