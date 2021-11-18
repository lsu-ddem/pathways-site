---
title: Sprite Appearance
weight: '2'
---

So far we have gone over some of the basics of making a sprite and having it move around the canvas, which will prove integral to the upcoming Bug Squish assignment. However, so far our sprites have only appeared as randomly colored rectangle on the screen. This is fine enough to explore how sprites function and what properties you could control, but there are a few drawbacks to the default appearance:

* The color changes every time the code runs. This could be confusing if you have multiple sprites that behave differently and have similar sizes or locations. How will you tell them apart? Even if you set all of the sprites to have unique appearances with `.shapeColor`, this does not fix the next issue.
* It is boring. (probably the most important drawback) How many games have you played where the characters were all various rectangles, devoid of any emotion or defining characteristics? 

In the following section we will go over how to add static images to our sprites, how to change these images, and how to sequence them in order to create various character animations. 

Here is an example of our final goal of attaching an animation to a sprite:

{{% codepen 400 ZRRoEG %}}

All of the interactivity from the previous section still applies, but next we will add new assets to our code so that the sprite appearance can change to be even more dynamic!

---
