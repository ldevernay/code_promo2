// Ecrivez une fonction (mastermind).
// L'utilisateur va devoir deviner une chaîne de trois lettres générée aléatoirement. Chacune de ces lettres est A, B, C, D ou E.
// L'utilisateur a droit à trois tentatives.

//     ok (l'utilisateur a bien deviné).
//     ko avec le détail pour chaque lettres (Non si la lettre n'est pas dans la chaîne à trouver, presque si elle y est mais pas à l'emplacement indiqué, oui si la lettre indiquée est la bonne).

// Exemple

// L'utilisateur doit deviner la chaîne ABD.

//     Premier essai : EAD renvoie [Non, presque, oui]
//     Deuxième essai : ACD renvoie [oui, non, oui]
//     Troisième essai : AAD renvoie [oui, presque, oui] et "perdu" (trois tentatives effectuées). Si l'utilisateur avait saisi ABD, il aurait eu comme message "gagné!".

let attempt = 0;
let tableau = ["A", "B", "C", "D", "E"];

let random = Math.floor(Math.random()*tableau.length)
	let computerchoice = tableau[random]
	random = Math.floor(Math.random()*tableau.length)
	computerchoice += tableau[random]
	random = Math.floor(Math.random()*tableau.length)
	computerchoice += tableau[random]
	console.log(computerchoice);



function mastermind(){

	let userchoice = prompt("entrez une suite de trois lettres");

	let hint = [];

	if (computerchoice == userchoice){
		alert("you win !!");
	}
	else {
		attempt++

			for (let j=0; j<userchoice.length; j++){
				if (computerchoice.indexOf(userchoice[j]) == -1){
					console.log(computerchoice.indexOf(userchoice));
					hint.push('Non');
					console.log(hint);
				}
				else if (computerchoice[j] == userchoice[j]){
					hint.push('Oui');
					console.log(hint);
				}
				else {
					hint.push("Presque");
					console.log(hint);
				}
			}

	}

	if (attempt === 3)
		alert("you loose, noob")

}

mastermind()
mastermind()
mastermind()