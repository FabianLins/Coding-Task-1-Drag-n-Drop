# Drag 'n' Drop with React
## Demo
https://fabianlins.github.io/Coding-Task-1-Drag-n-Drop/

## Used technologies/ frameworks
###### I make use of those technologies/ frameworks for my project:
	•	React with TypeScript
	•	(Vanilla) SCSS

I used React with TypeScript. I did this out of habit but for quick/ side projects where time matters you may considering not using TypeScript.

## Used 3rd Party Libraries
I make use of those 3rd party libraries:

| Name | Explanation |
| ------------- | ------------- |
| React | Modern JavaScript Framework|
| Sass | CSS extension language|
| Typescript | JavaScript extension language|
| Vite | To initialize the React + TypeScript combination|


## Those components need to be installed locally:
	•	nodejs

## Installation / execution of the projects

You have to insert these commands in the command line / bash:

```console
$ git clone https://github.com/FabianLins/Coding-Task-1-Drag-n-Drop/ lins-coding-task-drag-drop
$ cd lins-coding-task-drag-drop
$ npm install
$ npm run dev
```

## What did I learn and think about this project
I never worked with the drag events. Something which comes close is using HammerJS for making use of swipe event listeners but it was still something new for me and I did not consider the time for trying out all the different drag events.
Also consider it does not work on mobile devices since the draggable attribute does not work while inspecting. This also made the debugging hard and sometimes it was faster to use alerts instead of console.log commands to debug.
For mobile support you should either look for a mobile library or you code the dragging by yourself. I did one attempt of creating the mobile drag form scratch by adding a position: absolute to the onPointerMove event listener but it was hard to implement the pointer position while the element is being moved. This was mainly because you move the screen due to the pointer movement but also because the pointermove event listener stopps after some while (on the desktop view it did not do this). Since these issues go really deep a library is a good way to add the mobile support. However, it was not asked for it and I just gave it a try out of curiosity.
