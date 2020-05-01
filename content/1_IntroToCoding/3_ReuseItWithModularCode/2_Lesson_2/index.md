---
title: Code that is a thing - Objects with class
weight: 2
---

In our code we can create a set of objects with similar parameters that are common to all of the objects, and unique values that are specific to a single object. Like how a single model of phones made by a company have the same parts, layout, and size determined by the factory. However, each person's phone may contain a different assortment of applications, wallpapers, and downloaded files depending on how they use it. 

Another example could be how all apples have the same approximate shape and grow on trees, but there are a variety of species with different colors and flavors within the broader category of 'apple'

Lets look at the code below to see this in action. We have our ghosts from the previous page, but this time the code is arranged a little differently. We have two variables called `carlos` and `marco`; these are going to store our ghosts. 

In the **setup()** function we can see that these variables get assigned the value `new Ghost()` and the arguments differ for each object. By using this line we are telling the computer to make a new object with the characteristics of the Ghost class, which is defined in **function Ghost()**. Notice the spelling of `Ghost`. the capital G is necessary to specify this as a class of objects.

We can then give them specific locations, size, and colors like previously. But look at the code now and see what is different:

{{% codepen 600 QxawdO %}}

In **draw()** we have 4 new lines that say `carlos.haunt()`, `carlos.appear()`, `marco.bounce()`, and `marco.appear()` respectively. Because we have made the ghosts into unique objects, we are able to talk to them individually. In this case, we are specifying that we want to apply the results of custom functions to the ghosts. Both ghosts have the **appear()** function which takes the arguments from our previous functions and draws the ghosts. by removing the `.appear()` lines from the code, you would no longer see the ghost being drawn to the canvas. The other functions tell the ghosts how to move around the canvas. 

The way we are able to specify a specific object to talk to in our code is through the use of **dot notation**. This notation is specified by typing out the name of the object you want to, a dot or period `.` , and then the function or parameter you wish to use with that object. When writing the code, writing the word `this` for the functions will tell the computer to fill in the name for whatever object you are wanting to use. So if you were to change up the lines so that they read `carlos.bounce()` and `marco.haunt()` the code would still work because it would just fill in the names of the sprites and apply the behavior to them independently. 

Experiment with this code by creating at least 2 more ghosts and letting them move with both functions **haunt()** and **bounce()**.

We will get more experience using dot notation later in the [Graphics](https://pdm.lsupathways.org/2_graphics/) unit once we begin working with sprites and groups of sprites.
