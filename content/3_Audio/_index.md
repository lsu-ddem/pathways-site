---
title: Sound (Tone.js)
weight: 3
---
## Unit 3

The following lessons and assignments will focus on using your understanding of coding basics to integrate sound into your projects using the tone.js library. Topics covered include basic understanding of digital signal processing and the web audio signal chain, creating sound file players, synthesizers, and audio effects processors, and triggering sonic events in games and graphics-based projects.

While completing these lessons, be sure to check out additional examples and extended readings in the **Resources** section as well as the [tone.js](https://tonejs.github.io/docs/) library reference website to build a stronger understanding of these concepts.

## Including Tone.js in your Project

For Tone.js to work in your sketch you need to include it in your HTML file.

Head to cdnjs.com and search for Tone.js. Find a URL to the minified (.min) version of the library, and copy it to your clipboard.

Next, open your project-folder and find the index.html file. Add this line under the first three script tags, replacing the URL in the quotes with the URL you just copied from cdnjs.com:

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/tone/13.8.9/Tone.min.js"></script>
```

Once you have added this line, save your HTML file and head back to your "sketch.js" file. This loads Tone.js in your sketch.
