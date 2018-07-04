/*A partir d'un message chiffré, comment deviner le chiffrement et le message d'origine?*/

let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");


function caesar (message, offset) {
  let arrMsg = message.toLowerCase().split('');
  return (arrMsg.map(function(x) {
    if(alphabet.includes(x) == false){
      return x
    }
    
    else{
    var index = (alphabet.indexOf(x) + offset)%26;
    return alphabet[index];
    }
  })).join("");
}

caesar("la vie c'est cool", 22);




function brutus(message) {
  for(i=1 ; i<=25 ; i++){
    console.log(caesar(message, i), 26 - i);
  }
  return;
}

brutus("gFrgh Fhvdu");
