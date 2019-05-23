---
title: Basic & Advanced Shapes
weight: 1
---
## Drawing Basic Shapes

p5.js allows us to create basic shapes with the use of the following functions:

* ellipse() - circles, ovals
* rect() - rectangles, squares
* triangle() - all triangles
* arc() - portions of circles/ovals

Each shape function requires a different set of arguments to be added when called. Typically, the first two arguments dictate the X and Y coordinate of a point of the shape's placement on the canvas, while the following arguments dictate the shapes size:

* ellipse(X location of the shape's center, Y location of the shape's center, Total Width of the shape, Total Height of the shape)
  * A perfect circle would use the same number for the third and fourth arguments.
   
   
* rect(X location of the shape's upper lefthand point, Y location of the shape's upper lefthand point, Total Width of the shape, Total Height of the shape)
  * Since the shape is placed on the canvas by it's upper lefthand corner, the location of the other corners of the square can be determined by the numbers used for the third and fourth arguments.
    * Example: calling rect(50, 50, 100, 100) would have the upper lefthand corner located at 50 X & 50 Y, and the upper righthand corner at 150 X & 50 Y, and the lower righthand corner at 150 X & 150 Y.
  * A perfect square would use the same number for the third and fourth argument.



* triangle(X location of the shape's first point, Y location of the shape's first point, X location of the shape's second point, Y location of the shape's second point, X location of the shape's third point, Y location of the shape's third point)
  * Unlike ellipses and rectangles, p5.js draws triangles based on the coordinates of all three of the shape's corner points. You can place these point coordinate pairs in any order you'd like, but it is best to image drawing the shape on the canvas moving from left to right or right to left in order to keep track of the point coordinates in your head.

* arc(X location of the shape's center, Y location of the shape's center, Total Width of the shape, Total Height of the shape, Start of the arc's perimeter, Stop of the arc's perimeter)
  * The first four arguments are the same as those used to create an ellipse. 
  * The fifth argument states where to start drawing the outer perimeter of the circle. p5.js draws the perimeter **_counterclockwise_**, and the sixth argument tells the function at what point to stop drawing the perimeter.
