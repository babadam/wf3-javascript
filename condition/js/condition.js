// alert("Hi !");

window.onload = function (){ //toute la feuille js se met dedans ce qui permet que le script s'éxécute au bon moment
    // 1. on récupère l'élement par son ID en créant une variable
    var myField = document.getElementById("field");

    //2. on récupère le formulaire
    var myForm = document.getElementById("my-form");

    //3. on ajoute l'écouteur d'évènement sur l'envoi du formulaire
    myForm.addEventListener("submit", function(e){
        //4. on bloque le comportement par défaut de l'évenement
        e.preventDefault();

        //5. on teste la valeur du champs myField
        if(myField.value == "bonjour"){
            //si la valeur est "bonjour"
            alert("Bienvenue");
        } else if(parseFloat(myField.value) == myField.value){
            // si la valeur est un nombre
            alert("Chiffre");
        } else{
            alert("Erreur");
        }
    });






};
