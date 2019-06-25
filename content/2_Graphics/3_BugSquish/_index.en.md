---
title: Game Design using the p5.play library
weight: 3
---
## Chapter 6

This chapter will ask you to use using the p5.play.js library to build "Bug Squish!", an interactive game. The following lessons will introduce you to adding the library to your project, the basics of building and controlling interactive Objects in your game (aka "sprites"), watching for and reacting to collisions between sprites, and how to group similar sprites together into Groups.

## Including P5.play.js in your Project

For p5.play.js to work in your sketch you need to include it in your HTML file. We can use the [jsDelivr](https://jsDelivr.com) website to generate a link to the P5.play library's github source code. A link is provided for you below.

Open your project-folder and find the index.html file. Add this line under the first three script tags, replacing the URL in the quotes with the URL you just copied from cdnjs.com:

```html
<script src="https://cdn.jsdelivr.net/gh/molleindustria/p5.play/lib/p5.play.js"></script>
```

Once you have added this line, save your HTML file and head back to your "sketch.js" file. This loads p5.play.js in your sketch.
