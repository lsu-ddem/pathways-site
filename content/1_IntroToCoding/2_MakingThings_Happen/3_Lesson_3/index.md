---
title: Do it again - Loops
weight: 3
---
## Life without Loops

Code that includes elements of repetition, coded in a "long-hand" manner:

{{% codepen 400 GdBGjQ %}}





## Building a Loop

There are a number of different controllable loops in coding, but the one that we will focus on is the **for loop**. A for loop is a control-flow statement that specifies rules for iteration, allowing for a specific block of code to be repeated a specified number of times. In order to design a for loop, we need to do three things:

1. Declare and initialize a variable that can act as an interation progress counter (this is run _before_ the loop begins)
2. Design a test that defines the condition for the loop to run (this test is checked _each_ time the loop runs)
3. Set a method of changing/updating the iteration variable (this happens_ after_ each run of the loop)

The logic flow of a  for loop would therefor look like this:

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



For step 1, we create and initialize a variable just as we've done in the past. Typically, these variables will only be used inside of or in relation to the loop we build them for, and they are typically a single, lowercase letter.

Next, we design a test that will need to be passed in order for the loop to continue running the code inside the result block. These tests are always a form of relational expression, since we will want the loop to stop running once the test fails. As a reminder, here are our relational expressions and their JavaScript operators:

**Relational Expressions and their Operators**

| Operator | Expression               |
| -------- | ------------------------ |
| \>       | Greater than             |
| <        | Less than                |
| \==      | Equal to                 |
| \>=      | Greater than or equal to |
| <=       | Less than or equal to    |
| !=       | Not equal to             |


