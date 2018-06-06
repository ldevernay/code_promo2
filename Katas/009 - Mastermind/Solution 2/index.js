/*L'utilisateur doit deviner la chaîne ABD.

    Premier essai : EAD renvoie [Non, presque, oui]
    Deuxième essai : ACD renvoie [oui, non, oui]
    Troisième essai : AAD renvoie [oui, presque, oui] et "perdu" (trois tentatives effectuées). Si l'utilisateur avait saisi ABD, il aurait eu comme message "gagné!". */

var letters = ["A","B","C","D","E"];
var randString = [];

// création aléatoire des 3 lettres
for(i=0;i<3;i++)
  randString.push(letters[Math.floor(Math.random()*5)]);


function mastermind () {
  var result=[]; // on crée le tableau qui contiendra ["oui","non","non"]
  for(j=0;j<3;j++) {
    var essai = prompt("Saisir les 3 lettres");

        for (i=0;i<3;i++) { // on push le bon mot selon le cas
          if(essai[i]==randString[i]) // c'est égal 
            result.push("oui"); 

          else if(randString.includes(essai[i])) // c'est pas au bon endroit
            result.push("presque");

          else result.push("non"); } // c'est pas bon du tout

          if(result.join("")=="ouiouioui"){ 
            alert("Gagné !"); // si ["oui", "oui", "oui"] gagné et fini
            return null; }
          else { // sinon on affiche ["oui" , "non" , "presque"] par exemple
            alert(result);
            result = []; // et on réinitialise ce tableau
        }
}
}


mastermind(); // on appelle la fonction
console.log("C'était "+randString); // on affiche ce qu'il fallait trouver

