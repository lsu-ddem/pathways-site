---
title: Color and Transparency
weight: 2
---
## Working with Color in p5.js

There are a number of ways to set the color of objects, shapes, backgrounds, and outlines in p5.js. With the exception of stroke outlines (which uses the `stroke()` function) and canvas backgrounds (which uses the `background()` function), we will use the `fill()` function to add color to things that we draw.

{{% notice warning %}}

The `fill()`function works like a paint can resting on top of a ladder: when it tips over, it will change the color of everything below it. Since our code is read top to bottom, calling the `fill()` function before calling any shape functions will set the color of all shapes drawn from that point forward. To change the color of a specific shape, you will need to call the `fill()` function again immediately before the function that draws that shape.

{{% /notice %}}



### Setting Color with fill( )

p5.js allows the `fill()` function to accept a number of different data types. Strings allow you to choose from a handful of colors that p5.js designers have preprogrammed into the main p5.js library. Not all colors imaginable are possible to represent with a string, so try out as many as you can think of and see what works!

```
fill("lightGreen");ellipse(12, 36, 78, 90);
```

We can also use numbers as arguments in order to create very specific color shades. We do this by balancing red, green, and blue values. Start by designing a color shade using a tool such as an [RGB Color Calculator](https://www.w3schools.com/colors/colors_rgb.asp) to find the shade you'd like to use. Once you pick your shade, you'll notice the color's red, green, and blue values represented as three discrete number values between 0 and 255:

![](/images/uploads/screen-shot-2019-05-24-at-10.14.00-am.png "RGB Color Calculator example")



We can now add these values in order (R,G,B) as three arguments when we call the `fill()` function, and p5.js will mix these values to create our chosen color.

```
fill(186, 132, 135); //rose colorellipse(12, 36, 78, 90);
```

We can also pass three or six digit hex code colors into the `fill()` function, but they need to be passed in as a string.

```
fill('#222222') //dark grey colorellipse(12, 36, 78, 90);
```

One of the benefits of setting color through RGB values is that you can easily change one or more values in realtime by replacing fixed values with variables. The code below demonstrates all of the previously discussed methods of setting color with the `fill() `function as well as demonstrating the process of changing color values through interaction:

{{% codepen 400 byvxvL %}}
