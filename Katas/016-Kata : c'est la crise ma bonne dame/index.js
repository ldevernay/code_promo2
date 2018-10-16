// Kata : c'est la crise ma bonne dame

//Convertissez une colonne de montants en dollars en euros.
//Ne gardez que les résultats supérieurs à 50€.

var dollars = [5, 10, 15, 43, 58, 124, 287]
const convert = dollars.map(x => x * 0.86);
console.log(convert)

const sup = convert.filter(x => x > 50);
console.log(sup)
