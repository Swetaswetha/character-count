const textarea = document.getElementById("message");
const counter = document.getElementById("counter");
const warning = document.getElementById("warning");

const maxChars = 200;

textarea.addEventListener("input", () => {
    let typedChars = textarea.value.length;
    let remainingChars = maxChars - typedChars;

    counter.textContent = `${typedChars}/${maxChars} characters (${remainingChars} remaining)`;

    if (typedChars === maxChars) {
        warning.textContent = "Character limit reached!";
    } else {
        warning.textContent = "";
    }
});