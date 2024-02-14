// ფერის შეცვლა ღილაკით
let text = document.querySelector('p')
console.log
let button1 = document.getElementById("button1")
button1.style.backgroundColor = 'red'
let button2 = document.getElementById("button2")
button2.style.backgroundColor = "blue"
let button3 = document.getElementById("button3")
button3.style.backgroundColor = "green"

function changeColorToRed(){
    text.style.color = "red"
}
function changeColorToBlue(){
    text.style.color = "blue"
}
function chanგeColorToGreen() {
    text.style.color = "green"
}