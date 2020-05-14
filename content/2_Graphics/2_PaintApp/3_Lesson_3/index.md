---
title: Chapter 5 Review & Assignments
weight: 5
---
## Chapter 5 Review

Lets go over some of the basics from the previous lessons:

---

### Advanced interactions on shapes

We can utilize conditionals in order to determine if our mouse if located in the same place on the canvas as a shape. By applying a little math to the coordinates of a shape, we can determine the proper values to place in our conditional statement.

#### Rectangles

Lets set up the rectangle below

```
a = 100
b = 100
c = 200 
d = 300

rect(a, b, c, d);
```

We ca use the following relationships to determine the boundaries of the shape:

* a = rectangle left side
* b = rectangle top side
* a+c = rectangle right side
* b+d = rectangle bottom side

We can then plug in the appropriate values into a conditional statement like the one below:

```
if(mouseX > a && mouseX < (a+c) && mouseY > b && mouseY < (b+d)){
    result code for when mouse overlaps
}
```

#### Circles

Circles require a slightly different procedure involving the `dist()` function.

We first have to determine the radius of our circle. Then we can follow the steps below

```
//1. create the values needed for the shape
let circleX = x-location of shape center
let circleY = y-location of shape center
let cicrleDiam = circle diameter

let d, rad //these values will be used in the test

//2. calculate the radius
function setup(){
    rad = circleDiam / 2;
}

function draw(){
//3. calculate the distance between the mouse and the circle's center
    d = dist(circX, circY, mouseX, mouseY);

//4. use a conditional to see if that distance is less than the radius of the circle   
   if(d < rad){
       results when the mouse overlaps with the circle
   } 
}
```

---

### Nested Conditionals 

We can nest conditional statements inside of each other, just like we can with for loops. when this happens, the result of one test passing is another test. Both of these tests have their own independent conditions for passing and results if they do pass. However, the inner-level test wlll never be run without the outer-level test first passing.

```
background('blue');

if(mouseIsPressed === true){
    if(mouseX > width / 2){
        background('green');
    } else{
        background('red');
    }
} else{
    background('blue');
}
```

In the example above, the code is an excerpt from a draw function. The first test is whether or not the mouse is pressed. If the mouse is currently pressed, the computer then checks if the location of the mouse. Because each test has its own if/e;se conditions, the different potential combinations of test results can affect the background color as shown below,

* mouse is not pressed: blue (no change)
* mouse is pressed on left side of screen: green
* mouse is pressed on right side of screen: red

---

## Chapter 5 Review Assignment

To prepare for the *Paint App* assignment, look at the code below. Copy it into a new P5 project and follow the instructions in the comments. The goal is to have the background color change to a unique color whenever a moving shape is clicked on.

{{% codepen 500 LYpregQ %}}

---
