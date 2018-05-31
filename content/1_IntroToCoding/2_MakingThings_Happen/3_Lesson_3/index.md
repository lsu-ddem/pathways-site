---
title: Do it again - Loops
weight: 3
---
{{<mermaid align="center">}}
graph TD 

H(Create Variable)-->|Original Variable Value|A


 A-->|False| E[Loop Stops]  
A{Test} -->|True| B[Repeated Result Block]

B-->C[Update Variable Value]
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
