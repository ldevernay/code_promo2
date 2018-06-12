
function expandedForm(num){

	var result = [];
	var str = num.toString();
	console.log(str);
	var index = str.length -1;
	for ( i=0 ; i<str.length ; i++){
		if (str[i] != 0){
			if (str[i] = 1){
			result.push(str[i] + "*" + Math.pow(10, index-i));
			}
		}
		else{
			result.push(Math.pow(10, index-i)).toString();
		}
	}

console.log(result)
}


expandedForm(40637)





/*
    Rédigez une fonction expandedForm qui écrive un nombre sous sa forme développée.

    **Exemple **:

      expandedForm(12); // Should return '10 + 2*1'
      expandedForm(42); // Should return '4*10 + 2*1'
      expandedForm(70304); // Should return '7*10000 + 3*100 + 4*1'   

*/