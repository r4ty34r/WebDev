const input = document.getElementById('inputBox');
const button = document.getElementById('btn')
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const bottombutton = document.getElementById('bottombutton');


console.log(input.value);

function myFunction (){ 
      const x = input.value;
      p1.innerHTML = x;
      p2.innerHTML = x;
}


function rmvtxt(){
      const y = '';
      p1.innerHTML = y;
      p2.innerHTML = y;
      input.value = y;
}


function replacetext(){
      x = "Replace the text";
      input.value = x;
}

function pressF(){
    textt = 'Replace the Text';
    bottombutton.value = textt;
   //let x = document.getElementById("inputBox").placeholder = 'replace the text';
}
