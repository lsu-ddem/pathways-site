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

Just like any other Object within a class, we can utilize small functions called methods in order to have our sprites perform tasks. Keep in mind the difference in formatting between properties and methods:

* Properties are values you can set and change with an equal sign (=).
* Methods are functions and require parentheses (). No equal sign is needed for a method, but some require arguments.

Below is a list of some commonly used methods with p5.play's sprites. A full list is available on their reference documents.

* .move(direction, speed, distance) : moves a sprite when called. Direction is a string such as 'up', 'down', 'left', or right'. Speed is in pixels per frame, and distance is measured in pixels.
* .moveTowards(destination, percentage) : moves a sprite towards another object or the mouse. percentage is how much of the distance between the two is covered each frame.
* .colliding(sprite, callback) : returns true when the sprite is currently colliding with the designated sprite or group. An optional callback function can be called to create custom interactions. .collides() functions the same, but only returns true on the first frame of the collision. .collided() returns true on the first frame after the collision is no longer detected.
* .overlaps(sprite) : allows sprites to overlap instead of colliding. Other methods following the same naming convention and functionality as .collided(), collides(), and .colliding() are also available.
* .remove() : removes the sprite from the scene.


---
### Let's Practice!

Let's load a new sprite into a sketch with p5.play. Then, using either a conditional statement or a switch, have the sprite execute a method from a total of 10 potential options using the number row kes on the keyboard. Pressing 1 will execute method A, pressing 2 executes B, 3 executes C and so on. For an added challenge, add another method that only is called when the sprite is clicked on.


---
## Sprite Animations

So far, our sprites have been simple colored polygons, however this is rarely the case in released games. We can load images into our sketch and use them to animate our sprites with a unique, adaptable appearance. As a reminder, while base p5 is capable of producing 3D graphics, p5.play is sed to create 2D games. All of the games created in this book will be 2D.

### Loading Images into a Sketch

In order to animate a sprite, we must first load the images into the sketch to do this, we need to follow these steps:

1. Find the image file you want to use. Most file types will work, but .jpg, .png, and .gif files tend to work with the least amount of compatibility issues.
2. Open your sketch's file browser. This is the gray arrow button shown in the image.
3. Click the triangle and select "create folder". This is optional, but highly recommended to help organize files. Give the folder a name and then select it.
4. Click the triangle next to your newly created folder and select "upload files". Here you can select your desired files from your hard drive and upload them to the sketch. When you see all of the files populate in the file browser, we have loaded our images!

There are a few tips that are useful when working with external images in p5. Be sure that you have selected the desired folder for your files BEFORE you upload them. Once uploaded the only way to change the file location is to delete and reupload them. Another tip is to have your file sizes as small as possible. Each p5 account only has 250MB of total asset storage, so having large files will fill up the space more quickly. When full you will need to either delete some assets or create a new account. My final tip for now is to adjust your file names. You can select the triangle by each file and select rename. This can help you with formatting as we will see below, and to make your life easier when typing file names in `loadImage()`.

Once the images are loaded, we can utilize them in the sketch. Let's look at the code example below and talk about it.

```js

let bgImage;

function preload(){
bgImage = loadImage("images/bgImage.jpg");
}
function setup(){
  createCanvas(400,400);
}
function draw(){
  background(bgImage);
}


```

In this sketch, we are loading an image to be displayed on the background. A new function called `preload()` is used to load the image. This is a useful function that will run it's code prior to anything else in the sketch. This is helpful because we can load in any external assets prior to the sketch needing to use them. Loading assets here may cause slightly longer loading times, but will help avoid errors caused by trying to access unloaded materials.

`loadImage()` needs an argument in order to find the image you want to load. In this hypothetical example, we have created a folder called "images" and loaded our file into it. Folders and sub-folders are separated with a slash `/`. You will also need to include the file name and extension. It is helpful to have a file name that is simple to spell, but still describes what the image is or is being used for. Having a typo in this line will cause the sketch to be unable to load the image and result in the following error.


As a final note, you can also use a URL to link to an image hosted online. This is helpful as it will not take up your account's 250MB of storage, but problematic because if the file is eve changed or moved, the sketch will not update and result in a broken link and the same error message as above.

By storing the image within a variable, we can then utilize it simply by calling its name like in the `background()` function above.

---
### Let's Practice!

Using the code above as a guide, try loading your own image into the background of a p5 sketch. For ad added challenge, try loading multiple, then utilize the number keys on the keyboard to switch between them.


---

Now that we have a grasp on loading images into the sketch, let's apply them to a sprite. Sprites can display a single image, but it is more common to provide several frames in order to animate the sprite. A for loop and array can be used to easily load and group together the images into easy-to-implement formats. 

