// alert("Hi");

$(function(){
    var sliders = $(".slider-wrapper");
    
    sliders.each(function() {
        //pour chaque élément contenu dans le tableau sliders 
        var container = $(this).find(".slide-container"); // contient l'enfant .slide-container du slider 
        var slides = $(this).find(".slide"); // contient la liste des éléments .slide qui sont dans le slider
        
        var containerWidth = slides.length * 400;
        
        var isMoving = false; // variable de blocage pour savoir si l'animation est en cours ou non 
        
        container.css("width", containerWidth);
        
        //on ajoute les écouteurs d'évènements pour gérer la navigation
        $(this).find(".btn-prev").on("click", function(e){
            e.preventDefault();
            if(container.position().left < 0 && !isMoving){
            isMoving = true; // l'animation commence
            container.animate({"left":"+=400"}, function(){
                // fonction de callback de la fonction animate
                    isMoving = false; //l'animation est terminée
                });
            }
        });
        $(this).find(".btn-next").on("click", function(e){
            e.preventDefault();
            if(container.position().left > -(slides.length - 1) *400 && !isMoving){
            isMoving = true;
            container.animate({"left":"-=400"}, function(){
                // fonction de callback de la fonction animate
                    isMoving = false;
                });
            }
        });
    });
});