---
title: Do it again - Loops
weight: 3
---
## Why Use Loops?

Often times, projects that feature repeating patterns or duplicated actions result in a code that is overly long, and therefor difficult to troubleshoot. Take the following embedded code, which features a handful of alternating squares, as an example:

{{% codepen 400 GdBGjQ %}}

Take a look at the amount of repeating functions in our **draw()** block. We use one pair of **fill()** and **rect()** functions to create each square. Because of this, we would need 200 lines of code in order to make a line of 100 squares. There is also a significant amount of repetition within the arguments of each rect() function: the last three arguments (Y axis location, width, and height) of each rect() are exactly the same, with the X axis location being the only difference.

In order to simplify this process, we can create a self-contained loop that repeats a block of code for a set amount of times before stopping. This way, we can re-run the two lines of code needed to make the square as many times as we want without having to explicitly retype everything. 

This second version of the project uses a type of loop known as a **for loop** to create 100 squares, alternating between teal and pink colors in the fill() function and placing each square 20 away from the previous one:

{{% codepen 400 KRBeNL %}}



## Understanding For Loops

A 

{{<mermaid align="center">}}

graph TD 

H(Create Variable)-->|Original Variable Value|A

 A-->|False| E\[Loop Stops]\
A{Test} -->|True| B\[Repeated Result Block]

B-->C\[Update Variable Value]
C-->|Updated Variable Value|A

style A fill:  #f7dc6f , stroke:#FFFFFF;
style B fill:  #f7dc6f ,stroke:#FFFFFF;
style C fill:  #f7dc6f ,stroke:#FFFFFF;
style E fill: #FFFFFF, stroke:#FFFFFF;
style H fill:  #f7dc6f ,stroke:#FFFFFF;
{{< /mermaid >}}

Translated into code, here is what the structure of a for loop looks like:

```
for (create variable; test; update variable){
   repeated result block
  }
```

## Relational Expressions and their Operators

| Operator | Expression               |
| -------- | ------------------------ |
| \>       | Greater than             |
| <        | Less than                |
| \==      | Equal to                 |
| \>=      | Greater than or equal to |
| <=       | Less than or equal to    |
| !=       | Not equal to             |
