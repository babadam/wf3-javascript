// alert("Hi");

window.onload = function () {
    var nav = document.getElementById("main-nav");
    var btn = document.getElementById("toggle-nav");
    
    var toggleNav = function(e){
        e.preventDefault(); //supprime l'evenement par défaut
        nav.classList.toggle("opened");
    };
    
    // on ajoute un écouteur d'évènement sur l'évènement click du bouton
    btn.addEventListener("click", toggleNav);
    // on supprime l'écouteur d'événement
    //btn.removeEventListener("click", toggleNav);
}
