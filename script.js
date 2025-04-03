//When DOM is fully loaded, this will be fired
document.addEventListener("DOMContentLoaded", function() {
    let onLoad = document.getElementById("onLoad");

    onLoad.innerHTML = "<h1>This is some loaded content</h1>"


//Get the element that will show us our key code
const directionEl = document.getElementById("direction");

document.addEventListener("keydown", function() {
    console.log(event);

//When a key is pressed, the element with the direction id will show a message
    directionEl.innerText = `The key that was pressed was ${event.key}`;
})

//CLICK EVENT EXERCISE!

let buttonClick = document.getElementById("clickMe");

buttonClick.addEventListener("click", function() {
    buttonClick.innerText = `You clicked me!`;
    
    

})

    
//event handlers are done directly on the HTML, event listeners are done in js

// function greet(){
//     console.log('Hello!')
// }
})

//RANDOM COLOR BACKGROUND EXERCISE!
let changeButton = document.getElementById('randomColorBtn');
let newColor = {1:'pink', 2:'orange', 3:'red', 4:'yellow', 5:'pink', 6:'orange', 
    7:'red', 8:'blue', 9:'green', 10:'teal'};
    let changeColor = function(){
        let currentColor = Math.ceil(Math.random() * 10);
        let screenBody = document.body.style;
        console.log(newColor[currentColor]);
        screenBody.background = newColor[currentColor];
    }

//classList toggle demonstration, makes button glow
function changeBtnStyle(){
    const btn = document.getElementById("coolBtn");

    btn.classList.toggle("glow");
}

//DARK MODE EXERCISE!
function changeModeBtn(){
   const mBtn = document.getElementById("modeBtn");
   const bodyMode = document.body;
   
   if (mBtn.innerText === "Dark Mode"){
    bodyMode.classList.toggle("dark");
    mBtn.innerText = "Light Mode";
   } else {
    bodyMode.classList.toggle("light");
    mBtn.innerText = "Dark Mode";
   }

}