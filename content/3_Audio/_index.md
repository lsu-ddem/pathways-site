---
title: Sounds with Tone.js
weight: 3
---
## Unit 3

The following lessons and assignments will focus on using your understanding of coding basics to integrate sound into your projects using the tone.js library. Topics covered include basic understanding of digital signal processing and the web audio signal chain, creating sound file players, synthesizers, and audio effects processors, and triggering sonic events in games and graphics-based projects.

While completing these lessons, be sure to check out additional examples and extended readings in the **Resources** section as well as the [tone.js](https://tonejs.github.io/docs/) library reference website to build a stronger understanding of these concepts.

## Including Tone.js in your Project

For Tone.js to work in your sketch you need to include it in your HTML file, just like with P5.play.

Head to `cdnjs.com` and search for Tone.js. Find a URL to the minified (.min) version of the library, and copy it to your clipboard.

Next, open your project-folder and find the index.html file. Add this line under the first two script tags, replacing the URL in the quotes with the URL you just copied from `cdnjs.com`:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.9/Tone.js" integrity="sha512-nUjml8mN4CNYqBAy0ndDrd8pJV/eTtBNDsnvNtPqozx9/BccUeWSoKW14qWkQUnhuh8E3m+yra3qdzM68lqPEQ==" crossorigin="anonymous"></script>
```

(This line contains the most recent version of the `tone.js` library at the time of writing. You can just copy directly from the line of code above to include version 14.8.9)

When adding this line be sure to _*replace*_ the script containing p5.sound library. (this is on line 5 of the default index.html file) p5.Sound utilizes parts of the Tone.js library, but isn't as flexible as just using Tone by itself. If you don't replace the link to p5.sound, then the two commands will fight each other and none of the desired functions in this section will work properly.

If you would like to learn more about the built-in library, there are condensed lessons on how to achieve the core concepts of this unit with the native p5.sound library in the [resources tab](https://pdm.lsupathways.org/6_resources/7_soundandmusic/p5.sound/).

Again, it is recommended that you duplicate your code at this point in order to have a starting template that already contains the Tone.js library by default. If desired, you can combine this template with yours from the graphics unit so that all of your starting codes contain both libraries by default.  


---

### Let's Practice!

This is just another library like p5.play! The install method is exactly the same as well. Lets open up the p5.play template we made in the last unit.
Duplicate that code, then add this line of html code to the index file right below the script where we added p5.play.
Rename and save this new version. If you start from this code, you will automatically have a starting sketch that can utilize BOTH p5.play and Tone.js, something that will be useful later down the line!

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.9/Tone.js" integrity="sha512-nUjml8mN4CNYqBAy0ndDrd8pJV/eTtBNDsnvNtPqozx9/BccUeWSoKW14qWkQUnhuh8E3m+yra3qdzM68lqPEQ==" crossorigin="anonymous"></script>
```

---
