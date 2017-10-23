$(document).ready(function() { // équivalent de window.onload = function () {};
    $("body").css("background", "mistyrose");
    
    //séléctionner un élément en jQuary
    var body = $("body");
    var contentBlock = $("#content");
    var articles = $(".text");  //liste d'éléments
    
    var firstArticle = articles.eq(0); //séléctionne l'élément à l'index 0 de la liste articles
    
    var parentBlock = firstArticle.parent(); // récupère le parent direct de l'élément firstArticle (contentBlock)
    
    var childBlocks = contentBlock.children(); // récupère tous les enfants directs de contentBlock
    
    var paragraph = contentBlock.find("p"); // récupère tous les descendants de contentBlock qui correspond au sélécteur p
    
    var pParent = paragraph.parent("#content"); //récupère les parents de paragraph qui correspondent au sélécteur #content
    
    var secondArticle = firstArticle.next(); // séléctionne l'élément suivant
    
    var reFirstArticle = secondArticle.prev(); // séléctionne l'élément précédent 
});