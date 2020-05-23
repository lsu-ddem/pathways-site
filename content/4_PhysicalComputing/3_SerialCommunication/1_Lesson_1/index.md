---
title: Sending Data to P5 for Analog Controls
weight: '1'
---

In this lesson we will start to combine elements from our work in P5 with the Arduino codes and circuits that we have been learning in the past two chapters. To start, we will send information from the Arduino to P5 and have P5 respond in real time. This can be a fairly time consuming process until you get the hang of it, so be sure to go through this lesson slowly and make sure you have an understanding of the steps and concepts before you move onto the next section.

---

## The Circuit

On their own, each element of this process is not super complicated. It is making all of the elements talk to each other that we want to focus on. We can begin by creating a simple circuit with a potentiometer like the one shown below:

* Connect pot to power & ground.
* Connect middle pin to A0. (this can be any of the analog pins, but you will have to update the code examples below to match the pin of your choice.)

![serialpot](/images/graphics/serialpot.png)

This will be a basic basic circuit. For now all we want to do is measure the potentiometer's voltage division with pin A0. We will now move on to the Arduino code. However you may want to move your potentiometer closer to one end of the breadboard, especially if you have one of the smaller sizes of boards, or only one available. By the end of this unit we will have a pot, a button, an analog sensor, and two LEDs wired into the breadboard, so saving space is necessary.

---

## Arduino Code

For this step we need to tell our Arduino board to rad the incoming analog signal and send the data out along the USB connection where it will ultimately be read by P5. In order to do that our code needs a few things:

* Read the data from out potentiometer.
* Process/map that data (this can happen here or in P5. for now we will leave it as is.).
* Transmit the data through the serial connection. 

This code will be a basic test just to see if the connection will work.

<iframe src=https://create.arduino.cc/editor/mbardin/ff843442-be30-4b2e-b888-ad235c3ba431/preview?embed style="height:510px;width:100%;margin:10px 0" frameborder=0></iframe>
  
Send this code to your arduino and lets move on to P5.

<!-- In order to save a little time, here is a starting code that can be used. This code is setup with everything we need in order to transmit and receive both digital and analog data, and we will go through the parts of it that are important to each section over the course of the next few lessons.

<iframe src=https://create.Arduino.cc/editor/mbardin/8b1d14b4-895a-4c00-9010-568769b246c9/preview?embed style="height:510px;width:100%;margin:10px 0" frameborder=0></iframe>

Looking at the global variables, we can see that we need one to receive the values from the potentiometer, as well as one to output the data to the serial port. In this example they are pins A0 and 3 respectively. We can ignore the digital pin information for the moment.

Working our way through the code we need to set pins A0 and 3 to INPUT and OUTPUT respectively inside of the setup function. In more complicated codes this is where we can set up more data transmission. We also need to call the `Serial.begin(9600);` function. PReviously we utilized this in order to view data within Arduino's serial monitor. This will serve as the backbone for this unit only instead of sending the data to the monitor, we will be sending it to P5.

Next is `void loop()`. In here we are reading the data from each input pin, and in the case of the analog data, we are mapping the values to fit between 0.0 - 1.0. This will give us a more compact range of values to use in P5. Continuing through the function there is some information regarding sending digital data which we will look at in the next lesson. The following section sends the values as well as a label out the serial port. The label here is very important as this will be how P5 receives and sorts the incoming information.  The last part of this function is used for checking for any incoming data and setting a pin that will be connected to an LED later on. We will go over that in more detail in the next lesson.

The next function `boolean checkSerial()` performs its tasks and returns a value of either true or false. It is used to determine if there is data incoming and helps to sort the data to the appropriate places. It is the next section that we are more interested in for now.

The final section is the muscle used to transmit the data through the serial port. It is comprised of different versions of the `transmitSensor()` function. THey each behave a little differently based on the type of data that will be transmitted. Because the arguments for each function require a certain data type, only the functions that can receive the appropriate arguments will transmit the data. This allows for us to have multiple versions of this function, and send the information to them with the function call in `void loop()`.

Each of the functions start the same with a test to see if the incoming data has stopped. If this is true the serial instruction for a new line is given. Following that is an instruction to add a comma to separate each piece of data being transmitted. This part only occurs in the transmit functions involving a value. The final section of each function compiles all of the data (the label and value) into one unit and transmits it. in short, the `.c_str()` line is used to help avoid duplication.  -->

---

## P5 Code

We are in the home stretch now. We have built a circuit that measures input from a voltage divider and sends that information out via a USB connection. All we have to do now is tell P5 where to find this data and what to do with it. But first there is one more library we have to add: p5.serial

