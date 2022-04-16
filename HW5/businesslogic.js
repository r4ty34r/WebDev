let divContent = document.getElementById('main');
let bodyContent = document.getElementById("body");
let inputBox = document.getElementById('searchtext');
let searchButton = document.getElementById('searchbutton');
let spansection = document.getElementById('results');



function search(){
    let x = inputBox.value
    let inputSearch = document.querySelectorAll(x);
    let y = inputSearch.length;
    let z = inputSearch.values;
    spansection.innerHTML = y
    
}

/*
function searchClick() {
    var searchPhrase = document.getElementById("searchtext").value;
    //retrieve second input html  object  that contains the element type that is to be searched on the page
    var elobj = document.getElementById("eltype");

    // retrieve all objects on the document of that category typed into second input box
    var mainParas = document.getElementsByTagName(elobj.value);
    for (var i = 0; i < mainParas.length; i++) {
        if (mainParas[i].innerHTML.indexOf(searchPhrase) >= 0){
            mainParas[i].className = "highlighted";
            m= m + 1;
        }
        // highlight else {
            mainParas[i].className = null;
            // un-highlight
        }
    }


document.getElementById('searchbutton').onclick = searchClick();

function findElements(){
    var elementBody = bodyContent;
    var element = divContent;
    var children = element.getElementsByTagName('*').length;
    spansection.innerHTML = children
    var results = document.createElement('p');
    results.innerHTML = children;
   
}


document.getElementById("searchbutton").onclick = searchClick;
   

// Called when the Search button is clicked.
// Looks for paragraphs matching a search string and highlights them. 

var m =0;


*/