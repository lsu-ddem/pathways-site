---
title: Coding Basics
weight: 1
---
## Elements of a Web Project

Each web project that we design is composed of a collection of files that come together to create our interactive art work. When creating these files locally on your computer, you should store them all in the same folder. When working in code editing apps such as VS Code, you will often have quick access to all files that are grouped within the same folder in case you need to change or update code across multiple files. When working in the P5.js Web Editor, creating a new File from main menu results in the automatic creation of a project folder  filled with pre-coded HTML and CSS files, and a JavaScript file that contains some starter code. 

Take a look at the HTML, JS, and CSS tabs in the embedded CodePen sketch below to learn more about what each of these files contain:

{{% codepen 500 MGMMXv %}}

## HTML file

The HTML file in your project is read by your web browser and rendered into readable text, visuals, and audio.  Each web project we create in this course will require the minimum code that you see in this example. While we won't dive too deep into coding practices for HTML, lets take a look at what these vital lines of code do:

* Inside of the _**head**_ element, we include _**script**_ tags that link us to the code libraries that we'll use as dependencies for our JavaScript file. This will allow the code we write in our JavaScript file to work properly and create the interactive audiovisuals we design. When working with p5.js, it's necessary to include a link to the main p5 library and suggested to include a link to the p5.dom library (which allows us to create user-friendly buttons, sliders, and other common website features in our projects). If you're working in the p5 Web Editor, each project you create will automatically include links to these two libraries and an additional p5.sound library (we will replace this with the Tone.js library in future lessons).
* Inside of the
