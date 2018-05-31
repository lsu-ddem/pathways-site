---
title: Computers Making Choices - Conditionals
weight: 1
---
{{<mermaid align="center">}}
graph TD

A{Test} -->|True| B(Code In Result Block)
B--> C
A{Test} -->|False| C(Code After Conditional)

style C fill:#FFFFFF, stroke:#FFFFFF;
{{< /mermaid >}}



{{<mermaid align="center">}}
graph TD

A{Test} -->|True| B(Result Block 1)
A{Test} -->|False| D(Result Block 2)
B-->E(Code After Conditional)
D-->E

style E fill:#FFFFFF, stroke:#FFFFFF;


{{< /mermaid >}}


{{<mermaid align="center">}}
graph TD

A{Test 1} -->|True| B(Result Block 1)
A{Test 1} -->|False| F

B-->E(Code After Conditional)

F{Test 2}-->|False| E(Code After Conditional)
F{Test 2}-->|True| G(Result Block 2)
G --> E

style F fill:#fe856b, stroke:#FFFFFF;
style E fill:#FFFFFF, stroke:#FFFFFF;
style G fill:#fe856b, stroke:#FFFFFF;
{{< /mermaid >}}
