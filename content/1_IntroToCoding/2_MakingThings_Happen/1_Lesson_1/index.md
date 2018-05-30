---
title: Computers Making Choices - Conditionals
weight: 1
---
{{<mermaid align="center">}}
graph TD
START[ ]
START --> A
A{Test} -->|True| B(Code In Statement Block)
B--> C
A{Test} -->|False| C(Code After Conditional)
style START fill:#FFFFFF, stroke:#FFFFFF;
style C fill:#FFFFFF, stroke:#FFFFFF;
{{< /mermaid >}}



{{<mermaid align="center">}}
graph TD
graph TD
START[ ]
START --> A
A{Test} -->|True| B(Statement Block 1)

A{Test} -->|False| D(Statement Block 2) 

B-->E(Code After Conditional)
D-->E

style START fill:#FFFFFF, stroke:#FFFFFF;
style E  fill:#FFFFFF, stroke:#FFFFFF;

{{< /mermaid >}}
