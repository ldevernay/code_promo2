var number = "0684608231";
console.log ("Phone number INPUT : " + number);

number = number.split("");

for (var i = 0; i < number.length - 4 ; i++) {
    number[i] = "#";
}

number = number.join("");

console.log ("Phone number OUTPUT : " + number);