### P5.serial

This library is officially supported by P5 and can be found on their [libraries page](https://p5js.org/libraries/). In order to save time, below is the line of HTML code that is needed to install this library into a P5 project:

```
<script src="https://cdn.jsdelivr.net/npm/p5.serialserver@0.0.28/lib/p5.serialport.js"></script>
```

Over the next several lessons we will discuss the elements of this library needed in order to complete this course, but additional information on the library can be found at the library's [github](https://github.com/p5-serial/p5.serialport) and [reference page](https://processing.org/reference/libraries/serial/index.html). This library is made by the same people who created the p5.serialcontrol app, which will allow us to utilize both of these resources together

Once this library is installed, we will be able to utilize serial communications in P5, as well as the p5.serialcontrol app that was mentioned at the beginning of this chapter. Remember that these lessons will not work without the app and libraries.

---

## Bringing it all together: P5 reacting to physical input

Now that the library is installed we can begin coding in P5. It has been a few chapters since we have worked in this platform, so feel free to check out the [reference material](https://p5js.org/reference/) if needed. This will be the longest/most complicated step in the process, but once you get a hang of it, it will only take slight modifications in order to get through the remaining lessons.

Lets start by making a few variables. These variables will be used to store important serial information later on in the code.

Start by connecting your Arduino to your computer with the USB cable, and then open the p5.serialcontrol app. Select the port that you connected the Arduino to from the dropdown menu and press the open button. 

![serial1](/images/graphics/p5serial1.png)

If you have multiple USB devices connected you may need to experiment to see which one is the correct port. The name will be formatted like shown below, but every port on every device will have a unique number identifier.

```
/dev/cu.usbmodem144101
```

Then, you will be able to copy the code from the window on the right side of the app and copy it into a new P5 project. 

![serial2](/images/graphics/p5serial2.png)

If you have not, be sure to include the p5.serial library in your HTML file or nothing from here on will be able to work.

Once you have copied this code into a P5 project, try running it. With the Arduino code we uploaded toy should see a small number appear in the top left corner of the canvas. As you adjust the position of the potentiometer you should see the numbers increase and decrease within the range of 0-1023. If you are not seeing this, try the following tips for making sure you have a correct connection:

* Stop your P5 sketch and restart it.
* Stop your sketch, close and reopen the port in p5.serialcontrol, restart your sketch.
* Stop your sketch, unplug and re-plug your Arduino, restart your sketch.
* Pause the Arduino web editor plug in and repeat the previous steps.
* Re-upload your code to the Arduino. Make sure the port is closed via p5.serialcontrol first or you will be unable to.

If you are still having issues, you may need to restart your device, or there is a conflict somewhere in your code. Be sure to go through the codes shown on this mage to make sure everything matches identically.

So now lets do something a little more visually interesting. If you look at the code we copied from the p5.serialcontrol app you will notice there are quite a few functions. We do not need to concern ourselves with most of them as they mostly serve to send information to the console for the user to see that everything is behaving properly. If you move down to the draw function you will notice that the value coming in from the Arduino is being stored in the `latestData` variable. We can use that number to manipulate things on the canvas. Lets work with a circle for now. If you add this line into your `draw()` function and restart it, you should see a purple circle appear on the screen.

```
fill('purple');
ellipse(width / 2, latestData, 100, 100);
```

Now when you run the code you should see the circle move in time with the potentiometer like below. You will notice that the circle may appear a little jumpy. This is because the sensor is transmitting slight variations in data extremely fast. You can attempt to relieve this by lowering the frame rate in P5, but keep in mind that this can affect everything in the draw function in more complex examples. You may notice that the circle occasionally jumped a large distance. if the connection to the potentiometer or the arduino pins are not stable, random numbers will get passed in. Try removing your potentiometer from the circuit, or wiggling the pins and see what happens. (having a completely stable connection would involve soldering the parts together, which is not part of this course.)

<iframe width="560" height="315" src="https://www.youtube.com/embed/gv8IfTsK6h0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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

## Practice

Now that we have been able to send analog data into P5 via a potentiometer, try to experiment with the other sensors you have in your kit. What kinds of interactions are you able to achieve? The chapter assignment and the [Final Integrations Project](https://pdm.lsupathways.org/5_integrationproject/) will have you creating your own codes that receive and transmit serial data using P5 and Arduino. Start thinking now about what interactions you can use that make logical sense for what you want to alter on the screen. This will help save you a little time later on and help you to make a stronger final project!

There are also several example P5 codes present in the [p5.serial API](https://github.com/p5-serial/p5.serialport) that you can explore.


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

---
