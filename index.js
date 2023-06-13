// CREATE
// target elements with querySelector
// appendChildren
// add a ul with some li todos

/*
Create a DOM Element
This tutorial shows you how to create a DOM element and attach it to the DOM tree.

To create a DOM element, you use the createElement() method.

const element = document.createElement(htmlTag);
Code language: JavaScript (javascript)
The following example creates a new <div> element:

const e = document.createElement('div');
Code language: JavaScript (javascript)
And fill the <div> element with any HTML content:

e.innerHTML = 'JavaScript DOM';
Code language: JavaScript (javascript)
And attach the <div> element to the DOM tree by using the appendChild() method:

document.body.appendChild(e);
Code language: CSS (css)
Besides using the innerHTML property, you can use the DOM methods to create text nodes and append the text nodes to the new element:

var textnode = document.createTextNode('JavaScript DOM');
e.appendChild(textnode); 
Code language: JavaScript (javascript)
After that, you can use the appendChild() method to attach the new element to the DOM tree.
*/

// TODO : UX
/** 
 * 1 STEP
 * We type in some input
 * When we click to the button (submit), we want to add our input value to the list
 * We want to show the list we created on the screen
 * 
 * 2 STEP
 * We want to modify/update the list element directly on the UI
 * 
 * 3 STEP 
 * We want to delete/ remove the item from the list
 * 
 * BONUS ?
 * 4 STEP
 * mark as completed
*/

// https://getbootstrap.com/docs/5.3/components/list-group/#active-items


let btnToAdd = document.getElementById('button-addon2');
let inputValue = document.getElementById('input');

























// READ

// UPDATE
// replace

// DELETE
// removeChild

// Bonus:

// strike through - style=“text-decoration: strikethrough;”

// checkbox
