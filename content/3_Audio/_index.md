---
title: Sounds with Tone.js
weight: 3
---
## Unit 3

The following lessons and assignments will focus on using your understanding of coding basics to integrate sound into your projects using the tone.js library. Topics covered include basic understanding of digital signal processing and the web audio signal chain, creating sound file players, synthesizers, and audio effects processors, and triggering sonic events in games and graphics-based projects.

While completing these lessons, be sure to check out additional examples and extended readings in the **Resources** section as well as the [tone.js](https://tonejs.github.io/docs/) library reference website to build a stronger understanding of these concepts.

## Including Tone.js in your Project

For Tone.js to work in your sketch you need to include it in your HTML file, just like with P5.play.

Head to cdnjs.com and search for Tone.js. Find a URL to the minified (.min) version of the library, and copy it to your clipboard.

Next, open your project-folder and find the index.html file. Add this line under the first two script tags, replacing the URL in the quotes with the URL you just copied from cdnjs.com:

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/tone/13.8.9/Tone.min.js"></script>
```

Once you have added this line, save your HTML file and head back to your "sketch.js" file. This loads Tone.js in your sketch.

Again, it is recommended that you duplicate your code at this point in order to have a starting template that already contains the Tone.js library by default. If desired, you can combine this template with yours frm the graphics unit so that all of your starting codes contain both libraries by default.  

If you look at the HTML file you will see that P5 contains a built in sound library be default. These assignments are built around te Tone.js library, and will not function in the built in sound processing functions. To learn more about the built in library, P5.Sound, please check the resources page.
