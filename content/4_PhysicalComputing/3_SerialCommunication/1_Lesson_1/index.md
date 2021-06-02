---
title: Making a Controller - Sending Data to P5
weight: '1'
---

In this lesson we will start to combine elements from our work in P5 with the Arduino codes and circuits that we have been learning in the past two chapters. To start, we will send information from the Arduino to P5 and have P5 respond in real time. This can be a fairly time consuming process until you get the hang of it, so be sure to go through this lesson slowly and make sure you have an understanding of the steps and concepts before you move onto the next section.

---

## The Circuit

On their own, each element of this process is not complicated. It is making all of the elements talk to each other that we want to focus on. We can begin by creating a simple circuit with a potentiometer like the one shown below:

* Connect pot to power & ground.
* Connect middle pin to A0. (this can be any of the analog pins, but you will have to update the code examples below to match the pin of your choice.)
<!-- * Don't forget the necessary 10K resistor. -->

![serialpot](/images/graphics/serialpot.png)

This will be a basic basic circuit. For now all we want to do is measure the potentiometer's voltage division with pin A0. We will now move on to the Arduino code. However you may want to move your potentiometer closer to one end of the breadboard, especially if you have one of the smaller sizes of boards, or only one available. By the end of this unit we will have a pot, a button, an analog sensor, and two LEDs wired into the breadboard, so saving space is necessary.

---

## Arduino Code

For this step we need to tell our Arduino board to read the incoming analog signal and send the data out along the USB connection where it will ultimately be read by P5 in a few lessons. In order to do that our code needs a few things:

* Read the data from out potentiometer.
* Process/map that data (this can happen here or in P5. for now we will leave it as is.).
* Transmit the data through the serial connection. 

This code will be a basic test just to see if the connection will work.

<iframe src=https://create.arduino.cc/editor/mbardin/ff843442-be30-4b2e-b888-ad235c3ba431/preview?embed style="height:510px;width:100%;margin:10px 0" frameborder=0></iframe>
  
Upload this code to your Arduino, and now lets see what is happening. 

In `setup()`, the code is telling the Arduino to open a communication channel with the line `Serial.Begin(9600)`. This will allow the Arduino to send and receive messages along this channel while it is plugged into USB. 

Inside of `loop()`, we are simply reading the voltage coming in from the potentiometer circuit, storing it in a variable, and then transmitting the contents of that variable out the USB cable with the line `Serial.println(sensorValue);`. 

We can see these values by opening the serial monitor.

* In the web-editor, this con be done by clicking the `monitor` button on the left side fo the screen while the Arduino is connected and running the code.
* In the downloaded program, select the `tools` menu on the top of the window, then select `serial monitor`.

Both of these actions will open a separate window showing the serial communications happening along this channel.

---
### Practice Time!

Once you are able to get your circuit built and the code running on the board, try opening up the serial monitor. You should see a constant stream of numbers appear. Experiment with the following:

* Try turning the potentiometer. What happens when you turn it to the left? To the right?
* Try removing the potentiometer, flipping it around, and turning it again. What happens now?
* What is the range of the numbers on the screen? It may be different depending on the model of board you are using, but there should be a clear range of values.

You can use the `map()` function to scale these to any desired range of numbers.

---

## The map() Function

The last thing we will do in Arduino is add a mapping function to make the values a little easier to manage in P5. This function has the following arguments:

```js

map(value to map, original value min, original value max, scaled min, scaled max);

```

We can see this a little more clearly once we start adding numbers. Lets use the potentiometer from the last example:

```js

map(sensorValue, 0, 1023, 0, 100);

```

This line, when called in the `loop()`, will look at the value inside of `sensorValue`, and scale it from its original range of 0-1023 (your range may vary depending on the model of Arduino board you are using), and scale the values to fit within a range of 0-100. This value can then be stored in a variable to be used either in the arduino code, or transmitted via the `Serial.println()` function.

---

### Practice Time!

That is going to be wrapping it up for this lesson. In the next we will begin with transmitting these values from arduino to the P5 web-editor. But for extra practice, try the following:

* Replace the potentiometer with another sensor. How the doe behavior of the values in the serial monitor change? (don't forget about resistors)
* Try adding an LED into the circuit. Can you use the sensor values to adjust the LED as well?

---


## Bringing it all together: P5 reacting to physical input

Lets get those numbers into P5!. To do this, pull download [this .zip file](PDM_physicalComputing_copy.zip). It contains all of the starting arduino code needed for this chapter. Inside of this folder are several files. We will want to look at the .ino file. 

If you are using the web-editor, or are unable to access the imbedded folder, you can find the same library embedded below. The files can all be downloaded if needed.

<iframe src=https://create.arduino.cc/editor/mbardin/528034f3-239b-4ca5-9c8b-7b900b6c2e0f/preview?embed style="height:510px;width:100%;margin:10px 0" frameborder=0></iframe>

The next section will go over this code in detail, but feel free to explore it now if you wish.

---


<!-- ```
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

Now we have a working code. Connect the Arduino to the computer and go into P5.serialcontrol. Close the serial port that the Arduino is connected to and make sure the string at the beginning of your code marches that port exactly. Once that is done, open the port again and run the code. If everything was done properly, you should see the onscreen circle change in size depending on the position of the potentiometer like in the video below. Our next step will be to include a button in addition to out analog data. This button will be used to control boolean information within P5. in the following lesson we will use it to set the color of the on-screen circle. -->

---
