const html = document.querySelector("html");
const chk = document.getElementById("chk");
const ball = document.getElementById("ball");


function toggleDarkMode(){
    html.classList.toggle("dark");
}

// Save Theme
function loadTheme() {
    const darkMode = localStorage.getItem("dark");

    if(darkMode){
        toggleDarkMode();
    }
}

loadTheme();


// Add or Remove Dark Mode
chk.addEventListener("change", () => {
    toggleDarkMode();

    localStorage.removeItem("dark");

    if(html.classList.contains("dark")){
        localStorage.setItem("dark", 1);
        
    }

})