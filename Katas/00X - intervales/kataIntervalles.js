var a = [1, 2, 3, 5, 7, 8];
var b = [2, 2, 4];
var c = ['deux', 'trois', 2.3];
var d = [1, 3, 2, 5, 8, 7];

function suite(truc) {
	truc = truc.sort();
	var resultat = [];
	var debut = truc[0];
	var fin = '';
	for (i = 0; i < truc.length; i++) {
		if (!Number.isInteger(truc[i])) {
			console.log('Ne doit contenir que des nombres entiers, boulet!');
		} else if (truc[i + 1] === truc[i] + 1) {
			fin = truc[i + 1];
		} else if (truc[i] == truc[i + 1]) {
			console.log('Doublon!');
		} else {
			if (fin.length == 0) {
				resultat.push(debut);
			} else {
				resultat.push(debut + '-' + fin);
			}
			debut = truc[i + 1];
			fin = '';
		}
	}
	return resultat;
}

console.log(suite(c));

