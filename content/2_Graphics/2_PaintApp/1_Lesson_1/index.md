---
title: Measuring the Boundaries of a Shape
weight: '1'
---
In your projects, you'll often want to have interactive mouse events tied to specific shapes or drawings. This makes your codes much more intresting and dynamic for you or anyone else who interacts with them. It's important to remember that any shape or object drawn on the canvas can't simply be referred to by name, since p5.js has no way of knowing the difference between a green triangle or a pink square. In order to determine whether or not a user has clicked on a 2D object, we have to use conditional statements to measure whether or not the mouse click occurred within the boundaries of that object.



The process of tracking and reacting to mouse clicks on objects will becomes easier with the use of a specialty library, particularly ones used to make game development more intuitive. We'll begin working with just such a library, **p5.play.js**, in the next chapter. However, to understand how the library is functioning, we first need to go over the basic concepts and math involved.

---

## Stationary Shape Measurements

The logic involved with determining the boundaries of various shapes is relatively similar even if a shape is moving across the canvas. However, since it is easier to test that your code is functioning properly when the target isn't moving across te screen, lets begin with stationary shapes.

### Squares and Rectangles

Let's imagine that you want to register whenever a user clicks their mouse inside of the square drawn below. The function called to draw the square looks like this:

```javascript
rect(200, 50, 150, 150);
```

![](/images/uploads/square_measurement-2-.jpg)

The coordinates of the upper lefthand corner of the square match the first two arguments of our `rect()` function. Using basic math and the last two arguments of the function, we can figure out the coordinates of the remaining corners:

![](/images/uploads/square_measurement-3-.jpg)

Now we can see that the corners of our rectangle have a handful of shared coordinates. Let's look at our shape again, highlighting the four significant borders we need to measure (pink for our X coordinates, orange for our Y coordinates) and image what we should measure to know when our mouse cursor has landed inside:

![](/images/uploads/square_measurement_mouse.jpg)

Based on our math, we need to code a test that can only pass if our mouse is clicked **_and_** if it's located at a point greater than  200 X _**and**_ less than 350 X _**and**_ less than 200 Y _**and**_ greater than 50 Y. We can do this by making a conditional that measures all four of those conditions simultaneously. As a reminder, the **&&**  operator will stand in for the word "and" in our test. The following code demonstrates a border measurement click test, causing the background color to change _only_ when we click inside the bounds of the square:

{{% codepen 400 zQjwzv %}}

Try modifying this code by removing the "mouseIsPressed" portion of the test. This allows the background to change when the mouse cursor simply hovers over the square.


You'll notice that the individual greater than/lesser than tests in the example above are incased inside of parenthesis pairs. This is done in order to make out code look cleaner and to make each portion of this multi-portion test easier to identify. Be careful to count your individual symbols and not leave out the essential parenthesis that forms the if ( ) test format!

As you will see later on, the idea of measuring the boundary of a rectangle is important to several upcoming concepts and assignments. Be sure to take the time to go through all of the codes provided to make sure you have a solid understanding of te concept.


### Circles

Measuring the boundaries of a circle is a slightly more challenging task, since there are no sides for us to measure. Instead, we'll need to know the coordinates of the circle's center, the diameter of the circle, and its radius: 



![](/images/uploads/circle_measurement.png)



The first three values can be found as the four arguments passed into the **ellipse( )** function called to draw the circle to the canvas. The circle's radius is half of its diameter. We should declare a variable to hold that result of the circle's diameter divided by 2 so that we can use that value later.

Since the radius is the distance between the center of the circle and its enter outer perimeter, our next step is find a way to trigger an event whenever our **mouseX** and **mouseY** variables cross that perimeter. If we can compare the value in our circle radius variable against the distance between the current mouse location and the circle's center, we could use that to test if our mouse has hovered over or been been clicked inside of our circle:

![](/images/uploads/circle_distance_measurement.png)

To accomplish this, we can use p5.js' `dist()` function. This function lets us pass in two pairs of X/Y coordinates and returns the number of pixels between those two points. Using this function, we need to devise a test that compares the distance between our mouse location and the circle's center with the circle's radius value. The test should only pass if the distance value is less than the radius value and if the mouse is clicked. Storing the ever-changing result of our `dist()` function inside of a variable will make this test easier to understand, and the code embedded below shows an example of what this test should look like:

{{% codepen 500 VOxWyq %}}

Because the radius is half of the diameter, a value we need to draw the circle, we can simply calculate the value of r by dividing our `circleDiam` value by 2. Then we need to continually check the distance between the mouse's location on the canvas and the center of our circle. By storing this distance in a variable (that updates every time the mouse moves) we can compare this value with our radius and determine when the circle's threshold has been crossed.

Remember that you are not interacting directly with the shape that is visible on the canvas. in reality an invisible boundary is being set up that (intentionally) matches the measurements of our shapes. Try commenting out the `rect()` or `ellipse()` functions in any of these codes (leave everything else) and you will see that they still function if you click where the shape is no longer being drawn.

---

## Moving Shape Measurements

The techniques learned above will also work for shapes that are moving across the canvas. The only difference in our boundary measurement tests will is the need to measure our mouse location against variables that stand in for the ever-changing location of the shape's edges/centers. Take a look at the code below and test it out. The background will change to different colors when you click on the square versus when you click on the circle. Compare this code to the ones we studied above:

{{% codepen 500 vwjWEa %}}

Notice how the shape parameters are all variables instead of being hard-coded like before. Because the logic is still the same, we can substitute and variety of values and achieve a consistent effect. This is why the shapes can move and still be measured. Try changing the variable values and you will see that the code still contains the same functionality. 

---
