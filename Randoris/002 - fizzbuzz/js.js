var from = 0;
var to = 100;

for (i = from; i <= to; i++) {

    console.log(i);

    if (i != 0) {
        if (Number.isInteger(i / 5) && Number.isInteger(i / 7)) {

            console.log("fizzbuzz");
        } else if (Number.isInteger(i / 5)) {

            console.log("buzz");
        } else if (Number.isInteger(i / 7)) {

            console.log("fizz");
        }
    }
}

/*

La variante de rachid avec l'incrémentation d'une 
variable "message" ou le fizz et le buzz s'ajoute a la suite

*/