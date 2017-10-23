// alert("Hi");

$(function(){
    var nav = $("#main-nav");
    var btn = $("#toggle-nav");
    
    btn.on("click", function(e){
        e.preventDefault();
        
        nav.toggleClass("opened");
    });
    
    //btn.off("click"); //supprime l'événement du click
});

// $("selecteur"); //équivalent de document.querySelectorAll("selecteur")