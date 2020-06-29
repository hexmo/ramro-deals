// listener
window.addEventListener('DOMContentLoaded', (event) => {
    setHeight();
    typeWriter();
    searchButton.disabled = true;
});


// Windows sizing system
var navHeight;
var footerHeight;
var windowHeight;
var searchHeight;

function setHeight() {
    navHeight = document.getElementById('top-id').offsetHeight;
    footerHeight = document.getElementById('footer1').offsetHeight;
    windowHeight = window.innerHeight;
    searchHeight = windowHeight - navHeight - footerHeight;
    document.getElementById("search").style.height = searchHeight + "px";
}

// Typewriter effect
var i = 0;
var txt = 'Search for products. Eg. iPhone 11';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("search-input").placeholder += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Enable and disable search button
var searchBar = document.getElementById("search-input");
var searchButton = document.getElementById("search-button");

searchBar.addEventListener("keyup", function name(params) {
    if (searchBar.value.trim().length > 0) {
        searchButton.disabled = false;
    } else {
        searchButton.disabled = true;
    }
});