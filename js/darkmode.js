const modeBtn = document.querySelector("#header__dark-mode");
const body = document.querySelector("body");
const modeForm = localStorage.getItem("mode") ? localStorage.getItem("mode") : null;

if (modeForm) {
    body.classList.add("dark-mode");
}

modeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    modeForm ? localStorage.setItem("mode", "") : localStorage.setItem("mode", "dark");
})

