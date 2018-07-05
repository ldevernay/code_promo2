/* 
Prendre un caractère tous les deux caractères, pour créer une nouvelle chaîne de caractères à concaténer à ce qui reste de la première.

Exemples de cryptage :

"This is a test!", 1 -> "hsi  etTi sats!"
"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"

Ecrivez deux fonctions :

function crypter(text, n)
function decrypter(encryptedText, n)

 */
/* var text = "entreuntext";
var n = 2;
crypt(text,n); */

function crypt(text, n) {
	var txtcache = text;
	var tab1 = [];
	var tab2 = [];
	for (n; n != 0; n--) {
		var arr = txtcache.split('');
		for (var i = 0; i < arr.length; i++) {
			if (i % 2 != 0) {
				tab1.push(arr[i]);
			} else {
				tab2.push(arr[i]);
			}
		}
		txtcache = tab1.join('') + tab2.join('');
		//console.log(txtcache + ' // ' +n);
		tab1 = [];
		tab2 = [];
	}
	return txtcache;
}
//crypt('This is a test!', 7);

function decrypt(text, n) {
	/* var temp = text.split('');
   var temp2 = temp.filter((elm, i) => i%2 == 0);
   var temp3 = temp.filter((elm, i)=> i%2 == 1);
  console.log(temp2 +" "+ temp3); */
	
	var textCache = text;
	for (n; n > 0; n--) {
    var result = [];
    firstPart = [];
		secondPart = [];
		//console.log(text.length);
		var firstPart = textCache.slice(0, Math.floor(textCache.length / 2));
		var secondPart = textCache.slice(
			Math.floor(textCache.length / 2),
			textCache.length
		);
		//console.log(firstPart);
		//console.log(secondPart);
		for (i = 0; i < secondPart.length; i++) {
			result.push(secondPart[i]);
			result.push(firstPart[i]);
		}
		//console.log(result.join(''));
		textCache = result.join('');
	}
	console.log(textCache);
}
decrypt(' Tah itse sits!', 7);

