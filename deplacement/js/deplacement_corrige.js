// alert("hi");

window.onload = function (){
    var myForm = document.getElementById("my-form");
    var leftField = document.getElementById("left");
    var topField = document.getElementById("top");
    var square = document.getElementById("square");
    var timer; 
    
    var moveSquare = function(e){
        e.preventDefault();
        clearInterval(timer); // on supprime l'intervalle s'il existe déjà
        
        var leftValue = parseFloat(leftField.value);
        var topValue = parseFloat(topField.value);
        
        if(!Number.isNaN(leftValue) && !Number.isNaN(topValue)){

            // on définit une fonction qui s'éxécutera à intervalle régulier de 500millisecondes
            timer = setInterval(function(){
                var squarePosY = square.offsetTop; // position verticale actuelle du carre
                var squarePosX = square.offsetLeft; // postition horizontale actuelle du carre
                
                //si la destination est supérieur à l'origine
                if(topValue > squarePosY){
                square.style.top= squarePosY + 1 + "px";
                }  else if (topValue < squarePosY){
                square.style.top = squarePosY - 1 + "px";
                    }
                if(leftValue > squarePosX){
                square.style.left= squarePosX + 1 + "px";
                }  else if (leftValue < squarePosX){
                square.style.left = squarePosX - 1 + "px";
                    }
                
            }, 1);
            
            //square.style.top = topValue + "px";
            //square.style.left = leftValue + "px";
        }
    }
    myForm.addEventListener("submit", moveSquare);
}