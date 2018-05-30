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
