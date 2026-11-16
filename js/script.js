const btn_info = document.getElementById("btn_info");
const p_info = document.getElementById("p_info");
const btn_play = document.getElementById("btn_play");
const div_game = document.getElementById("div_game");
const div_error = document.getElementById("div_error");
const history_display = document.getElementById("history_display");
const lifes_display = document.getElementById("lifes_display");
const hint_display = document.getElementById("hint_display");
const btn_send = document.getElementById("btn_send");


const history = [];
let lifes = 7;
let hidden_number;

btn_info.addEventListener("click", () => {
    btn_info.classList.toggle("rotate-90");
    p_info.classList.toggle("hidden");
});


btn_play.addEventListener("click", () => {
    div_game.classList.remove("hidden");
    btn_play.textContent = "Ricomincia"

    lifes = 7;
    lifes_display.textContent = lifes;

    hint_display.textContent = "Inserisci prima un numero!"

    history_display.textContent = "Nessuno";
    history.length = 0;

    hidden_number = Math.floor(Math.random() * 101);
});


btn_send.addEventListener("click", () => {
    const n = document.getElementById("input_number").value;

    if (
        n === "" ||
        Number.isNaN(n) ||
        n < 0 ||
        n > 100
    ) {
        div_error.classList.remove("hidden");
        div_error.textContent = "Input non valido!"
        return;
    }

    if (history.includes(n)) {
        div_error.classList.remove("hidden");
        div_error.textContent = "Hai gia provato questo numero!"
        return
    }

    if (lifes > 0)
        lifes--;
    else 
        return
    lifes_display.textContent = lifes;

    

    div_error.classList.add("hidden");

    history.push(n);
    history_display.textContent = "[" + history.join(", ") + "]";

    if (n === hidden_number) {
        div_error.classList.remove("hidden");
        div_error.textContent = "Hai vinto!"
        hint_display.textContent = "Hai vinto!"
        return
    } else if (n < hidden_number) {
        hint_display.textContent = "Il numero e' piu grande"
    } else {
        hint_display.textContent = "Il numero e' piu piccolo"
    } 

    if (lifes <= 0) {
        div_error.classList.remove("hidden");
        div_error.textContent = "Hai perso!"
        hint_display.textContent = "Il numero era: " + hidden_number;
        return
    }
});
