// Mudar para o tema Dark
const html = document.querySelector("html");
const chk = document.getElementById("chk");
const ball = document.getElementById("ball");

chk.addEventListener("change", () => {
    html.classList.toggle("dark");
});

// Igor Bernardes digitando sozinho
var el = document.querySelector('#name');
var text = 'Igor Bernardes'
var interval = 200;

function showtext(el, text, interval) {
    var char = text.split('').reverse();

    var typer = setInterval(function() {

        if (!char.length) {
            return clearInterval(typer)
        }

        var next = char.pop();

        el.innerHTML += next;
    }, interval);
}

showtext(el, text, interval);
