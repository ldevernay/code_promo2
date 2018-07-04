/*A partir d'un message chiffré, comment deviner le chiffrement et le message d'origine?*/

// Même version que plus bas, mais avec un ternary operator à la place du if else .


/*function caesar (message, offset) {
  let alpha="abcdefghijklmnopqrstuvwxyz".split("");
  let arrMsg = message.toLowerCase().split('');
  return (arrMsg.map(function(x) {
    return !alpha.includes(x) ? x : alpha[(alpha.indexOf(x) + offset)%26]
  })).join("");
} */


function caesar (message, offset) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let arrMsg = message.toLowerCase().split('');
  return (arrMsg.map(function(x) {
    if(!alphabet.includes(x)){
      return x;
    }
    else{
    var index = (alphabet.indexOf(x) + offset)%26;
    return alphabet[index];
    }
  })).join("");
}

caesar("la vie c'est cool", 22);




function brutus(message) {
  for(i=1 ; i<=25 ; i++)
    console.log(caesar(message, i), 26 - i);
}

brutus("gFrgh Fhvdu");
