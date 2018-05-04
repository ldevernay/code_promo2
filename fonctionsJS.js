var a = 1;
var b = 0;

function addition(num1, num2) {
	var resultat = num1 + num2;
	return resultat;
}

function division(num1, num2) {
	if (num2 == 0) {
		alert('Division par zéro!');
	} else {
		return num1 / num2;
	}
}

function factorielle(num1){
  var resultat = 1;
  var i = 0;
  /*for (i=1;i<=num1;i++){
    resultat = resultat*i;
    console.log(resultat);
  }*/
  while(i < num1){
    i++;
    resultat = resultat * i;
    console.log(resultat);
  }
  return(resultat);
}

factorielle(3);


