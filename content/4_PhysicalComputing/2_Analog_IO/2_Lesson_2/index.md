---
title: Potentiometers and Sensors
weight: '2'
---

Now that we have an idea of what an analog signal is, lets look at some hardware that we can utilize to control these signals in real time. Many of the components are variable resistors, meaning that they will act like a fixed resistor in terms of how they interact with the flow of electricity, but their Ohm value can change under different circumstances. A few of them are voltage dividers, which can be noticed by their three leads. (This is not a hard rule as some components have three leads, but fall into other categories.) In a voltage divider, the electrical signal is sent two resistors. The different between the two resistors can be measures and used for a variety of purposes.

In this lesson we will go over details about some of the more common types of analog components and how to connect them to your Arduino board. We will not go into details about how to hook up every sensor however as many of the circuits are identical except for the sensor that is being used.

## Potentiometers

A potentiometer, abbreviated pot, is a type of variable resistor that can easily be used to create a voltage divider. Potentiometers generally look like a knob or a slider and by adjusting the position of the knob or slider an internal wiper moves across a resistive material, changing the resistance the component has on the current. This change can either be linear or exponential depending on the hardware. The total amount of resistance also varies based on the hardware.

![default](/images/graphics/pot1.jpg)

![default](/images/graphics/pot2.jpg)

![default](/images/graphics/slidepot.jpg)

Pots have three pins as shown in the images. The outside pins connect to the positive and negative source voltage, while the middle pin is connected to the wiper. By connecting this middle pin to an analog input on our boards, we can read the voltage division as a value between 0 and 1 with the `analogRead()` function.

### Wiring up a Pot

![default](/images/graphics/potwledcode.png)

![default](/images/graphics/Basic Pot and LED.png)

#### Reading the Voltage Data

### Other Kinds of Potentiometers

Most Arduino kits come with rotary pots, but potentiometers with a sliding mechanism are also common. Trim pots a a sub category of rotary potentiometers that are small in size and often used for calibration and other finite adjustments. They often need a screwdriver in order to turn. There are also components known as soft pots. These potentiometers function similarly to force sensors in the face that they react to pressure, however instead of changing their resistance based on the amount of pressure being applied, the soft pot responds to where the pressure is applied along its length. 

![default](/images/graphics/softpot.jpg)

---

## Sensors

A sensor will function similarly to a potentiometer, however their changes in resistance are reactions to various conditions instead of being directly caused by human intervention. These conditions include light level, direction, movements, location, sound volume, temperature, etc. There are far too many types of sensors in order to name them all right here.

### Light Sensor

Also called Photoresistors, a light sensor reacts to the electromagnetic radiation given off as visible light. As light hits the (often) red film behind the metal points, the resistance between them lowers.

![default](/images/graphics/lightsensor3.jpg)

Many of the smaller photoresistors tend to be less accurate than some of the other sensors on this list, but they can still be used in a large variety of situations.

#### Using a Light Sensor

### Force/Pressure Sensor

A force or pressure sensor looks like a flat version of a photoresistor. The component is comprised of two metal leads suspended in a resistive fluid and encased in plastic. The specific shape and size can vary, but they tend to be relatively small and either circular or rectangular in shape.

![default](/images/graphics/fps.jpg)

By applying pressure to the sensor, the fluid is displaced, decreasing te resistance. The more pressure that is applied, the more the resistance if lowered. There are different pressure sensors that can respond to varying levels of pressure. These sensors are great for general measurements, but lack the resolution to be used for accurate, fine-tuned pressure monitoring.

The circuit for utilizing a force/pressure sensor is identical to the one used for a light sensor.

## Distance Sensor

distance sensors are a little unique on this list because they have their own built-in circuitry. They are set up to function like a voltage divider however, which makes them easy to utilize as a means of data input.

![default](/images/graphics/motionsensor.jpg)

An infrared beam is sent out of one lens and when an object is within the range of the sensor, the beam will be reflected back and be detected by the second lens. The built in circuity calculates a value based on the amount of time that this reflection took place and adjusts the resistance of the unit accordingly. 

We can connect this sensor in place of a potentiometer

## Movement Sensor

## Flex Sensor

A flex sensor functions similarly to a pressure sensor except that it detects the force of the sensor bending in a specific direction.

## Temperature Sensor

Temperature sensors react to the ambient temperature around them and are the core component to many digital thermometers


---