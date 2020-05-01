---
title: Spawning Sprites & Building Sprite Groups
weight: '1'
---
## Including the p5.play Library

More detailed information about how to include the P5.play library is available on the previous page. Summarized, the minimum steps needed to be able to utilize the code library are given below:

For p5.play.js to work in your sketch you need to include it in your HTML file. We can use the [jsDelivr](https://jsDelivr.com) website to generate a link to the P5.play library's github source code. This generated link is provided for you below.

Open your project-folder and find the index.html file. Add this line under the first two script tags, being sure not to place this line inside of, or accidentally delete any of the script tags that are currently present.

```html
<script src="https://cdn.jsdelivr.net/gh/molleindustria/p5.play/lib/p5.play.js"></script>
```

One recommendation is to move everything from line **6** onward in the HTML file down by one space and then paste the line above onto the now empty line. This should keep all of the source elements properly formatted in the code. 

Once you have added this line, save your HTML file and head back to your "sketch.js" file. This loads p5.play.js in your sketch. At this point, it is _highly_ recommended that you duplicate your code and save it as a starting template for the remaining assignments in this course. Doing so will save you the time needed to continually return to this page to copy and insert the same link in every project that will require this library, and will ensure that the library is always present in your codes. To do so, simply name your current code `P5.play Starting Template` and then press file > duplicate. This will make an exact copy of your code. You can now edit the cope however you need without overwriting the original. You can open the original and create as many duplicates as you need, resulting in a large time saver over the entirety of this course.


## Spawning Sprites

Now that we have the P5.play library included in our sketch we can begin working with a sprite. Sprites are the main building block of the P5.play library and are our main way of interacting with its code and features. These sprites are powerful characters with customizable properties that we can use to interact with our code in unique and customizable ways. We will be utilizing the sprites as a way to generate these interactions without having to perform and code complex mathematic equations for every element desired on the canvas such as movement, acceleration, collisions, animations, etc.

To generate a sprite we must first create a variable that will contain our sprite. This will allow us to refer to our sprite and alter its properties through dot notation. We then assign this variable to the result of the new function `createSprite()`. This function from the P5.play library is what generates the sprite, and can take the following arguments:.

* X-location of the sprite's center
* Y-location of the sprite's center
* Width of teh sprite
* height of the sprite

Each of these arguments can be changed later on in your code, but you ust give a starting value in order to be able to create the sprite. However, look at the code below. We have created the sprite, but cannot see it on the canvas.

{{% codepen 600 Baowrja %}}

In order to see sprites drawn to the canvas, one of two functions are needed inside of the `draw()` function:

* `drawSprite()`: Draws a single sprite to the canvas. Use the desires sprite's variable name as the argument.
* `drawSprites()`: Draws all sprites to the canvas. Most examples in this unit will utilize this function.

When we add this line into our draw function we can now see the sprite appear.

{{% codepen 600 NWGaYgr %}}

The default appearance of the sprite is a rectangle with a randomly generated color. If you were to change the size of the sprite in the arguments of the `createSprite()` function on line 9, you would see both the size and color change when the code re-ran. The specific color of a sprite can be set using the `.shapeColor` property. One thing to keep in mind that unlike the `rect()` function, `createSprite()' generates its shapes from the center.

Using this process you can now generate as many sprites as needed using `createSprite()` for each one. Every sprite will need its own unique name, but you will only need to call `drawSprites()` one time in your code. It is best that this happens last in the draw function so that any calculations can occur be applied to the sprite before it is drawn.

## Making Groups of Sprites

Once you have multiple sprites you may find it beneficial to group them together. This will allow you to refer to multiple sprites at once if you need to update the properties of multiple sprites at the same time. 

To create a group, follow these steps:

1. Create a variable that will store the group. This will allow us to refer to the entire group by the variable name. 
2. Indicate that this is a new group as shown below:

    ```
    groupName = new Group();
    ```

3. Add sprites to the group

    ```
    groupName.add(sprite);
    ```

You can now refer to your sprites individually or as a group, similar to a teacher giving instructions to an individual student, or addressing the whole class at one time. You can also remove a sprite from a group with the `.remove()` method.