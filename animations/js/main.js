// alert("Hi");

$(function(){ // = window.onload = function () {};
    $(".toggle-dropdown").on("click", function(e){
        e.preventDefault();
        
        var btnToggle  = $(this); // on récupère la cible de l'évènement
        var parentBlock = btnToggle.parents(".dropdown-wrapper"); // on récupère le parent de btnToggle qui correspond au sélécteur .dropdown-wrapper
        var contentBlock = parentBlock.find(".dropdown-content"); // on récupère les descandents de parentBlock qui correpondent au sélécteur .dropdown-content
        
        // contentBlock.show(); affiche un élément 
        // contentBlock.hide(); masque un élément (=display:none)
        
        //element.is(".test"); vérifie que l'élément element correspond au selecteur .test
        
        if(contentBlock.is(":visible")){ //vérifie si contentBlock est visible
            contentBlock.slideUp(1000); //on masque l'élément
        } else {
            contentBlock.slideDown(1000); // on affiche l'élement
        }
        
        //contentBlock.toggle(100); va mettre 800 milliseconde pour l'afficher ou l'enlever
        
        //contentBlock.slideDown(400); affiche un élément en augmentant progressivement sa hauteur
        //contentBlock.slideUp(400); masque un élément en diminuant sa hauteur
        
        //contentBlock.slideToggle(400); //ouvre un élement fermé en augmentant sa hauteur ou ferme un élément ouvert en dimunuant sa hauteur
        
        //contentBlock.fadeIn(); //fait apparaître un élément en augmentant progressivement l'opacité
        //contentBlock.fadeOut(); //fait disparaître un élément en diminuant progressivement l'opacité
        // contentBlock.fadeToggle(); 
    }); 
    
    $(".toggle-popin").on("click", function(e){
        e.preventDefault();
        
        $(".shadow").fadeToggle(400);   
    });
});