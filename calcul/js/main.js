// commentaire de ligne
/*
commentaire de bloc
 sur plusieurs lignes
*/
// onload on attends que le doc soit entièrement chargé //assignation de fonction .onload on lui donne la valeur fonction

window.onload = function (){
    var myForm = document.getElementById("my-form");

    // on récupère les champs #number-1 et #number-2
    var number1 = document.getElementById("number-1");
    var number2 = document.getElementById("number-2");
    var resultField = document.getElementById("result-field");

    // on déclare la fonction calculate()
    function calculate (value1, value2) {



    // on additionne les deux valeurs
        var result = value1 + value2;

        resultField.value = result;

        console.log(result);
    }
    //on exécute la fonction calculate
    //calculate();
    // ajout d'un écouteur sur l'événement "submit" du formulaire
    myForm.onsubmit = function (){

    };
    //idem
    myForm.addEventListener("submit", function(e){
        //alert("Envoi du formulaire");
        e.preventDefault();  //bloque l'envoi du formulaire vers le serveur

        // on récupère la propriété value(le contenu) des champs
        var value1 = parseFloat(number1.value, 10);
        var value2 = parseFloat(number2.value, 10);

        if(!Number.isNaN(value1) && !Number.isNaN(value2)){
            calculate(value1, value2);
        } else{
            alert("erreur");
        }

        // calculate(value1, value2);
    });
};
