---
title: Code that is a thing - Objects with class
weight: 2
---
Functions are a powerful tool for creating code that can take in certain parameters and return results based on those parameters; kind of like a power tool that will behave the same way, but can create slightly different results based on the bit or attachment used by the operator. Lets go a step further though. So far in our projects we have been creating basic shapes and other designs, but they have been fairly bland. Lets look at the code below, everything should look familiar.

{{% codepen 600 rNxjZxZ %}}

All of the values being used to create the ellipse are being stored in a variable, but the computer is not making a connection to the numbers and the shape. We are telling it to take these values and create a shape with them. The values can be easily changed or used in other places in our code. The goal of this lesson is to create objects and classes of objects that will have their own parameters and behaviors assigned to that unique item.

---

## Objects

Lets start by making a basic object. We will be using the Javascript Object Notation, or JSON format to store the data for this object. This format is a common method for compiling data in one contained area. Lets look at the code below:

{{% codepen 600 GRorXZZ %}}

This code is taking the same information from the ellipse shown before and storing it in a JS literal object. At this point, out object is just a collection of data with no application; there is no ellipse appearing on the screen. (we will get there, don't worry.) This kind of notation is useful for organizing your various values. Instead of listing out the global variables at the beginning of a project, you can now store them in relevant categories to how they will be used. 

### JSON

Generally speaking, the format for using JSON in this course is fairly simple. 

```
let objectName = {
    parameter1Name: value ,
    parameter2Name: value
};

```
You need to store the object inside a variable so that it has a unique name and the computer can identify it. Then, create a set of brackets and list out the name for the parameter and the value for that parameter, separating them with a colon as shown. For objects with multiple parameters, separate each one with a comma before moving to the next item in the list. Notice that you do not need to use the keyword `let` when creating these variables within the JSON object. 

Try creating a new object in the code above. Make sure that your code is formatted exactly like the example.

### Using the JSON values

So far we have created an object, but we are not doing anything with it yet. In order to do that we need to use something called dot notation. This notation will continue to appear as we move into the graphics and sound unit, so it is important to learn how it works now.

The dot notation is used to refer to a value or parameter of object that has an identifiable name. In the examples so far, there is an object with the name `circle`. We can use that name to refer to the values stored within the object in out code. We simply need to use the following format whenever we need to refer to the value we want:

```
objectName.parameterName

```

If reading this as a sentence, you may want to go backwards. "I am using the 'parameterName' of the 'objectName' object.

So lets use dot notation in our code.

{{% codepen 600 ExPZeKG %}}

See how on line 22 the ellipse function is using the values circle.x, circle.y, and circle.diam in place of a number or variable. In this instance we are telling the computer to take the x value of the circle object and use it to set the x location of the ellipse.

Try changing the values within the circle object and rerunning the code. You should se that the circle shown on the canvas will update based on your numbers. If you tried creating an object in the previous example, try copying it into this code and using it to create a basic shape with dot notation.

### Multiple JSON objects

We can start to take advantage of JSON once we start to add multiple objects to our projects. Because each object is a contained element in our code, we can arrange our code to be easier to read. In previous chapters if you wanted to use variables to animate multiple shapes, you would have to list them all out like below.

```
circle1x
circle2x
circle1y
circle2y
circle1d
circle2d
```
You could play around a little to make the list easier to read, but lets look at this example and how it might be easier to see what values are being used.

{{% codepen 600 VwePGjw %}}

In this example we have two objects in the code. Because the objects have a unique name, the parameters within them can share names without causing an error in the code. We can clearly see circle1 and circle2 as two unique entities with similar properties.

Try adding a line inside of the draw function that will update the values inside of the objects, and cause one of the circles to move across the screen. You will need both dot notation as well as the math concepts discussed in the [Everything is a Number Lesson](https://pdm.lsupathways.org/1_introtocoding/1_codingbasics/4_lesson_4/).

---

## Classes

Objects are a wonderful tool for beginning to attach values to a certain object. However you may have noticed that the objects in the previous examples contained identical parameters, and looked similar on the canvas. If you were wondering if there was a way to save space and avoid typing out the same information multiple times for multiple objects, then don't worry; that is the purpose of a Class.

A class is a collection of objects that all have the same properties or behaviors. Take smartphones as an example. Generally speaking, all smartphones do the same things: make calls, access the internet, run apps, take pictures, etc. They also have similar appearances. However each person's individual phone will have a different configuration of apps, be used for a different purpose, or be a different brand/model from person to person. In this sense, 'smartphone' is the class, and the individual phones are the objects. Another example could be how all apples have the same approximate shape and grow on trees, but there are a variety of species with different colors and flavors within the broader category of 'apple'.

To use this in our code, we can build on what we have already learned with objects. The code below can be used to show what needs to be done. The elements from the previous example are still present here, but they have been commented out with the `/* */` format.

{{% codepen 600 ZEQLMOR %}}

In this example, we start by creating a variable for the objects we want to make, like in previous chapters. Things start to differ when we get to line 24:

```
circle1 = new Circle();

```

The word `new` is being used to designate that circle1 will contain a new, unique instance of the 'Circle()' class. When typing your code, the names of classes (and later groups) begin with a capital letter. Lets skip the draw function and see how the Circle() class is being created.

In this example, we create the new class on line 40. Like with creating new functions this can occur anywhere within your code as long as it is not inside of another function. Otherwise you may encounter errors related to the scope of the objects and classes when you try to run your project. As a general rule, try yo keep your classes global like in this example unless they will only be used within the context of a single function.

### this dot

Think of this section of code as a template for everything that every object within the class will be created from, like the blueprints for items on an assembly line. In this part of the code you can create different methods for how the class will operate. Here we have 3: constructor(), move(), and appear(). These are set up similar to JSON objects, but with a few key differences:

* each one has parentheses following the name.
* they can contain additional information outside of parameters.
* you don't need to separate the parameters with commas.
* the appearance of `this`.

`this` is an important keyword when creating objects within a class. When defining a class we are essentially creating a blueprint rather than an actual object (that comes later). So we need a placeholder value to represent the name of whatever object we will be creating. So for every parameter that you will set inside of the class, you will need to use the word 'this' instead of the name for the intended variable.  In the previous example (shown below as well) we can see this happening. In the setup() function when we are creating a new instance of the class, the name of the object that we want to make will replace the word 'this' behind the scenes of the code and set all of the parameters.

{{% codepen 600 ZEQLMOR %}}

Keep in mind that you cannot use `this` outside of the class template. In that case you will need to refer to the specific object by its unique name.

### methods

Lets look at the remainder of the information in the Circle() class. we can see the methods appear and move. appear() contains the information necessary to make objects in the class appear to the canvas, and move() contains hte information to make the objects move horizontally across the screen. If we look at the draw() function we can see that after the object has been made, we can refer to it with dot notation like before. We can refer to any of the methods of a class this way, and this is how we are able to see the object on the canvas. Try commenting out line 31. Because this method contains all of the information for how ot move the object across the canvas, the object will now remain stationary since the conditional statements are not being checked each time the draw function loops. If we comment out like 30, we will see the object disappear completely because it is not longer being told to appear each time the draw function loops. 

In the class definition, we can format the methods in one of two ways:

```
this.appear() {

}

or

this.appear = function(){

}

```

Both are valid and the first example is shorthand for the second.

Try creating a new instance of the Circle class using the `circle2` variable in this example. Do you notice anything different? This is a drawback to classes as we have learned them so far. At this point the class will create identical copies of each object, so it was being drawn to the canvas, but it appeared exactly on top of the previous object, making it impossible to tell them apart.

## Arguments with Class()

In order to create multiple instances of a class with unique appearances or behaviors, we need to utilize arguments just like when creating functions. Lets look at the example below to see this in action.

{{% codepen 600 LYGxJZK %}}

What looks different than before? You can see that there are two different circles on the canvas that are behaving independently from each other, and that now there are values being placed within the parentheses when we create a new instance of the class in the setup function. These different values are what make the instances of the class unique from each other. Try to adjust them and see what happens.

But how are we using these values? Lets scroll down to where we define the class. You will notice that is is fairly similar to when we create a function with arguments. Inside of the constructor method (or wherever you need the arguments) you will see the names for each argument listed out. You will need to remember that the order you identify the arguments here will line up with the order of the values typed when you create the new object. So the first argument on line 14 is the x value, the second is the y value, the third is the diameter value, and the last is the shade value. If you change the order of the named variables or that they are typed when you create the object, you will have an object that does not behave the way you intended, and possible create an error.

We can use the names for these arguments as a pathway for where to funnel the information when creating our object. Looking at the example above, we can see that the first argument on line 14 is assigned the name x, and assigned to the `this.x` value. We can then use this.x and the other this dot parameters within the class like we have before.

Experiment with this example and try to create an additional two instances of the Circle() class with unique parameters.

---

Here is a video going through the ideas discussed in this lesson in a live-coding context:

<iframe width="560" height="315" src="https://www.youtube.com/embed/a3emX23a73U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## Additional Examples


Lets look at the code below to see some other examples of Objects and Classes. We have our ghosts from the previous page, but this time the code is arranged a little differently. We have two variables called `carlos` and `marco`; these are going to store our ghosts, and be the unique name for the two new instances of the Ghost() class. 

In the **setup()** we are creating a new instance of the Ghost() class for each object. W are giving them specific locations, size, and colors like in the previous examples on this page. 

{{% codepen 600 QxawdO %}}

In **draw()** we are calling the methods that are used to tell the ghosts how to appear and behave. One thing to keep in mind is that while both of the ghosts have the information for how to move, we are only applying one to each object in this part of the code. This allows them to behave differently from each other.


Experiment with this code by creating at least 2 more ghosts and letting them move with both functions **haunt()** and **bounce()**.


---

## Going Further

when working with objects, you may want them to react to being clicked on. This is a great way to add some responsiveness to your code. However, if you are reading through this book linearly, you won't have gotten through the material needed to achieve this just yet. 

Check out the lessons on [measuring the boundaries of shapes](https://pdm.lsupathways.org/2_graphics/2_paintapp/1_lesson_1/) before attempting this. Once you know the basics, the video below acts like a tutorial for both reviewing how to add mouse interactions to basic shapes, as well as creating a method that allows for the same interactions with objects and classes.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ypx8rypBYs8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
