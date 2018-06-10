---
title: Computers Making Choices - Conditionals
weight: 1
---
## Creating a Test

**Common relational expressions**

| Operator | Expression               |
| -------- | ------------------------ |
| \>       | Greater than             |
| <        | Less than                |
| ==      | Equal to                 |
| >=      | Greater than or equal to |
| <=       | Less than or equal to    |
| !=       | Not equal to             |



## Single Test, Single Result  (The If Statement)



{{<mermaid align="center">}}
graph TD

A{Test} -->|True| B(Code In Result Block)
B--> C
A{Test} -->|False| C(Code After Conditional)

style A  fill:#00ffff, stroke:#FFFFFF;
style B fill: #00ffff, stroke:#FFFFFF;
style C fill:#FFFFFF, stroke:#FFFFFF;
{{< /mermaid >}}



Translated into code, an If statement looks like this:

```
if (test) {
  result
}
```

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
