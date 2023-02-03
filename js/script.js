const container = document.querySelector(".container");
const thankYou = document.querySelector(".thankYou");
const submit = document.querySelector('#submit');
const rateAgain = document.querySelector('#rate-again');
const btn = document.querySelectorAll(".btn");
let choice = document.getElementById("number-choice");


submit.addEventListener('click', () => {
    container.style.display = "none";
    thankYou.classList.remove("hidden");
});

rateAgain.addEventListener('click', () => {
    container.style.display = "block";
    thankYou.classList.add("hidden");
});

btn.forEach((e) => {
    e.addEventListener("click", () => {
        choice.innerHTML = e.innerHTML;
    });
});