```js

let aniFrames = [];
function preload(){
  for(let i  = 0; i < 4; i++){
aniFrames[i] = loadImage("assets/images/playerMoveAni" + i + ".png);
  }
}

```

The code above shows how you can utilize this process to quickly find and load the images into an array. It is helpful to number your image files so that they can be easily found and differentiated. It is common to see the file numbering begin with 0 in order to work with a standard for loop with minimal effort. The middle command of the for loop shows us how many frames will be in the animation. Having this number be incorrect will result in either missing frames or unfound files.

Looking at `loadImage()`, we can see the string has some extra parts from the previous example. In this case, we are concatenating the strings. This means that we will take the various values and combine them into a single string. This way we can repeat the operation, but have the ID number for each file update with each iteration of the for loop.

This method can be used for several animations. As long as the animations contain the same number of frames, you can utilize the same for loop, but is the number of frames differ, multiple loops will be needed in order to avoid dropped frames. 

Once we have loaded the images, we can add them to the sprite in `setup()`. (We only need to use preload to load the files. after that they are available to use as needed.)

To do this, we can use the ".addAni()" method. This method can be used to load animations to a sprite. Multiple animations can be loaded, but only one will be displayed at a time.

```js
mySprite.addAni("move", aniFrames[0], aniFrames[1], aniFrames[2], aniFrames[3]);

```

In .addAni() we first must give the animation a label. This is used for changing the animations. Each argument following the label is a frame in the animation. In the example above, the array indexes storing the images are used to indicate which files should be used. Frames can be placed in any order, repeated, or omitted as desired here.

To change the animation, we can use the `.ani` property. Simply set the property equal to the label given in the `.addAni()` method.

```js

if(mouseIsPressed){
mySprite.ani = "jump";
} else {
  mySprite.ani = "idle";
}

```


---
## Sprite Interactions: Other Sprites

p5.play utilizes three main methods to handle collisions with other sprites in a sketch. These are:

* .collided()
* .collides()
* .colliding()

In most cases, the practical differences between these is minimal, however they are all slightly unique and depending on the type of collision you are planning between sprites, you will want to use the correct one. Each of these methods will return a 1 value when their conditions are met, as well as call an optional callback function. Before we hop into the different ways to trigger a collision response, let's look a little more closely at the differences between the methods.

`.collides()` will return a 1 on the first frame that two sprites are detected as colliding.
`.colliding()` will return the number of frames that two sprites have been colliding.
`.collided()` will return a 1 on the first frame AFTER the sprites are finished colliding and are no longer touching.

All three of these methods take the same arguments. The first is the sprite or group of sprites that the computer will detect collisions with, and the second is an optional callback function.



---
### Callback Functions

A callback function is a usually simple function that can be stored and called back as needed when another command is executed. In the case of sprite collisions, they will generally be formatted like this:

```js

function draw(){
  mySprite.collides(enemySprite, die)
}

function die(){
  mySprite.ani = "die";
  mySprite.life = 60;
  playerLives--; 
  if(playerLives === 0){
  gameOer();
  } else {
  levelReset();
  }
}


```

Notice how function die() indicates everything that should happen when the player collides with an enemy. In this case, the animation changes, then the sprite is removed after 60 frames. Then the number of lives decreases by one and the level either rests or moves to a game over state depending on the number of lives remaining after the decrease.

To indicate a callback, you need to give its name _WITHOUT_ the parentheses. This will store the name of the function to call without immediately calling it. This is important because we do not want function to be called until the sprites collide.

---

### Collisions with Conditionals

Remember that the callback functions are optional. Another way we can execute a collision interaction is with a basic conditional. Looking at the example below we can the formatting for this.


```js
// This example comes from p5play.org

if (block.colliding(floor)) {
		block.color = 'red';
	} else block.color = 'blue';

	if (block.colliding(floor) > 60) {
		block.vel.y = -9;
	}


```


This formatting works because the methods return a 1 or 0, which can be interpreted as a boolean value by the conditional.

---
## Sprite Interactions: The Mouse and Keyboard



---
### Let's Practice!

At this point we should be able to load multiple animations onto a sprite and swap between them, as well as have a sprite collide with another sprite. Let's combine these two into a single sketch. 

Begin by creating two sprites on the canvas and move them around using the WASD and IJKL keys respectively. Include a collision callback that will do the following to one of the sprites:

* have the sprite bounce back a little from the collision.
* change the animation of the sprite from a moving/idle animation to a death animation.
* set the life property of the sprite to 60 frames.


Once you have a solid grasp on setting these values, experiment with the second sprite and see what cool collision interactions you can come up with.

---
