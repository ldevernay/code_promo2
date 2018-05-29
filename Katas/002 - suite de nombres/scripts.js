class entry {
    constructor(input, intendedOutput) {
        this.input = input;
        this.intendedOutput = intendedOutput;
    }
}

var testsEntries = new Array();
var myAnswers = new Array();

testsEntries[0] = new entry([1,2,4,5,6,7,12],["1-2", "4-7", "12"]);
testsEntries[1] = new entry([1,2,3,4,7,8],["1-3", "4", "7-8"]);


for (var i = 0; i < testsEntries.length; i++) {

    calculate(testsEntries[i]);

    doTest(myAnswers, testsEntries[i].intendedOutput);
}

function doTest(given, intended, i) {
    if (given == intended) {

        console.log (given);
        console.log (intended);
        console.log ("Test : OK");
    } else {

        console.log (given);
        console.log (intended);
        console.log ("Test : NOT OK");
    }
}

function calculate(entry) {

    for (var i=0; i < entry.input.length; i++) {
        
        if (myAnswers.length == 0) {
            myAnswers[0] = "" + entry.input[i];
        }
        
        if (entry.input[i] + 1 != entry.input[i + 1]) {
            myAnswers[myAnswers.length - 1] += "-" + entry.input[i];
            myAnswers[myAnswers.length] = "" + entry.input[i + 1];
        }
    }

    return ;
}