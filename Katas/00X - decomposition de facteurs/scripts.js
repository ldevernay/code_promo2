var input;
var array = [];
var output = "";

input = prompt("Entrez un nombre entier : ");
console.log("Prompt : " + input);

var loops = 0;

if (Number.isInteger(parseInt(input))) {

    byHowCanInputBeDivided();

////////////////////////////////////////
// FORMATAGE DE LA REPONSE TEXTE :
/////////////////////////////////////
    for (i = 0; i < array.length; i++) {

        if (i != array.length -1){
            output += array[i] + " * ";
        } else {
            output += array [i];                
        }
    }
    console.log("En " + loops + " nombre d'étapes")
    alert("La suite des entiers diviseurs les plus petits premiers" +
    " permettant d'aboutir au nombre \"" + input + "\" est : " + output);     
//////////////////////////////////////////////
//
//////////////////////////////////////:


} else {
// Si l'entrée n'est pas au format attendu
    console.log( input + " n'est pas un type d'entrée admise!");    
}


// Vérifie si l'input est un nombre premier
function isInputPrime () {
    for(var i = 2; i < input; i++) {
        if (input % i == 0) {
//            input = input / i;
            return false;
        } else {
return false;
            //            return true;
        }
    }
}


// Lance notre méthode pour déterminer les plus petits diviseurs premiers
function byHowCanInputBeDivided () {
    var max = input;        

    //On commence par le bas en mettant de coté le chiffre 1 qui retournerait un faux positif
    while (max != i) {
        console.log("for loop()")
        for (var i = 2; i < max; i++) {
        //On stock le i dans le tableau et on remplace number par son reste de la division
            if (Number.isInteger(max / i)) {
                                             
                max = max / i;
                array.push(i);
               
                i = max;
            }
            loops +=1 ;
            
        }
    }

    array.push(i);
    console.log("array before return : " + array);    
    return array;
}