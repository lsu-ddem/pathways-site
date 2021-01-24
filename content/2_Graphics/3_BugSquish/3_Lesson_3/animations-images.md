---
title: Animations & Images
weight: '4'
---
## Adding files into a P5 project

The first thing we have to do before adding an image to our sprite is to include that image inside the brain of our P5 project. This can be done in two different ways, but they function almost identically. 

1. Looking at the example on the previous page, we can see the photoDirectory variable contains a string for a URL. This is the location on the internet where the photos are located. If your files are located on a specific server, you can provide a link to them and P5 will find the files and add them into your project. (more details later) If you use this method, you will need to store the URL as a string in a variable as shown on the previous page. This is useful because it will not take up any storage space in your p5 account, but can be problematic since someone will have to find a place to host the files and you will have to rely on them to make sure the files remain both online, and at the same location for your codes to work.

2. You can also add you own local images from your own device onto P5's server in the steps detailed below. 
    1. Open the file editor ![default](/images/graphics/fileeditor.png)
    2. click on the arrow next to "Sketch Files" and select "Create Folder" ![default](/images/graphics/loadfile2.png)
    3. Give this folder a name using the pop up window. For this example, we went with "images". You will now see your folder appear inside of the file editor. 
    4. Clock the small triangle next to your new folder and select "upload file". You can then use the pop-up window to drag-and-drop your image, or manually upload it by searching your device. ![default](/images/graphics/loadfile3.png)
    5. you will now see the file inside your folder like in the image below. You can click the triangle by your file to rename it or delete it as needed. ![default](/images/graphics/loadfile4.png)

The second method tends to be a little more stable than method 1 because if the server location changes at all in the previous method, P5 will be unable to locate the images and the project will break. The downside is that each P5 account has a limited amount of storage, so you will have to be careful not to use all of this space. This process works the same for images, sound files, and video files. You can delete these assets to free up space as needed under the `My Account` tab in the top right of the screen.

---

### Let's Practice!

Create a new sketch in p5 and try to load an image file into it. We will later use this sketch to add the image to a sprite.

---

## Putting an image onto a sprite

Now that p5 knows where to find the image, you need to have the program load the image into your project. To do this, we need to call function preload(). This function's purposes is to load any external assets prior to the setup function. This will prevent the code from trying to perform a task with an asset that isn't actually in the project yet. Not doing this in preload() will cause multiple errors. 

To load an image, you first need a variable to store the image in your code. You then assign the variable the result of function loadImage(). The argument for this function is the file pathway to where you image is located on the internet. Using the examples from above, the line would look like this:

```
let myImage;

function preload(){
myImage = loadImage(images/test1.png);
}
```

Now we can use this image in our code. Try replacing the default value of 220 inside of the background() function with the name of your variable that is storing the image and see what happens.

To add the image to the sprite, first we must make a sprite. Then we can simply say `sprite.addImage('label', files);` like in the example below.

You can use `addAnimation()` instead because `addImage()` is creating a single frame animation for the sprite.  

You must give each animation a name so that you can refer to it whenever you need ot adjust a parameter of the animation or change it. You then have to tell P5 which image file(s) you want to use.

---

### Let's Practice!

Follow the steps above to add the image to a sprite in the sketch from the previous practice. 

---

### Changing the image on a sprite

To change the image on a sprite, it is fairly simple. First you must repeat the process of loading in each image and adding it to the sprite with `addImage()` or `addAnimation()`

Next you will need to set up a condition that will tell your code when to change the image. For this example, We will change the image if the mouse is pressed via functions mousePressed() and mouseReleased(). if() statements in the draw() functions could also work for this. You can then use the `.changeAnimation()` method to update the animation present on the sprite. The argument is the label given to the initial image/animation when it was added to the sprite.

{{% codepen 400 GRpMdym %}}

---

### Let's Practice!

The next step in our practice is to now add another image to our sketch and have out sprite change images. The trigger for this can be whatever you want, but will need to involve a conditional and the `.changeAnimation()` method. Try one or more of the following:

* changing based on the mouse or sprite location
* changing based on key inputs
* changing based on a timer
* changing based on colliding with another sprite
* changing when the sprite is clicked on

---

## Animating a sprite with multiple images

Once you can load an image onto a sprite with `.addAnimation()` or `addImage()`, you are close to making this a dynamic animation with multiple images. In order to do this, you will have to tell p5 to load all of the images needed in your project. This is where hosting the images on a separate server and using for loops, like in the example below, can save you a large amount of typing. 

Once you have loaded all of your images into your project, the next step is to add them into the `.addAnimation()` method. Simply type out the name of the variables storing the images in the order that you want them to appear in your animation. (You can repeat images if needed) P5.play will then cycle through the images as the draw function repeats it's loop. Don't forget that you will need to give the animation a name as well. This will let you change between multiple animations as needed.  

Here is an example of adding a looping animation to a sprite and coding for interactions from mouse and key presses:

{{% codepen 400 ZRRoEG %}}

Notice how the images are loaded into an array using a for loop in order to keep them all in one place. you can then easily reference the array index to find a specific image.

---

### Let's Practice! 

This is the final step for the practice in this lesson. You should already have a sketch with at least 2 images loaded into it, and a sprite. Use the steps above to add them as an animation on a single sprite. If you want, check out the resources page or someplace like [Spriter's Resource](https://www.spriters-resource.com/nes/) for some 2D image assets. (Keep in mind that some images on these sites may be restricted by copyright).

---
