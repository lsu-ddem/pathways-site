---
title: Making Groups and Lists - Arrays
weight: 2
---
Variables are great for adding updatable values into our code, but they also have their limitations. One major limitation is that variables can only be assigned one value at a time. Reassigning a new value to a variable removes the previous value from the computer's memory, and we would need additional lines of code in order to return that variable back to its previous state.

Take a look at the following code embedded below to see how the limitations of variables can end up leading to a code that looks more complex than it actually is:

{{% codepen 600 vrGbZr %}}

In this project, we have six variables: three used to determine the RGB color values of the first square color option, and three more for the second square color option. Since the variables are all named something similar, it could be easy to mix them up when using them throughout the code. Plus, if we want to have more than just two square color options, we would need to add a new set of three variables for each new color. This will begin to make the code more complex and confusing than it needs to be, and the solution to simplifying this process is to build an **array**.

## Building Arrays

An **array** is a list of variables that all share a similar label. We can use arrays to group together multiple values and use them all together, or one at a time, depending on our needs.

Take a look at our newly-improved version of the previous code to see how the use of arrays make things simpler:

{{% codepen 600 VdagQx %}}

In this new version, we have two arrays: one called **squareColor1** and the other called **squareColor2. **To build an array, we go through the same process of declaring a label and initializing values as we do with variables, except this time we contain all of the values inside of a pair of square brackets ( \[ and ] symbols). We separate each value in the array by a comma just as we would with arguments inside of a function's parenthesis. Now, we can call for the entire contents, laid out in order from left to right, to be passed  into the fill() function's arguments based on the results of our if statement.

## Using Parts of an Array

Instead of passing in the entire contents of an array all at once, we can choose which single item in the array we want to pull out and use in our code at any given moment. Here again is our previous code, modified to pull out on one item from each of the two square color arrays:

{{% codepen 600 dKMEZd %}}

Each value in an array is known as an _element_, and the position of that element in the array is known as its _index_. The first index of every array will always be known as the "0" index, and the number increases as we move to the next element in the array. If we place an index number inside of a pair of square braces behind the array name, we will use whatever element lives at that index position. The square is filled with the value 45 when the mouse is  pressed, and the value 111 when it is not pressed. Open the example on CodePen or open your browser's web console in order to see these values logged for you.

{{% notice warning %}}

Computers start counting at 0 instead of 1. Therefor, the first index in an array is known as the 0 index. If you have an array with 6 elements in it, their index numbers will be 0 through 5, not 1 through 6. 
{{% /notice %}}

## Cycling Through Elements in an Array

Arrays are useful for holding a complete list of possible values, states, and objects that you can cycle through and use one after another. In the example below, we have one array that holds our four possible square colors, listed as strings. When you click the mouse, we pull out a new element from the array by moving through it one index position at a time. To do this, we can make a variable that grows by one every time the mouse is pressed (called **clickCount** in this example), allowing us to count every click of the mouse. Then, we take the result of that current **clickCount** value mod 4 in order to step through a repeating series of numbers (0-3) and put that current number into a variable (**currentColor**). All of this code is located inside of the **mousePressed()** block, which only runs the code inside of it when the mouse has been pressed. This number sequence matches up with the same index numbers associated with the four elements in our array, so we can use that variable and the value inside of it by placing it inside the square brackets behind the squareColors array in our **fill()** function. This allows us to step through each index in our array in a cyclical pattern:

{{% codepen 600 bKpZMg %}}
