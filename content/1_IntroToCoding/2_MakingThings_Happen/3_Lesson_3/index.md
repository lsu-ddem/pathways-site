---
title: Do it again - Loops
weight: 3
---
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
