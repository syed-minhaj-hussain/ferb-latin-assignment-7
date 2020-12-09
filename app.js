// Grab The Necessary Elements
var textArea = document.querySelector('#input');
var btn = document.querySelector('.btn');
var box = document.querySelector('.box');

// ferb-latin url
var ferbLatinUrl = "https://api.funtranslations.com/translate/ferb-latin.json";

// function for concatinatig textArea value with ferblatinurl
function concatinateUrl(text) {
    return ferbLatinUrl + "?" + "text=" + text;
}

function translateToFerbLatin() {
    var inputText = textArea.value;

    fetch(concatinateUrl(inputText))
    .then( response => response.json())
    .then( json => {
        box.innerText = json.contents.translated;
    })
    .catch( error => {
        alert(error, " Try Again Afetr Some Time");
        // console.log(error.code)
        
        

    })
}

btn.addEventListener('click', translateToFerbLatin);