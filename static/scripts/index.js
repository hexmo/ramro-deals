// Height variables
var navHeight;
var footerHeight;
var windowHeight;
var searchHeight;

// listener
window.addEventListener('DOMContentLoaded', (event) => {
    setHeight();
});

// calculate and set height
function setHeight() {
    navHeight = document.getElementById('top-id').offsetHeight;
    footerHeight = document.getElementById('footer1').offsetHeight;
    windowHeight = window.innerHeight;
    searchHeight = windowHeight - navHeight - footerHeight;
    document.getElementById("search").style.height = searchHeight + "px";
}