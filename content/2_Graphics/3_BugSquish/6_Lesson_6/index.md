title: 'working with p5.play Version 3.0'
weight: '5'
---


---
## Installing p5.play

To include p5.play in your sketches, you need to tell the computer where to find the code. This works like putting a picture, song, or other file on a flash drive. The file will exist on the drive, but you cannot access it until you connect it to your computer so that the processor can find the correct data. For us to see the data, we need to create a new script in the `index.html` file.

Compared to older versions, this version of the library is slightly more complicated, but luckily we have compiled the information below for you. All you have to do is copy this html file and replace the default file in your sketch. You can see that two new scripts have been added. These include two libraries. The first one, `planck` has code that the second one, `p5.play` needs in order to function so it is important that both are included within the head tag with the other scripts. If one is missing, none of the sketches in this chapter will work. 

``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.1/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.1/addons/p5.sound.min.js"></script>
 <!-- planck -->
    <script src="https://p5play.org/v3/planck.min.js"></script>
    <!-- Version 3 of p5.play -->
    <script src="https://p5play.org/v3/p5.play.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8" />

  </head>
  <body>
    <main>
    </main>
    <script src="sketch.js"></script>
  </body>
</html>


```

---
### Let's Practice!

Let's make a template that will already have this code ready-to-go. While it would be nice of you to visit, you won't want to come to this page every time you want to use this library. to try doing the following:

* open a new sketch.
* load in the p5.play library with the above html code.
* save this sketch as a starting code.

This way you can just open this sketch and duplicate it before you begin working instead of manually entering the same information in every time.

---

## Creating a sprite

Sprites are objects that exist above a background. In this course, we will be working with 2D sprites specifically, although sprites can be 3D. Using the p5.play library we can take a lot of the complex math out of our hands and begin to create some fun and exciting interactions on the canvas. Each sprite has a unique collider that allows it to tell when it interacts with another sprite or the mouse, but more on that later.
To make a sprite we need to do the following steps:

* create a variable to act as a named container for the object
* create an instance of the sprite with unique arguments

To do this the formatting looks like this:

```javascript
let mySprite;
function setup(){
createCanvas(400,400);
mySprite = new Sprite(100,200,50,50);
}

```

Notice that we do not have to manually tell p5 to draw the sprites like in previous versions. All sprites appear by default. We can manually hide them with the `visible` property which we will discuss later in this chapter.

When we make the sprite we can give it a few arguments. the first two are always te same, but the third one can change depending on if a fourth is present. Put simply, having 4 arguments makes the sprite appear as a rectangle and having three makes the sprite appear as a circle.

* 4 argument sprite: x, y, w, h
* 3 argument sprite: x, y, diameter

All sprites are drawn from the center regardless of the shape.

By default each sprite will appear as a random color unless an image or specific color is given for the sprite to use.

---
## Sprite colors

To set a sprite color we need to look at the `.color` property. From there we can simply set the sprite to any RBG color we want. If you need a refresher, check out the color and transparency lesson earlier in this unit.
The code to set the color of a sprite manually looks like this:

```js

mySprite.color = color(100,50,200); // arguments are RGB
mySprite.color = color(0,0,0) // black
mySprite.color = color(255,255,255) // white

```

p5.play needs to use the color function in order to render values as an RGB color. Otherwise everything functions just as discussed in a previous chapter, except that we can talk directly to the sprite in question instead of worrying about the order of `fill()` or `stroke()`.

---
## Sprite properties

Each sprite has a large number of properties that can be set to give the objects unique characteristics on the canvas. We have already looked at a few of them:

* x: horizontal location of the center of the sprite.
* y: vertical location of the center of the sprite.
* w: width of a rectangular sprite.
* h: height of a rectangular sprite.
* d: diameter of a circular sprite.
* color: color of a sprite with no animation.

In addition to these, a full list can be found using the [p5.play reference materials for sprites](https://p5play.org/docs/classes/Sprite.html). Some of the mroe common ones are listed below:

* immovable: true or false. true make sprite unable to be moved by other objects on the canvas.
* friction: gives the sprite a simulation of friction when moving.
* rotation: rotates the sprite by a given amount of degrees.
* rotation speed: rotated the sprite by a given number of degrees every frame.
* scale: changes the size of the sprite.
* vel: the sprite's velocity in a direction.
* visible: true or false. true hides the sprite from the scene.

In order to set a property you must use dot notation. First talk to the sprite in question, then the property. lastly, set the property value. Keep in mind that some properties have sub-properties. such as velocity having a .x and .y category that need to be set independently of each other. This looks like:

```js

mySprite.rotation = 50;
mySprite.rotationSpeed = 6;
mySprite.scale++;
mySprite.immovable = true;

```


---
### Let's Practice!

For this practice, try spawning a sprite and setting it's properties. Have several properties set by default in setup() when you spawn the sprite. You just set the sprite values AFTER you have created the new object. 
Then for an added challenge, try adding a conditional statement or switch so that when you press the keys 1-5 on your keyboard, each key will change a property value of you sprite, and when you press the escape key, all of the properties are set back to the default from when the sprite was spawned.

---
## Sprite Methods


---
### Let's Practice!


---
## Sprite Animations


---
### Let's Practice!


---
## Sprite Interactions: Other Sprites


---
## Sprite Interactions: The Mouse


---
### Let's Practice!


---
