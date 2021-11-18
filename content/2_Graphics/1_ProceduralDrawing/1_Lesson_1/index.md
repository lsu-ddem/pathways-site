---
title: Basic & Advanced Shapes
weight: 1
---
## Drawing Basic Shapes

p5.js allows us to create basic shapes with the use of the following functions:

* `ellipse( )` - circles, ovals
* `rect( )` - rectangles, squares
* `triangle( )` - all triangles
* `line( )` - straight line between two points
* `arc( )` - portions of circles/ovals

Each shape function requires a different set of arguments to be added when called. **Typically, the first two arguments dictate the X and Y coordinate of a point of the shape's placement on the canvas, while the following arguments dictate the shapes size**:

* **ellipse**(_X location of the shape's center, Y location of the shape's center, Diameter (Total Width of the shape), Diameter (Total Height of the shape_)
  * A perfect circle would use the same number for the third and fourth arguments.
* **rect**(_X location of the shape's upper lefthand point, Y location of the shape's upper lefthand point, Total Width of the shape, Total Height of the shape_)
  * Since the shape is placed on the canvas by it's upper lefthand corner, the location of the other corners of the square can be determined by the numbers used for the third and fourth arguments.
    * Example: calling `rect(50, 50, 100, 100)` would have the upper lefthand corner located at 50 X & 50 Y, and the upper righthand corner at 150 X & 50 Y, and the lower righthand corner at 150 X & 150 Y.
  * A perfect square would use the same number for the third and fourth argument.
* **triangle**(_X location of the shape's first point, Y location of the shape's first point, X location of the shape's second point, Y location of the shape's second point, X location of the shape's third point, Y location of the shape's third point_)
  * Unlike ellipses and rectangles, p5.js draws triangles based on the coordinates of all three of the shape's corner points. You can place these point coordinate pairs in any order you'd like, but it is best to imagine drawing the shape on the canvas moving from left to right or right to left in order to keep track of the point coordinates in your head. A good practice is leaving a comment in your code to identify the order of your corners.
* **line**(_X location of of the first end of the line, Y location of the first end of the line, Y position of the second end of the line, Y position of the second end of the line)
  * Similarly to triangles, P5 draws a straight line based on the coordinates of the two end-points of the line. All of the methods for keeping track of the triangle corners can be applied to lines as well.
  * The line thickness and color can be customized with the `stroke()` and `strokeWeight()` functions as shown below.
* **arc**(_X location of the shape's center, Y location of the shape's center, Total Width of the shape, Total Height of the shape, Start of the arc's perimeter, Stop of the arc's perimeter_)
  * The first four arguments are the same as those used to create an ellipse. 
  * The fifth argument states where to start drawing the outer perimeter of the circle. p5.js draws the perimeter _**counterclockwise**_, and the sixth argument tells the function at what point to stop drawing the perimeter.
  * Be default, p5.js requires radians (PI, QUARTER_PI, etc.) to be used for the fifth and sixth arguments of `arc( )` but it is a bit easier to use degrees (0-360). In order to use degrees instead, call `angleMode(DEGREES)`before calling your `arc( )`function and p5.js will convert the fifth and sixth arguments properly.
    * Example: `calling arc(120, 15, 60, 60, 90, 270)` draws a half circle split vertically, with its center located at 120 X & 15 Y, 60 pixels wide and 60 pixels tall (if the entire circle was drawn), with a perimeter that starts at 90 degrees and extends counterclockwise stopping at 270 degrees.
  * By default, arcs are left "open" when drawn. To add a stroke outline to the flat edges of an arc (to the shape's center), add the word **_PIE_** as an optional seventh argument to the `arc()`function creating a pie-graph shape.
  * There are a total of three options for the arc's optional seventh argument. In addition to **_PIE_**, the argument **_CHORD_** connects the connects the edges of the arc with a straight line that avoids the center of the shape. **_OPEN_** resets the arc to its default settings.

---

### Let's Practice!

An example of these four basic shapes can be found in the code below. Try changing some of the arguments to see how this modifies the shape's location or appearance:

{{% codepen 500 zQRVby %}}

There are a few other function for drawing shapes in the p5 library. We won't refer to them in this class, but feel free to check them out in [the p5 reference page](https://p5js.org/reference/) and see what you can make!

## Outlines (Stroke weight and Stroke Color)

p5 draws shapes with a thin black outline by default. This outline is called the **stroke**, and it can be modified in a number of ways.

The `stroke()` function changes the color of *_all_* lines drawn after it is called. It can take either a string or RGB color values as arguments (in the next lesson), similar to the `fill()` function. 

The thickness of a shape's stroke can be set with the `strokeWeight()` function. It takes a single argument that sets the thickness in units of pixels.

To remove an outline from a shape entirely, use the `noStroke()` function. You will then have to call `stroke()` again to set the values for the next shape you need with an outline.

---

### Let's Practice!

The following code adds changeable stroke color and stroke weight to the same shapes from the previous code. Try adding the `noStroke()` to different places in the code to see how it affects the shapes:

{{% codepen 500 WBMVbd %}}

---

## Drawing Custom Shapes

We can create complex images by overlapping basic shapes, but we can also design our our shapes by connecting multiple vertices together. To do this, we first call the `beginShape()`function, then one `vertex()` function with a pair of X & Y coordinates for the location of each angle point of our shape. These form the corners of the shape, just like the arguments of the `triangle()` function. Finally, we call the `endShape()` function to designate that we have completed our design. Similar to the `triangle()` function, p5 draws connects the coordinates in our `vertex()` functions in the order in which we code them, so take extra care to have a plan in place for working in a clockwise or counterclockwise order or you will have stroke outlines bisecting your finished shape. When in doubt, it is always a good idea to label the vertex points in a custom shape.

Like the arc() function, the final line segment of our custom shape is left "open". To add a final stroke and "close" the shape, we can add the word **_CLOSE_** as an argument in the `endShape()` function. (you can also add another vertex with the same location as the first instance of `vertex()`, but adding CLOSE as an argument is easier.)

The following code shows two custom shapes drawn using the `beginShape()`, `endShape()`, `vertex()`, procedure:

{{% codepen 500 dEmKre %}}

These shape functions can be used in various repetitions and combinations within P5 to create a near limitless variety of images, however this is not an exhaustive list of all available functions. Depending on the context of a particular assignment or your [Final Integration Project](https://pdm.lsupathways.org/5_integrationproject/) you may need to utilize additional drawing functionality. Be sure to look at the [P5 Reference](https://p5js.org/reference/) material for detailed information on these and other functions within P5.

---

### Let's Practice!

Before moving onto the next lesson, try and draw one of each of the shapes mentioned in this chapter. Give them all unique colors and outlines with fill() and stroke(). How creative can you get with the custom shape functions?

---