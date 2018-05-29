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
* Inside of the _**body**_ element, we place any code that will form the primary audiovisual elements of our project. For this course, we will be writing this code inside of its own file named "sketch.js", so we simply need to call to it here in our HTML file using another _**script**_ tag.

## CSS file

CSS stands for "Cascading Style Sheets", and is code that describes and controls the layouts of the HTML elements we code for in our "index.html" file. We will not be focusing much on editing and designing code for our CSS files throughout this course, so the CSS portion of every project we create can be extremely simplistic:

```
html, body: {  
 margin: 0;   
padding: 0;
}
```

The preceding CSS code states that any visual elements found in the **_body_** element of our HTML file will be rendered in our browser with no added margin or padding around them. In many cases, a "style.css" file is not needed for our projects to run properly. When working in the p5 Web Editor, a CSS file is automatically created for each new project.

## JavaScript File

This file contains the bulk of the code that creates results in our project. We will be working primarily inside of this file, as it will be loaded into our web browser through our HTML file and rendered by your web browser. In this example, our JS file contains just enough code to allow the p5 library to create a blank, gray canvas, which can be seen in the "Result" tab.

When working in the p5 Web Editor, every new project you create will inherently name this file "sketch.js". You can rename this file to be anything you'd like, but if you do, you will need to also update that  filename in the **_body_** element of your accompanying HTML file. When creating and hosting files locally on your computer, you'll want to be careful to not store multiple, different JavaScript files inside of the same project folder if they all share the same generic name. Doing so will cause your browser to be unable to render the proper JavaScript file, and your project won't run.

## Data Types

Throughout our projects, we will be using a variety of different data types in our code. Here is a quick explanation of common data types used in JavaScript:

* **Number:** a value represented by numerical digits. Numbers can be floats or integers. Large numbers over three digits should not include a comma as they normally would in the written word (e.g. 1,000 should be 1000 in your code).
* **String:** a value represented by text and characters (including spaces), commonly enclosed in a pair of quotation marks (e.g. "blue", "duckling", "Type Any Word Here!"
* **Boolean:** a logical entity represented through the states of `true` or `false`.

## Coding with Proper Syntax
