document.addEventListener("DOMContentLoaded", function() {
    let onLoad = document.getElementById("onLoad");

    onLoad.innerHTML = "<h1>This is some loaded content</h1>"
})

//Get the element that will show us our key code
const directionEl = document.getElementById("direction");

document.addEventListener("keydown", function() {
    console.log(event);

//When a key is pressed, the element with the direction id will show a message
    directionEl.innerText = `The key that was pressed was ${event.key}`;
})

//Click event exercise!

let buttonClick = document.getElementById("clickMe");

buttonClick.addEventListener("click", function() {
    buttonClick.innerText = `You clicked me!`;
})