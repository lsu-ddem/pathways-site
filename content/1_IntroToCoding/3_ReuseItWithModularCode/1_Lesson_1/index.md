---
title: Code that does a thing - functions
weight: 1
---
## How Functions Work
So far throughout this course we have been utilizing various functions such as setup(), draw(), ellipse(), etc. You may have noticed a few things in common between each of these.

Functions calls are indicated by the function name followed by a set of parentheses; such as background(). At their core, functions can take in certain values and utilize them to perform a task, or return a new value. The arguments that we have been typing into a function’s parentheses are examples of these values. For example, fill(255,100,100) takes the numbers given and generates a specific color that is used to fill in anything drawn to the canvas until those values change with a new fill() call. 

Knowing this, we can develop our own custom functions that perform a specific task whenever we call them, but why would we want to do this? Look at the code below and see how many lines it takes to draw one single ghost in that spot on the canvas. Imagine if you wanted to have multiple ghosts, ghosts that looked slightly different, or ghosts that move around the screen. How many lines would that simple-looking project take? How many lines would be almost identical? How problematic would it be if you needed to change one small thing in that block of code?

{{% codepen 600 gKWqmb %}}

The answer to the problems posed by these questions can be answered with the idea of modular code and custom functions. As previously mentioned, functions can take in an argument and give an output based on those arguments. In the next several codes we are going to create a function that generates ghosts with unique behaviors. 

Look at this code; what is different from the previous code? You will notice that a lot of the same code is present, but now it is located inside of a new function. We have made a custom function that creates ghosts based on the arguments we give it.

{{% codepen 600 oywJee %}}

---


## Making a Function

To create a function, follow these general steps:

1. Use the identifier “function”, and give your function a unique name (note that you cannot have 2 functions with identical names)

2. Inside the parentheses, give a name for each argument that your function needs. These will act like variables in the code to follow, and be replaced with number when we use the function.

3. Place the code you want your function to execute inside of the braces. Be sure to use the names for your arguments when needed. (In the previous code example, we have an argument for any parameter that we want to be able to change with our ghosts) 

4. Now you can call your function inside of draw(). Notice how this happens twice in the previous code, and two different ghosts appear. This is because the first call happens with one set of arguments, and the second happens with a new set. Each function call is independent, like when you called rect() multiple times to create multiple rectangles on the canvas.


---

### Functions that Return a Value

When making a function, you can have it return a value to be used elsewhere in your code. 

Look at the code below; the array ghostColorz[ ] is calling the function randomColorz() multiple times. If you look at function randomColors(), you can see that whenever it is called it generates three random colors and returns the array. What does this mean?

{{% codepen 600 XYgoop %}}

When a function has a return, it means that it will execute its code, and then give back a value. This can be something generated entirely within the function, like in this example, or based on the input of an argument. When a function returns a value, the function call is replaced by the value that is returned. So in this example, calling randomColorz() results in a series of arrays used to determine the colors of the ghosts. 

One thing to note is that a return should be the last thing inside of a function. THis is because once the computer returns a value, the function will stop running until it is called again, at which point it will start from the top. This means that any code beneath the return will be ignored by the computer which would be a waste of code and computer memory in the best case, and cause multiple errors at the worst. 

---
