var input = document.getElementById('inputBox');
var button = document.getElementById('btn')
var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');

var bottombutton = document.getElementById('bottombutton');

function clearTextBox(){
    input.innerHTML= " ";
}

function thing(){
    x = input.textContent;
    p1.innerHTML = x;
    p2.innerHTML = x;
}

button.addEventListener('click', thing);
bottombutton.addEventListener('click',clearTextBox);

