---
title: Color and Transparency
weight: 2
---
## Working with Color in p5.js

There are a number of ways to set the color of objects, shapes, backgrounds, and outlines in p5.js. With the exception of stroke outlines (which uses the `stroke()` function) and canvas backgrounds (which uses the `background()` function), we will use the `fill()` function to add color to things that we draw.


The `fill()` function works like a paint can resting on top of a ladder: when it tips over, it will change the color of everything below it. Since our code is read top to bottom, calling the `fill()` function before calling any shape functions will set the color of all shapes drawn from that point forward. To change the color of a specific shape, you will need to call the `fill()` function again immediately before the function that draws that specific shape. The example below is what your code needs to look like in order to have multiple shapes with unique colors.

```
fill("lightGreen");
ellipse(12, 36, 78, 90);
fill("blue")
rect(100, 68, 4, 19);
```

## Setting Color with fill( )

p5.js allows the `fill()` function to accept a number of different data types. Strings allow you to choose from a handful of colors that p5.js designers have preprogrammed into the main p5.js library. Not all colors imaginable are possible to represent with a string, so try out as many as you can think of and see what works!

```
fill("lightGreen");
ellipse(12, 36, 78, 90);
```

The colors that are strings are defined within the core of P5 and your web browser, so they cannot be changed. using [these](https://searchwindevelopment.techtarget.com/definition/136-browser-colors-with-names) pre-created colors is beneficial for quick codes, but lack any degree of customization. Using RGB or Hexadecimal color codes as arguments can allow us to specify our intended colors with a much finer level of detail.

We can utilize a collection of three numbers as arguments in P5's color related functions in order to create very specific color shades. We do this by balancing amount of red, green, and blue present in the color. You can start by designing a color shade using a tool such as an [RGB Color Calculator](https://www.w3schools.com/colors/colors_rgb.asp) to find the shade you'd like to use. Once you pick your shade, you'll notice the color's red, green, and blue values (R,G,B) represented as three integer number values between 0 and 255:

![](/images/uploads/screen-shot-2019-05-24-at-10.14.00-am.png "RGB Color Calculator example")

We can now add these values in order (Red,Green,Blue) as three arguments when we call the `fill()` function, and p5.js will mix these values to create our chosen color.

```
fill(186, 132, 135); //rose color
```

By increasing one of these numbers, you increase the amount of red, green, or blue (respectively) in your color. 0 would be none of a color, and 255 would be as much as possible. Having a value outside of this range will cause P5 to default to the closest value that the program can process (either 0 or 255)

### Let's Practice!

Let's practice by pulling up some code examples from previous lessons. Can you represent all of the colors using RGB values? Can you create your own custom colors?

---


We can also pass three or six digit hex code colors into the `fill()` function, but they need to be passed in as a **string**.

```
fill('#222222'); //dark grey color
```

These hex code colors are binary representations of various combinations of red, green, and blue, and are a different representation of the same values we discussed with RGB color codes. Because each of the three colors have 256 total potential values, there is a possibility of over 16 million discrete color combinations utilizing these codes; a much larger range of possibilities than the approximately 140 colors identifiable via preset strings. 

One of the benefits of setting color through RGB values is that you can easily change one or more values in realtime by replacing fixed values with variables. The code below demonstrates all of the previously discussed methods of setting color with the `fill()`function as well as demonstrating the process of changing color values through interaction:

{{% codepen 400 byvxvL %}}

### Packaging RGB values together

In order to replace a fixed R,G,or B color value with something changeable, we will need to swap it out with a variable. Since three arguments are needed to set a color through this manner, we would need either three separate variables, or we could package all three together into one array:

```js
let roseColor = [186, 132, 135]; 
fill(roseColor);
```

This works because all three RGB values are separated as three discrete elements inside the array when we build it. We could also condense things even further by using p5's `color()`function, which generates color data out of RGB values and stores that data neatly into a variable, removing our need for an array altogether:

```js
let roseColor = color(186, 132, 135);
fill(roseColor); 
```

The difference between `fill()` and `color()` is that **fill( )** sets the color of an object whereas **color( )** actually generates a color out of hexcode or RGB values. There are benefits and downsides to using either of them, and which one you use may depend on your specific project needs. To learn more about their differences, head to the [p5.js Reference Page](https://p5js.org/reference/#group-Color).


---

### Let's Practice!

If you need to, look back at [the lesson on arrays](https://pdm.lsupathways.org/1_introtocoding/2_makingthings_happen/2_lesson_2/) to refresh yourself on the details of arrays. Try using an array to set RGB color values of a shape like above. Then, try using a conditional statement to have individual values in the RGB array change. How complex can you make it? can you make the color randomly change?

---

## Grayscale and Transparency

When using RGB color values, we will need to use one discrete value to represent each of our primary colors. If we want to set a grayscale color, we can simply pass _one_ argument into the `fill()` function. Using 0 (black) to 255 (white), we can create shades of gray in our project. The following code demonstrates a changing grayscale fill, which you can adjust by moving your mouse from left to right:

{{% codepen 500 BerGxj %}}

The default P5 patch utilizes this color scheme by setting the `background(220)` line inside of the draw() function. the results are a slightly off-white canvas by default.

We can also control the transparency value of a color by adding in an **alpha value**. For RGB colors, the alpha is represented as a number between 0 (completely transparent) and 255 (fully opaque) and passed in as a fourth, optional argument to `fill()` or `color()`. For transparent grayscale colors, we can add the alpha value as the second argument. The code below demonstrates how transparent colors can be used in a project for realtime color blending:

{{% codepen 600 YbaRbK %}}

Notice how the shapes with this alpha value added can now be seen through. This can be useful for various drawing and interactive purposes in our projects later on. You may see this color scheme abbreviated as RGBA when the alpha value is included.

---

### Let's Practice!

Now that we can make over 16 million custom colors with RBG values (a little over 4.2 billion with the alpha transparency value included!), let's have a little practice before moving onto the next lesson. 

WITHOUT using any RGB color mixers, try and create a shape with the following colors. Experiment and see what shades you can create! The names of colors are fairly vague to see what you can come up with!

* lime green
* scarlet
* aquamarine
* violet
* tangerine
* puce

Now, lets try using the RGB values. Below are the RGBA values for several colors. What are the colors they make? (these don't correspond with the names of colors above)

* [255, 0, 0, 255]
* [0, 0, 0, 100]
* [135, 100, 250, 255]
* [25, 195, 13, 199]
* [0, 50, 210, 255]

---
