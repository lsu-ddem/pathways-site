---
title: Nested Conditionals for Complex Boundary Measurement
weight: '2'
---
In our last lesson, you may have noticed that our conditional tests looked a little repetitive. When measuring the boundaries of shapes that have multiple boundaries on the same X or Y coordinate, we can save ourselves the hassle of repeating portions of a test by using Nested Conditionals. Lets take a look at a diagram demonstrating the logic of a Nested Conditional to refresh our memories from Unit 1:

{{<mermaid align="center">}}
graph TD
H{Outer Test}-. True .->A
H{Outer Test}-. False .->I
subgraph 
A{Inner Test 1} -->|True| B(Inner Result Block 1)
A{Inner Test 1} -->|False| F{Inner Test 2}
F-->|True| G(Inner Result Block 2)
end
F{Inner Test 2}-->|False| E(Code After Conditional)

I(Outer Test Result Block 2)
B-->E
G --> E
I -.->E
style A fill:#00ffff, stroke:#FFFFFF;
style B fill:#00ffff, stroke:#FFFFFF;
style H fill:#2bf5be, stroke:#FFFFFF;
style I fill:#2bf5be, stroke:#FFFFFF;
style F fill:#fe856b, stroke:#FFFFFF;
style E fill:#FFFFFF, stroke:#FFFFFF;
style G fill:#fe856b, stroke:#FFFFFF;
{{< /mermaid >}}

With a Nested Conditional, we embed an Inner Level Test inside of an Outer Level Test. Unless we pass the Outer Level Test, we cannot attempt the Inner Level Test (making the Inner Level Test synonymous with a Result for the Outer Level Test). We can think of this a real-world challenge where out ultimate goal is to reach the golden hexagon shown in the picture below; if we can't find a way to get past the green barrier, we won't be able to get past the black barrier and get access to our reward:

![](/images/uploads/nested_test_explanation.png)

As coders, using Nested Conditionals serves a number of practical purposes in addition to making our code look neat and tidy. While our previous boundary measuring tests weren't _too_ long, using multiple &&-linked subtests inside of one If Statement can make our code difficult to debug if that test isn't working the way we want it to. Furthermore, Nested Conditionals allow us to devise more complex logic flows, which will in turn allow us to design more complex  games and interactive art.

## Nested Conditional Examples

Let's take a look at a code similar to one we worked with in the last lesson. This time, we have two squares that we want to interact with. Clicking on both causes different results, so we need to use an If/Else If statement: 

{{% codepen 400 PveEKb %}}

This If/Else If test (ending with an additional else to keep the background gray if neither square is clicked on) works fine, but imagine if we had 20 squares in a row to click on! Fixing just a handful of them that weren't working right would be tough to debug. How can we condense some of the repeated subtests and break them about into a Nested Conditional?

Let's start start to simplify things by finding repetition. First, both tests require that we check to see if the mouse has been pressed. Lets make that conditional into it's own If/Else statement; **if** the mouse is pressed, we can run some more tests to see if we're clicking inside a square, **else** the background stays gray:

```javascript
if(mouseIsPressed){//square boundary measuring} else {backColor = "gray";}
```

Now we won't be able to check anything else unless the mouse click test is passed first, and we don't have to repeat that test twice as a subtest in our other conditionals (it will act like the green barrier in the picture above). Next, our two squares share the exact same Y coordinates on the canvas: the top boundary of each square is at 100 Y and their bottom boundaries are at 250 Y. This means we can condense these Y boundary measurements into their own second, inner test! **If** the mouse is located between these Y boundaries, we can continue on and check our X boundaries. We don't have any result set up for failing this test, so we can simply use an If statement conditional here and add it into the Result section of the outer test:

```javascript
if(mouseIsPressed){    //check Y axis boundaries    if((mouseY > 100) &&(mouseY < 250)){         //check X axis boundaries      }} else {backColor = "gray";}
```
