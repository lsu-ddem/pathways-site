---
title: Animations & Images
weight: '4'
---
## Adding files into a P5 project

The first thing we have to do before adding an image to our sprite is to include it inside of P5. This can be done in two different ways, but they function almost identically. 
1. Looking at the examplel on the previous page, we can see the photoDirectory varible contains a string for a URL. This is the location on the internet where the photos are located. If your files are located on a specefic server, you can provide a link to them and P5 will find the files and add them into your project. (more details later) If you use this method, you will need to store the URL as a string in a variable as shown on the previous page.

2. You can also add you own locacl images from your own device onto P5's server in the steps detailed below. 
    1. Open the file editor ![default](/images/graphics/fileeditor.png)
    2. click on the arrow next to "Sketch Files" and select "Create Folder" ![default](/images/graphics/loadfile2.png)
    3. Give this folder a name using the pop up window. For this example, we went with "images". You will now see your folder appear inside of the file editor. 
    4. Clock the small triangle next to your new folder and select "upload file". You can then use the pop-up window to drag-and-drop your image, or manually upload it by serching your device. ![default](/images/graphics/loadfile3.png)
    5. you will now see the file inside your folder like in the image below. You can click the triangle by your file to rename it or delete it as needed. ![default](/images/graphics/loadfile4.png)

The second method tends to be a little more stable than method 1 because if the server location chages at all in the previous method, P5 will be unable to locate the images and the project will break. The downside is that each P5 account has a limited amount of storage, so you will have to be careful not to use all of this space. This process works the same for images, sound files, and video files. 

## Putting an image onto a sprite

Now that p5 knows where to find the image, you need to have th erogram load the image into your project. To do this, we need to call function preload(). This function's purposes is to load any external assets prior to the setup function. This will prevent the code from trying to perform a task with an asset that isn't actually in the project yet. Not doing this in preload() will cause multiple errors. 

To load an image, you first need a variable to store the image in your code. You then assign the variable the result of funciton loadImage(). The argument for this function is the file pathway to where you iamge is located on the internet. Using the examples from above, the line would look like this:

let myImage;

funciton preload(){
myImage = loadImage(images/test1.png);
}

Now we can use this image in our code. Try replacing the default value of 220 insode of the background() function and see what happens.

To add the image to the sprite, first we must make a sprite. Then we can simply way sprite.addAnimation('name', files); like in the example below.

We are using addAnimation right now because it will make our transition to adding multiple images much easier later on. 

You must give each animation a name so that you can refer to it whenever you need ot adjust a parameter of the animation or change it. You then have to tell P5 which image file(s) you want to use.

## Changing the image on a sprite
To change the image on a sprite, it is farly simple. First you must repeat the process of making a seperate animation for the new image. Be sure to give it a different name from your first image. 

Next you will need to set up a conitional statement that will tell your code when to change the image. For this example, We will change the image if the mouse is pressed. 

[example here]

In the example, we used the sprite.changeAnimation() method and specefied the name of the new animation as teh argument. This process will be identical whether your animation has one or multiple images. 

## Animating a sprite with multiple images

Once you can load an image onto a sprite with .addAnimation90, you are close to making this an dynamic animation with multiple images. In order ot do this, you will have to tell p5 to load all of the images needed in your project. This is where hosting the images on a seperate server and using forloops, like in the example below, can save you a large amount of typing. 

Once you have loaded all of your images into your peoject, the next step is to add them into the .addAnimation() method. simpley type out the name of the variables storing the images in the order that you want them to appear in your animation. (You can repeat images if needed) P5.play will then cycle through the images sa the draw function repeats it's loop.  

Here is an example of adding a looping animation to a sprite and coding for interactions from mouse and key presses:

{{% codepen 400 ZRRoEG %}}


