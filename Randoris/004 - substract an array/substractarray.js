var a =  [1,1,2,2,3];
var b = [2];
var output = [];

console.log("array a : " + a);
console.log("array b : " + b);

process();
output = a;
console.log("output : " + output);

function process () {

    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < b.length; j++) {

            console.log(" i = " + i + " :: j = " + j + " // FINDED DUPLICATES : " + a[i] + " == " + b[j]);
            
            if (a[i] === b[j]) {

                a.splice (i, 1);
            console.log("TUDUUUUM");
            }
        }
    }  
}



///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////


/*Your goal in this kata is to implement an difference function, which subtracts one list from another.

    It should remove all values from list a, which are present in list b.

difference([1,2],[1]) == [2]

    If a value is present in b, all of its occurrences must be removed from the other:

difference([1,2,2,2,3],[2]) == [1,3]*/

var a = ["1,2,1,3,3,3,2,2,2,4,5"];
var b = [1,2, "5", "huit"];

function difference(nb1,nb2) {
  var resultat = [];
  for (i=0;i<nb1.length; i++){
    if (!nb2.includes(nb1[i])){
     resultat.push(nb1[i]);
    }
}
return resultat;
}

console.log(difference(a,b));

