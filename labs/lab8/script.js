
let docu = document.querySelector(".container");
let butt = document.getElementById("toggleButton");

function toggleTheme() {
    docu.classList.toggle("dark-mode");
    document.querySelector("body").classList.toggle("dark-mode");
}

butt.onclick = toggleTheme;