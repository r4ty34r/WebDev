
document.getElementById("btn").onclick = compute;
document.getElementById("newbut").onclick =newcompute;

function compute() {
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var input3 = document.getElementById("num3");
var input4 = document.getElementById("num4");
var answer2 = document.getElementById("answer");
var result = " ";
result= input2.value + input3.value + input4.value;
oddstr = 4;
var finstr = result + oddstr;

answer2.innerHTML = finstr;

result1 = parseInt(input1.value) +parseInt(input2.value) +parseInt(input3.value);
input4.value = result1;

}

function newcompute() {

var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var input3 = document.getElementById("num3");
var input4 = document.getElementById("num4");

result1 = parseInt(input1.value) +parseInt(input2.value) +parseInt(input3.value)+ parseInt(input4.value);

objs=document.getElementById("p1");
objt=document.getElementById("ha");

objs.innerHTML = result1;
objt.innerHTML= result1;
input1.value = objs.innerHTML;



}


