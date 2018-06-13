---
title: Coding Basics
weight: 1
---

## Elements of a Web Project

Each web project that we design is composed of a collection of files that come together to create our interactive art work. When creating these files locally on your computer, you should store them all in the same folder. When working in code editing apps such as VS Code, you will often have quick access to all files that are grouped within the same folder in case you need to change or update code across multiple files. When working in online code editors such as CodePen or the P5.js Web Editor, creating a new File or Pen from the main menu results in the automatic creation of a project folder filled with HTML, CSS and JavaScript files (the P5 Web Editor provides some starter code for you in all three files).

Take a look at the HTML, JS, and CSS tabs in the embedded CodePen sketch below to learn more about what each of these files should contain:

{{% codepen 500 MGMMXv %}}

## HTML file

The HTML file in your project is read by your web browser and rendered into readable text, visuals, and audio. Each web project we create in this course will require the minimum code that you see in this example. While we won't dive too deep into coding practices for HTML, lets take a look at what these vital lines of code do:

- Inside of the **_head_** element, we include **_script_** tags that link us to the code libraries that we'll use as dependencies for our JavaScript file. This will allow the code we write in our JavaScript file to work properly and create the interactive audiovisuals we design. When working with p5.js, it's necessary to include a link to the main p5 library and suggested to include a link to the p5.dom library (which allows us to create user-friendly buttons, sliders, and other common website features in our projects). If you're working in the p5 Web Editor, each project you create will automatically include links to these two libraries and an additional p5.sound library (we will replace this with the Tone.js library in future lessons).
- Inside of the **_body_** element, we place any code that will form the primary audiovisual elements of our project. For this course, we will be writing this code inside of its own file named "sketch.js", so we simply need to call to it here in our HTML file using another **_script_** tag.

## CSS file

CSS stands for "Cascading Style Sheets", and is code that describes and controls the layouts of the HTML elements we code for in our "index.html" file. We will not be focusing much on editing and designing code for our CSS files throughout this course, so the CSS portion of every project we create can be extremely simplistic:

```
html, body: {  
 margin: 0;
padding: 0;
}
```

The preceding CSS code states that any visual elements found in the _**body**_ element of our HTML file will be rendered in our browser with no added margin or padding around them. In many cases, a "style.css" file is not needed for our projects to run properly. When working in the p5 Web Editor, a CSS file is automatically created for each new project.

## JavaScript File

This file contains the bulk of the code that creates results in our project. We will be working primarily inside of this file, as it will be loaded into our web browser through our HTML file and rendered by your web browser. In this example, our JS file contains just enough code to allow the p5 library to create a blank, gray canvas, which can be seen in the "Result" tab.

When working in the p5 Web Editor, every new project you create will inherently name this file "sketch.js". You can rename this file to be anything you'd like, but if you do, you will need to also update that filename in the _**body**_ element of your accompanying HTML file. When creating and hosting files locally on your computer, you'll want to be careful to not store multiple, different JavaScript files inside of the same project folder if they all share the same generic name. Doing so will cause your browser to be unable to render the proper JavaScript file, and your project won't run.

## Data Types

Throughout our projects, we will be using a variety of different data types in our code. Here is a quick explanation of common data types used in JavaScript:

- **Number:** a value represented by numerical digits. Numbers can be floats or integers. Large numbers over three digits should not include a comma as they normally would in the written word (e.g. 1,000 should be 1000 in your code).
- **String:** a value represented by text and characters (including spaces), commonly enclosed in a pair of quotation marks (e.g. "blue", "duckling", "Type Any Word Here!"
- **Boolean:** a logical entity represented through the states of `true` or `false`.

## Coding with Proper Syntax

When coding in a text-based language such as JavaScript, it's important to follow some basic rules of syntax so that your computer can properly render your project without errors. In many cases, an error will cause your entire project to not work, or at the very least, large portions of it. Learning to follow some simple techniques from the start will help cut down on time spent debugging and troubleshooting:

- Symbols such as braces—{ , [ ,—and parenthesis are always used in pairs. Open and closed braces and parenthesis are used to enclose data that is being used for a specific purpose, and forgetting to match open and closed symbols can lead to common errors. For example: in the embedded code above, the phrase `createCanvas()` is followed by a pair of parenthesis containing a set of numbers. If we edited that line of code and removed one of those parenthesis, our browser or code editor would give us an error in our Console (more on this below), and the code would not run beyond that line.
- Capitalization is crucial when coding, and words/phrases must use the same capitalization when they are used more than once. For instance, the words "pecan" and "Pecan" are close enough to be understood as the same entity when reading them in this sentence, but to a computer, they are considered to be two completely different things. If the word "pecan", starting with a lower case "p", is used to represent something crucial in your code, you will need to type it exactly the same way each time you need to reference it.
- Good code includes comments or short explanations of any complex elements involved so that others can learn from your work. This is also helpful to keep track of how your code works so that you can pinpoint exact lines or sections that may need to be fixed. To leave comments in your JS file, add two / symbols before the comment you want to type:

```
//Here is a comment. This is only readable by you, not the browser
```

Longer comments that span multiple lines can be made like this:

```
/* Here is
a multi-line
comment. Neat!
*/
```

## Using the Console

The console is a section of your code editor or browser that can be used when you want to get information on aspects of your code, or you want to see a log of any and all errors that have occurred in your project. You can also use the console to communicate with your code while it is running, which is helpful for checking on the current state of variables, the current color of shapes and objects, or to even double check that functions or events you designed are working properly.

Click on the "Edit on CodePen" title on the embedded code below to see a few examples of how you can ask your code to log info to your browser's console. To ask your code to log something to the console, use the `console.log()` function, and place whatever you want to be logged inside of the parenthesis. Our example below logs the current mouseX position if you click on the screen, the sum of a mathematical equation, and the contents of a variable called `phrase1`. You can also try typing into the console to get information back. Try typing `circleColor` or `newPhrase` and see what you get when you hit enter.
{{% codepen 500 JZPVRa %}}
