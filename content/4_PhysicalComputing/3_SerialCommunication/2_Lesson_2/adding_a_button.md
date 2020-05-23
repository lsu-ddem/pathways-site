---
title: Adding a Button for Digital Serial Input
weight: '2'
---

So far we have gone through the majority of the code we need to in this chapter. We have successfully built a circuit that sends a voltage to the arduino, and then that arduino transmits the signal to P5, which responds by changing values in the code based on the voltage levels. We have been able to do this with an analog signal, but how different would this be with a digital input from something like a button or a switch? As it happens, a large portion of this process is identical to the code we have just completed. In fact some of the examples in the previous lesson contained elements from this lesson that were commented out. As we work our way through this page, we will be adding a button into our code that we previously built so if you need to revisit that page in order ot make sure your circuit and code elements are correct, go a head and do that now. By the end of this lesson you will be able to affect your P5 code with real-world interactions using both analog and digital means.

---

## The Circuit

For this circuit we will be building from our previous one by adding a button. Your circuit should look like the one below. Keep in mind that we will be adding in two LEDs in addition to this so make sure you have enough space on your board.

![serialwithbutton](/images/graphics/serial2.png)


---

## The Arduino Code

The codes for the remainder of this chapter will also be build upon each other, so the items that we have to add are minimal. In this example, we need to add the elements needed to detect whether ot not the button is being pressed, and then send that value through the serial port.


---

## The P5 Code

---

## Bringing it all together: Digital and Analog inputs

---

## Practice

Now that we have worked out how to implement a button in our code, what other digital components could we use? Try replacing the button with a switch or a PIR sensor to see what kinds of interactions you can achieve. In the chapter assignment and [Final Integrations Project](https://pdm.lsupathways.org/5_integrationproject/) you will have to create a new code that receives serial data. Be sure to experiments to see what kinds of physical interactions make sense and feel natural for your final goals.