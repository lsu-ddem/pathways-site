+++
title = "Coordinates and the Canvas"
outputs = ["Reveal"]
layout = "bundle"
hidden = "true"
[reveal_hugo]
theme = "solarized"
margin = 0.2
+++


## Coordinates and the canvas

* Whatever you want the viewer to see must be on the canvas.
* You can cover up something on the canvas by adding something new   on top of the original object.
* The canvas can come in many colors and sizes
There is a definitive top and bottom for the canvas.

---

## createCanvas()



* how large to make the p5 canvas: 

![The P5 starting code](/images/graphics/p5default.png)

{{<note>}}
Inside of function setup(), you can see the line createCanvas(400, 400); this line is what tell p5 to create the canvas, and how large to make it. The numbers represent how wide and tall to make the canvas from the top-left corner, in pixels. The default is 400px x 400px. Try adjusting these number to see how the canvas changes.

Inside of function draw(), you can see the line background(200); this line is what determines the color of the canvas. We will discuss color in more detail in a later chapter, but know that the number represents the grayscale shade of the canvas. 0 = completely black, and 255 is completely white. (number higher than 255 will not affect the color and will will just read as 255 when the code is executed)
{{</note>}}

---


* the canvas is similar to the coordiante plane: 

![Image originally from: https://socratic.org/questions/in-what-quadrant-is-the-point-6-7 ](/images/graphics/coordinateplane.jpg)

{{<note>}}
As previously mentioned, the canvas is arranged in pixels, similar to a coordinate plane in geometry. What is important to know is that the point 0, 0 is the TOP LEFT corner of the canvas, like quadrant 4 of a coordinate plane. 
{{</note>}}


---

experiment with coordinates by drawing a circle: 

{{% codepen 600 pojzjoX %}}

---

here we add interaction:
{{% codepen 600 xxwKwgq %}}

{{<note>}}
In the next code, the same functionality from the previous code is present, but now when you click the mouse, a bulls-eye pattern will appear at the mouse’s location. The XY pixel coordinate of this shape is also displayed. Try clicking in various places to see how the location numbers change. 
{{</note>}}

---

## Basic shapes

* line(X1, Y1, X2, Y2);
    * line() draws a straight line between the two coordinate points given as arguments. 
* ellipse(X location of center, Y location of center, width of shape, [height of shape])
    * An ellipse is a circle or oval. By default, an ellipse is drawn out from the center point. (note, the height of the shape is not required to draw an ellipse, but p5 will assume that it will be a perfect circle unless you give it a specific height)

--- 

* rect(X of top left, Y of top left, width of shape, height of shape)
    * Rectangles are drawn similarly to the canvas: starting at the top left, and then out by a specified width and height. Having the last two arguments be identical will result in a perfect square.
* triangle(X1, Y1, X2, Y2, X3, Y3)
    * Triangle can be a little difficult. Each pair of numbers is the XY pixel location of a point of the triangle. To move the shape, you will have to move each point individually, and may have to do a little math in order to make everything line up properly.


{{<note>}}
For more information on the shape functions, look at the chapter “Basic and Advanced Shapes”
{{</note>}}

---

create the following image using the image and code below as a guide line: 

![defaut](/images/graphics/gridimages.png)

---

{{% codepen 600 pojzjoX %}}

##### Select all of the code in this Codepen and paste it into a new P5 project in order to start your assignment. #####

