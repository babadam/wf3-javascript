// alert("Hi!");

function toggleBackgroundColor (color) {
    document.body.style.backgroundColor = color;
    document.body.style.color = "#fff";
    var newParagraph = document.createElement("p");
    newParagraph.innerHTML = "<strong> Du texte </strong>";
    document.body.appendChild(newParagraph);
}
window.onload = function () {
    var blueButton = document.getElementById("btn-blue");

    blueButton.addEventListener("click", function (){
        toggleBackgroundColor("cadetblue");
    });
}
