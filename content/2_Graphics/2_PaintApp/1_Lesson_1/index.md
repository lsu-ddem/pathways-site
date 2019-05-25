---
title: Measuring the Boundaries of a Shape
weight: '1'
---
Often times, you will want your project to have interactive mouse events tied to specific shapes or drawings. It's important to remember that any shape or object drawn on the canvas can't simply be referred to by name, since p5.js has no way of knowing the difference between a green triangle or a pink square. In order to determine whether or not a user has clicked on a 2D object, we have to use conditional statements to measure whether or not the mouse click occurred within the boundaries of that object.

{{% notice note %}}

The process of tracking and reacting to mouse clicks on objects will becomes easier with the use of a specialty library, particularly ones used to make game development more intuitive. We'll begin working with just such a library, p5.play.js, in the next chapter.

{{% /notice %}}



## Stationary Shape Measurements

Let's imagine that you want to register whenever a user clicks their mouse inside of the square drawn below. The function called to draw the square looks like this:

```
rect(200, 50, 150, 150);
```

``
