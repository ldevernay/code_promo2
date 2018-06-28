/*Créez une fonction qui chiffre un message.
décale la lettre de trois
En entrée : le message et le chiffrement (entre 1 et 25).
En sortie : le message chiffré.*/

let alpha = "abcdefghijklmnopqrstuvwxyz";

let alphabet = alpha.split("");
let msg = prompt("ici votre message!!!!!");
let arrMsg = msg.split('');
let offset = 4;

function caesar () {
  return (arrMsg.map(function(x) {
    var index = (alphabet.indexOf(x) + offset)%26;
    return alphabet[index];
  })).join("");
  
}

caesar()
//console.log(alphabet);


