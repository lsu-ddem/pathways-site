---
title: 'Adding Sound Events to Games: Sound File Playback'
weight: '1'
---

The first step in adding interactive sounds to sprites is to add in the sound file that we want to use, like in the sampler assignment. From there we can load the sound into a new `Tone.Player()` or `Tone.Players()` object. 

From there we simply need to set up a trigger to playback the sound involving oue sprites. This can be done in several ways. Lets look at the code below to see a few of the more common ones.

{{% codepen 700 gNxvWe %}}

All of the sound playback commands are located within the function `collectBones` (never trigger sound playback inside of the draw function). This function is serving as a callback function for whenever our PC sprite, rover, collides with a sprite inside of the bone group. Looking at that function in more detail we can see two different methods for triggering sounds present here. 


```js
function collectBones(character, bone) {
  bone.remove();
  boneCount++;
  sfPlayer.player("beep").start();
  if (bones.length == 0) {
   sfPlayer.player("cash").start();
  }
}
```

Automatically, whenever the two sprites collide, the bone that is being collided with will be removed from the screen, and the score will go up by one. We can see this by playing the game. The next line triggers the "beep" sound effect whenever the function is called. Remember, a callback function is a function that is called in response to another event; in this case a collision between two specific sprites on the canvas. The second sound playback method used in this code is present in the conditional statement also given in this function. This adds an additional possible sound outcome when sprites collide, but only with specific conditions in place. In this code, that condition is that all of the bones have been removed from the game.

By utilizing unique callback functions for interactions with different kinds of sprites, you can program unique interactions between the different elements on the canvas. Try this: copy the entire js code in the example above and paste it into a new P5 project. As a reminder, you will have to have both the Tone.js and P5.play libraries installed via your HTML file for this, and the remaining assignments in this unit to function. Then, add in a unique sound file playback for when Rover bumps into a fire hydrant. You can find some sound files that you can download in the resources section of this website.

---

### Let's Practice!

Can you use the code above as a reference and create the following:

A sketch with different sprites. These don't have to be animated, but that can be an extra step if you want. These sprites should be able to interact in some way. (use `.collide()` or `.bounce()` or `.displace()`) When they interact with each other, have a sound play back automatically. See if you can get at least 3 different sprites with unique sounds to play when they are interacted with by the player character. Check the [Resources section](https://pdm.lsupathways.org/6_resources/7_soundandmusic/4_tate-tonestuff/sample-playback-and-effects/samples/) or [this repository](https://github.com/mbardin/PDM-resources) for some free-to-use sound files.

---