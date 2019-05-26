---
title: Computers Making Choices - Conditionals
weight: 1
---
## Creating a Test

Computers are extremely powerful machines, but without our help, they cannot make choices and decisions on their own. In order to make our web projects smarter and more interactive, we need to first learn how to design tests and reactions that computers can understand.

A Conditional is a statement that tells our code to perform certain actions based on whether a test we devised has been passed or failed. All conditionals will contain both a test and a result. Our daily lives are filled with conditional statements that dictate what we can do and when we can do it. For example, if the weather is nice, then we can go outside, otherwise we need to stay indoors and wait for the weather to clear. In this instance, the test is a check to see if the weather conditions are safe enough for us to head outdoors, and the result is either us leaving the house to play outside, or more repeats of the test.

Most of our tests in web programing will boil down to measuring boolean conditions, which can be one of two possible values: true or false.  We can design tests that measure a certain condition and only allow us to pass that test if the condition is either met (true) or not met (false). This is extremely common for conditionals that test to see if a user has interacted with your project through mouse clicks or keyboard presses, since those two objects can only produce two different states: clicked/pressed or unclicked/unpressed.

We can also design tests that compare the relationship between two values and only pass based on what that relationship is. The chart below lists some common relational expressions (many of which you may have encounter in math class) and the symbols we use in JavaScript to add them into our code:

**Common relational expressions**

| Operator | Expression               |
| -------- | ------------------------ |
| \>       | Greater than             |
| <        | Less than                |
| \==      | Equal to                 |
| \>=      | Greater than or equal to |
| <=       | Less than or equal to    |
| !=       | Not equal to             |

We might need to make tests that ask for more than one condition to be measured at a time, allowing the test to pass only if both conditions are met or if either one or more options listed are met. In these cases, we can chain conditions together with the && operator (which stands for "and") or use the || operator (which stands for "or") to allow for two passable options for a single test:

**Common logic expressions**

| Operator | Expression |
| -------- | ---------- |
| &&       | and        |
| \||      | or         |

Let's take a look at some common conditional statements and see how we code them into our projects.

## Single Test, Single Result  (The If Statement)

The most commonly-used conditional is called the If Statement, and it is comprised of a single test (which could be made up of many sub-conditionals linked together with and or or operators) and a single result. Logically, an If Statement acts like the diagram below: if we pass the test, we get to run any code we designate as the result; if we fail the test, we continue to take the test until we pass it. The rest of our code outside of our If Statement continues to run as normal:

{{<mermaid align="center">}}
graph TD

A{Test} -->|True| B(Code In Result Block)
B--> C
A{Test} -->|False| C(Code After Conditional)

style A  fill:#00ffff, stroke:#FFFFFF;
style B fill: #00ffff, stroke:#FFFFFF;
style C fill:#FFFFFF, stroke:#FFFFFF;
{{< /mermaid >}}

Translated into code, an If Statement looks like this:

```
if (test) {
  result
}
```

Pay close attention to the various symbols in the code example above. Every Conditional statement will include a keyword(s), a pair of parenthesis, and a pair of braces ( { } ). The code inside of those symbols is extremely important: the tests that make up the conditional must always go inside of the parenthesis. Any code that we want to run as the result of passing the test (whether it be one line or one thousand lines) must be contained inside of the { } brackets. A good way to remember this separation of test code and result code is to imagine playing a video game where the sole purpose is to enter a locked room to reach a treasure. In the scenario, the locked door and barrier keeping you from the treasure is any test code placed inside the parenthesis. The treasure itself is any result code placed inside of the brackets:



![](/images/uploads/simple_test_explanation-1-.png)

The embedded code below shows an If Statement in action. Clicking and dragging your mouse along the gray canvas draws lines made of teal squares. The test measures the mouseIsPressed system variable from our previous lesson and wait to see if it contains the boolean value "true." If it does, a teal square is produced. If it doesn't, the code outside of the If Statement continues to run and the tests continues to check and wait to see when it will be passed.

{{% codepen 600 QxWpqG%}}



## Single Test, Two Results  (The If/Else Statement)

{{<mermaid align="center">}}
graph TD

A{Test} -->|True| B(Result Block 1)
A{Test} -->|False| D(Result Block 2)
B-->E(Code After Conditional)
D-->E

style A  fill:#00ffff, stroke:#FFFFFF;
style B  fill:#00ffff, stroke:#FFFFFF;
style D  fill:#00ffff, stroke:#FFFFFF;
style E fill:#FFFFFF, stroke:#FFFFFF;

{{< /mermaid >}}

Translated into code, an If/Else statement looks like this:

```
if (test) {
  result 1
} else {
  result 2
}
```

{{% codepen 600 jKOBQw%}}

## Multiple Tests, Multiple Results  (The If/Else If Statement)

{{<mermaid align="center">}}
graph TD

A{Test 1} -->|True| B(Result Block 1)
A{Test 1} -->|False| F

B-->E(Code After Conditional)

F{Test 2}-->|False| E(Code After Conditional)
F{Test 2}-->|True| G(Result Block 2)
G --> E

style A  fill:#00ffff,stroke:#FFFFFF;
style B fill:#00ffff, stroke:#FFFFFF;
style F fill:#fe856b, stroke:#FFFFFF;
style E fill:#FFFFFF, stroke:#FFFFFF;
style G fill:#fe856b, stroke:#FFFFFF;
{{< /mermaid >}}

Translated into code, an If/Else If statement looks like this:

```
if (test 1) {
  result 1
} else if (test 2) {
  result 2
}
```

{{% codepen 600 VdwVPz%}}

## Nested Conditionals

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

{{% codepen 600 zaYMLo%}}
