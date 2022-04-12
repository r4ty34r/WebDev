var input = document.getElementById('inputBox');
var button = document.getElementById('btn')
var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var bottombutton = document.getElementById('bottombutton');


console.log(input.value);

function myFunction (){ 
      const x = input.value;
      p1.innerHTML = x;
      p2.innerHTML = x;
}


function rmvtxt(){
      const y = '';
      p1.innerHTML = '';
      p2.innerHTML = '';
}


function replacetext(){
      const x = "Type something else";
      input.innerHTML = x;
}