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
