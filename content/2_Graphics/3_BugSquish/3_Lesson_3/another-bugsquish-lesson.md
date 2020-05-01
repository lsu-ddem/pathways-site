---
title: Collisions
weight: '3'
---
## Understanding Collisions

Each sprite has an hidden hit-box around its perimeter that is constantly checking if the sprite is overlapping with any other sprite. This condition is stores as a boolean variable. We can utilize these hit-boxes in order to create dynamic interactions between sprites. Lets look at the code below as it does a few things using these boxes.  

{{% codepen 400 RzwPKX %}}

the first thing to notice are a few new methods being utilized:

* **.bounce()** detects a collision with a specific sprite or group and reverses the direction of the initial sprite's movement. Causing the sprite to bounce off of the obstacle it just collided with. 
* **.displace()** causes one sprite to push the other when they collide. this moves the secondary sprite to the closest pixel where the hit-boxes are not activated.  
    * By combining this with **.immovable** property, you can create sprites that both do not move or overlap, resulting in various obstacles around the canvas. 

Each of these methods require the same arguments:

1. The name of teh sprite or group to interact with,
2. An optional callback function

### Callback Functions

a callback function is a function that is utilized in your code whenever some other action occurs. In both the above and below cases, when a collision between the character and the obstacle, a callback function is referenced. In the previous example this function was used to create a new sprite and add it to the walls group. The opposite is true of the below example.

{{% codepen 400 JQjxra %}}

Callbacks can be customized to include whatever results you want to have happen when two sprites interact. This could include creating or removing sprites, changing various properties and values within the code, and many other potential results.
