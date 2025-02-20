

const button = document.getElementById("change-text-color");
const bodyElement = document.querySelector("body");


const originalColor = "white";

button.addEventListener("click", function () {
   
    if (bodyElement.style.color === "rgb(184, 132, 184)") {
        bodyElement.style.color = originalColor;
    } else {
        bodyElement.style.color = "#b884b8";
    }
});