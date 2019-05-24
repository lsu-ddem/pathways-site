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
fill(186, 132, 135); //rose color
```

We can also pass three or six digit hex code colors into the `fill()` function, but they need to be passed in as a string.

```
fill('#222222'); //dark grey color
```

One of the benefits of setting color through RGB values is that you can easily change one or more values in realtime by replacing fixed values with variables. The code below demonstrates all of the previously discussed methods of setting color with the `fill()`function as well as demonstrating the process of changing color values through interaction:

{{% codepen 400 byvxvL %}}

### Packaging RGB values together

As you can see, in order to replace a fixed R,G,or B color value with something changeable, we will need to swap it out with a variable. Since three arguments are needed to set a color through this manner, we would need either three separate variables, or we could package all three together into one array:

```
var roseColor = [186, 132, 135]; 
fill(roseColor);
```

This works because all three RGB values are separated as three discrete elements inside the array when we build it. We could also condense things even further by using p5's `color()`function, which generates color data out of RGB values and stores that data neatly into a variable, removing our need for an array altogether:

```
var roseColor = color(186, 132, 135);
fill(roseColor); 
```

{{% notice tip %}}

The difference between `fill()` and `color()` is that **fill( )** sets the color of an object whereas **color( )** actually generates a color out of hexcode or RGB values. There are benefits and downsides to using either of them, and which one you use may depend on your specific project needs. To learn more about their differences, head to the [p5.js Reference Page](https://p5js.org/reference/#group-Color).

{{% /notice %}}



## Greyscale and Transparency

When using RGB color values, we will need to use one discrete value to represent each of our primary colors. If we want to set a grayscale color, we can simply pass one argument into the `fill()` function. Using 0 (black) to 255 (white), we can create shades of gray in our project. The following code demonstrates a changing grayscale fill, which you can adjust by moving your mouse from left to right:
