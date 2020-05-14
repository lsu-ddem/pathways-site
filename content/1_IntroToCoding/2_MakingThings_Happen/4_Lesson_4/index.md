---
title: Chapter 2 Review & Assignments
weight: 5
---
## Chapter 2 Review

### Conditionals

Lets go over some of the basics from the previous lessons:

Computers are able to check relationships between different values, and react differently based on those relationships.


| Operator | Expression               |
| -------- | ------------------------ |
| \>       | Greater than             |
| <        | Less than                |
| ===      | Is equal to              |
| \>=      | Greater than or equal to |
| <=       | Less than or equal to    |
| !=       | Not equal to             |
| &&       | and                      |
| ||       | or                       |

We can use these relationships to devise tests. These tests always compare two or more values based on the relationship shown above, and performs code if that relationship is true.

```
let a = number1
let b = number2
let test = 'a operator b'

if(test === true){
    result
}

```

Code placed in the result braces will only happen if the test passes; otherwise it is ignored.

We can program multiple responses to a single test with **if/else** statements.

```
if (test === true) {
  result 1
} else {
  result 2
}
```

We can chain together multiple tests each with its own unique results with a series of **if/else/if** statements.

```
if (test 1 === true) {
  result 1
} else if (test 2 === true) {
  result 2
}else if (test 3 === true) {
  result 3
}
```

---

### Arrays

An array can serve as a kind of "super variable" that can store multiple values in a list.
Arrays are designated with brackets when they are declared. 

```
let array1 = [];
```
You can refer to every element within an array, or a certain one by specifying the index number (or not) when you refer to your array

```
fill(array1) //talks to the entire array

ellipse(array1[5], 50, 50 50); //talks only to the element within the index number 5 of the array
```

All naming guidelines for variables also apply to arrays.

---

### For loops

For loops are powerful tool that will execute a series of code for as long as a condition is true once they have been triggered.
For loops will run as fast as possible when executed.
Each for loop has a certain syntax needed in order to function:

```
for (create variable; test; update variable){
   repeated result block
}
```

The test in the for loop is the same as what would be typed in a conditional statement.
By utilizing the variable crated in the for loop, we can create complex repeated patterns on the canvas.
Improperly formatted tests can softlock your device, so make sure that the test is properly typed before you try to execute your code.

---

## Chapter 2 Review Assignment

For this assignment there is no started code. Your goal is to create your own code that does the following:

* starts with an empty array.
* uses a for loop to add the numbers 0-20 into the array.
  * You should utilize th following line inside your for loop:
  ```
  arrayName.push(value to add to array);
  ```

* uses a conditional statement that logs those numbers to the console whenever the mouse is pressed.

---
