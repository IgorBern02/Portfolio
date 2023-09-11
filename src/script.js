const html = document.querySelector("html");
const chk = document.getElementById("chk");
const ball = document.getElementById("ball");

chk.addEventListener("change", () => {
    html.classList.toggle("dark");

});