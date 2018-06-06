var input = ""
var stringresult = []
var list = []

function isPrime(n){

	if( Number(n) === 1){
		//console.log(n + " n'est pas un nombre premier");
		return false;
	}
	else if(Number(n) === 2){
		//console.log(n + " est un nombre premier");
		return true;
	}
	else{

		for(var i=2; i<Number(n); i++){
			if(Number(n)%i === 0){
		//		console.log(n + " n'est pas un nombre premier")
				return false;	
			}
			
		};
		//console.log(n + " est un nombre premier")
		return true;
	};
};


function primeList(){
	var input = prompt()

	for (var i= 1; i<= input; i++){
		if (isPrime(i)){
		list.push(i);
		
		}
	}
	//console.log(list)
	var i = 0;

	while(input > 1){
		if (input%list[i] == 0){
			stringresult.push(list[i])
			input = input / list[i]
			console.log(i)
			console.log(stringresult)

		}
		else{
			i++;
		}
	}

	alert(stringresult.join("*"))

};

primeList()


















/*

function expandedFirstForm(){
	var i = 2;
	var numb = prompt();
	numb/i
	if (Number(numb)%i){

	}

	
};


expandedFirstForm()*/