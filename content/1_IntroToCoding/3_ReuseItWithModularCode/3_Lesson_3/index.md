---
title: Chapter 3 Review & Assignments
weight: 5
---
## Chapter 3 Review

Lets go over some of the basics from the previous lessons:

---

### Functions

We can utilize the skills we have learned so far in order to crate our own functions. Make sure that you do not accidentally create a new function within the braces for one that already exists in your code.

```
function draw(){
example(100, 300);
example(200, 5);
}

function example(argument1, argument2){

}
```

The functions that we make have the ability to take arguments, which act like local variables that are given to our function whenever it is called.

Functions can return a value to the main code with the `return` command. However, this will stop the function from executing any more code. Make sure that if your function returns a value, that that command is the last line of code within your function.

To call a function somewhere else in your code, simply type out the name of your function followed by parentheses where you need to use it. If your function needs an argument, type those within the parentheses. Each function call is unique, so calling a function twice will produce 2 versions of the results. These results may be different depending on the arguments given at the function call.

---

### Objects and Classes

Because each function call is a separate action, we can refer to each call as a specific item, or object, within our code.

```

let example = new Object(arg1, arg2, arg3);

function Object(arg1, arg2, arg3){
code needed to create our new object
}
```

in the example above, a specific instance of calling function Object is saved and stored within the `example` variable. We can then apply other function results directly to this new object using the object's name and dot notation. Keep in mind that you do need the capital letter when making a new class.

```
example.moveRight();
example.moveLeft();

function moveRight(){
    this.x++;
}

function moveLeft(){
    this.x--;
}
```

We will learn more about dot notation as we delve into sprites in the next unit.

In this summary, `example`, as well as any other specific result of a function that is stored is an object. the function used to create these multiple instances with similar characteristics is the class.

---

## Chapter 3 Review Assignment

The review assignment for this chapter is to generate your own code with custom functions, as well as multiple objects within a class. Use the Carlos and Marco examples from the previous pages as an example of what you need to utilize within your code. Your version should have a unique object with its own characteristics, and not simply be a copy of the materials you have been given.

---
