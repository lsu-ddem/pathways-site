---
title: Assignment: Pulse Width Modulation
weight: '4'
---

The chapter 11 assignment will be to use sensors to crate different kinds of dimmer switches for an LED. However, before we can dive into that, there is one more topic that we need to cover: pulse width modulation. It is through this process that we will be able to control the digital signal that turns an LED on and off with an analog signal.

## PWM

If you remember from chapter 10, an LED is a digital component, meaning that it has only two states. So how can we get an LED to adjust its brightness? The answer to this is the process of pulse width modulation. Technically, we have already done a little bit of PWM when we were connecting the sensors and pots in the previous lesson, only it was much slower that what we will be doing next. Before we get into the details of PWM, lets look at this short video showing how the potentiometer code worked in the previous lesson. You can return to that page for diagrams and instructions if you need ot rebuild the circuit or re-upload the code to your arduino board. Keep in mind that this 30-second video does contain a quickly flashing blue light. Please exercise caution when choosing to watch this video. A text description is available below the video for those who may be sensitive to these images.

<iframe width="560" height="315" src="https://www.youtube.com/embed/AoPqZdEqY_s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In this circuit, power is being run across a potentiometer. The second pin, which is connected to the wiper, is being routed into the analog input pin A0 on the board. As the pot is adjusted, the resistance of the circuit changes, altering the amount of signal being sent to the pin. this signal is represented as a number between 0 and 1023. We are then using the arduino code to use the value of pin A0 to set the `delay()` function, which we used in the original blinking LED code. Because this value is changing, we can now adjust the rate that the LED turns on and off by adjusting the potentiometer. The potential delay times can now be anywhere between 0 and 1023 milliseconds.

But did you notice what happened when the delay times were extremely low? The LED appeared to stay on despite the fact that we were sending it a series of on and off messages. This happens because the signal change is happening at a rate faster than the eye can see. If you looked closely, you may have noticed slight changes in the brightness of the LED as well, but don't worry if you couldn't; the code we will be building later in this lesson will make it easier to see.

Simply put, an LED only has two states: on an off. But what if we changed how often the LED was in each state? By changing the percentage of time that an LED is on, we can change the perceived brightness. Keep in mind that these changes will still have to happen faster then the human eye can see, but we will be able to notice a noticeable difference. 

This percentage that the LED is on is called the duty cycle. A duty cycle of 100% means that the LED is always on (or at maximum brightness), whereas a duty cycle of 0% indicate that the LEd is always off. (the minimum brightness) Adjusting the value to be between these extremes will allow us to change the brightness.

![default](images/graphics/dutycycle.jpeg)

Because the LED is only outputting its signal for half of the time a 50% duty cycle is running, the light's brightness will average out to 50% brightness over the time that we are looking at it.

### Applying to an LED

---
