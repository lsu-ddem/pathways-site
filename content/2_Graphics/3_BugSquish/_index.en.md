---
title: Game Design using the p5.play library
weight: 3
---
## Chapter 6

This chapter will ask you to use using the p5.play.js library to build "Bug Squish!", an interactive game. The following lessons will introduce you to adding the library to your project, the basics of building and controlling interactive Objects in your game (aka "sprites"), watching for and reacting to collisions between sprites, and how to group similar sprites together into Groups.

## Including P5.play.js in your Project

For p5.play.js to work in your sketch you need to include it in your HTML file.

Head to cdnjs.com and search for Tone.js. Find a URL to the minified (.min) version of the library, and copy it to your clipboard.

Next, open your project-folder and find the index.html file. Add this line under the first three script tags, replacing the URL in the quotes with the URL you just copied from cdnjs.com:

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/tone/13.8.9/Tone.min.js"></script>
```

Once you have added this line, save your HTML file and head back to your "sketch.js" file. This loads Tone.js in your sketch.
