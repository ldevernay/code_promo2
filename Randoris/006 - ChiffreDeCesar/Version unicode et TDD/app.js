function caesar (str,cypher) {
	if(cypher<1 || cypher>25) return ("cypher between 1 and 25 only"); // cypher interval

	var upper = str.toUpperCase().split(''); // array and uppercase

	return(upper.map(function(x){

		if(x.charCodeAt(0)>=65 && (x.charCodeAt(0)<=90)) // only letter
			return String.fromCharCode((x.charCodeAt(0)+cypher-65)%26+65); 
		else return x;
	})).join('');
}

module.exports = caesar ;

/* Version avec Ternary operator à la place des if else

function caesar (str,cypher) {
	return cypher<1 || cypher>25 
	? "cypher between 1 and 25 only" 
	: str.toUpperCase().split('').map(function(x){
		return x.charCodeAt(0)>=65 && x.charCodeAt(0)<=90
		? String.fromCharCode((x.charCodeAt(0)+cypher-65)%26+65) : x
	}).join('');
}

module.exports = caesar ;

*/