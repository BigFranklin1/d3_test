// Get the reference to all the HTML elements we need to manipulate
// the keyword "const" stands for constant
// this means once defined, the variable cannot be assigned to other things later
const number = document.getElementById('number-input');
const sumbit = document.getElementById("submit-button");
const container = document.getElementById("square-container");

// ADD A CLICK LISTENER TO THE BUTTON
// this tells the browser to listen for 'click' event on the submit button
// and trigger the function "createSquare" that we are going to define below
sumbit.addEventListener('click', createSquares);

// FUNCTION TO APPEND SQUARES INTO THE CONTAINER
// here is where all the magic happens
// a function is a pre-defined procedure that tells the program what to do
// the name of the function is "createSquare"
// based on the above listener assignment, it will run every time you click the button
function createSquares() {

    // READ THE VALUE FROM THE INPUT BOX
    // .value is how you get the reading from a <input> tag
    // which can be easily checked on https://www.w3schools.com/tags/tag_input.asp
    // w3schools is the go-to choice for HTML reference， often the first result that pops up when you google it
    let num = number.value;

    // CLEANING UP THE CONTAINER
    // before we append new elements to the container, we want to make sure it is empty first
    let currentLength = container.childNodes.length; // .childNodes refers to the element inside the container
    for (let i = 0; i < currentLength; i++) { // for times as many as the number of existing squares
        container.childNodes[0].remove(); // we remove one element from the .childNodes
    }

    // CREATE THE SQUARES
    // we create each square as an empty <div> element, the most commonly used tag for customization
    // check out more about <div> here https://www.w3schools.com/Tags/tag_div.asp
    // we apply the square apperance of the <div> by assigning it with class "square"
    // the style definition of which can be found in styles.css
    for (let i = 0; i < num; i++) {
        let square = document.createElement('div');
        square.className = "square";
        container.appendChild(square);
    }

}