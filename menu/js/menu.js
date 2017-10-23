// alert("Hi");

window.onload = function (){
    // récupérer une liste d'élements par leur nom de balise
    var links = document.getElementsByTagName("a");
    
    // change la couleur du 3ème élément du tableau links
    links[2].style.color = "tomato";
    
    // récupérer une liste d'élements par leur nom de classe
    var activeLinks = document.getElementsByClassName("active-link");
    
    // remet la couleur à 0
    activeLinks[0].style.color = "";
    
    //ajoute une class au premier lien
    //links[0].className="test"; / remplace la classe existante par celle-ci
    links[0].className += " test"; //ajoute une class en js sans supp celle déjà créée
    
    //on ajoute une classe au second lien 
    links[1].classList.add("test");
    
    var lastLink = links[links.length - 1];
    // on vérifie que lastLink a la classe active-link : doit renvoyer true car elle a bien la class
    console.log(lastLink.classList.contains("active-link"));
    // supprime une classe au dernier lien /'links.lenght - 1' séléctionne le dernier lien
    links[links.length - 1].classList.remove("active-link");
    
    // on revérifie que lastLink a la classe active-link : doit renvoyer false car on a supp la classe
    console.log(lastLink.classList.contains("active-link"));
    
    //ajoute une classe si elle n'est pas présente, ou la supprime si elle est présente
    links[2].classList.toggle("test");
    links[3].classList.toggle("test");
    
    // selectionne le 1er élément qui correspond au selecteur css 
    var elem = document.querySelector(".active-link");
    
    //selectionne tous les éléments qui corresppond au selecteur
    var elems = document.querySelectorAll(".active-link");
    
    // crée un nouvel élément a
    var newLink = document.createElement("a");
    newLink.href = "#";
    newLink.textContent = "Nouveau lien";
    
    //1.-- insérer l'élément dans le body  
    document.body.appendChild(newLink); //appendChild met à la de body après tout les éléments
    
    //2.-- insérer un élément avant l'élément nav
    var nav = document.getElementById("main-nav");
    document.body.insertBefore(newLink, nav);
    
    //récupérer l'élément directement après
    console.log(newLink.nextSibling);
    
}