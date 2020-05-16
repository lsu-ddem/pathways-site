---
title: Turning an LED On and Off
weight: 2
---

Now that we have been able to set up arduino to turn a built in LED off and on, lets build our own circuit to do this. To do so, lets go over what exactly an LED is, and how we will build the connections to program it.

## What is a Light Emitting Diode?

Light Emitting Diodes, or LEDs are a light source that give off their light when electricity is passed through them. looking at your LEDs up close you will notice that it is comprised of 2 or more leads encased in a housing on one end. This housing places the leads close to one another and once electricity flows through the system, electrons will jump from one to the other. The color of light given off is a combination of the amount of energy it requires to cause these electrons to jump across the gap, and any coloring applied to the housing. Most LEDs only produce one color when they are activated, however there are some that can produce multiple colors. You can tell these apart by their clear housings and multiple leads. (each lead controls a certain color, usually RGB)

![default](/images/graphics/led.jpg)

You will notice that one lead is slightly longer than the other. This indicates which end of the LED is the positive-facing end to make sure that the LED is facing the right direction. Having the LED placed into the circuit backwards will cause the light to not turn on, or potentially even explode depending on the amount of current being passed through it.

---

## LED Circuit

### The Code Component

Lets begin with replicating the 'Blink.ino' while that we loaded onto our board in the previous lesson. (shown below)

<iframe src=https://create.arduino.cc/example/builtin/01.Basics%5CBlink/Blink/preview?embed style="height:510px;width:100%;margin:10px 0" frameborder=0></iframe>

You can save a copy of this sketch by going to the file menu -> save as. You will need to do this in order to save any edits to this code. Give your code a new name and then follow along. (alternatively you can copy the code into a new file)

![default](/images/graphics/saveas.png)

1. Copy the `pinMode(LED_BUILTIN, OUTPUT);` command on line 28 and paste it inside of `void setup()`
2. Change the first argument from `LED_BUILTIN` to ledPin
    * This will make our code set up another pin on the arduino to function identically to the original pin.
3. Make a global variable called ledPin. You can change this value to change which pin is used to control our LED

    ```
    // line 24 in the starting file is a good place to put this line
    int ledPin = 4;
    ```

4. Now we repeat the process of step number 2. with the `digitalWrite()` functions inside of `void loop()` so that the function now looks like this

    ![default](/images/graphics/saveas.png)

5. Now we can upload the code to our arduino. You will see the original LED still blink, but now we can move to the next page and build the circuit.
