
// Kata

// Développez la fonction getMiddle(input_text) :

//     Si input_text contient un nombre impair d'éléments, la fonction renvoie le caractère du milieu.
//     Sinon, elle renvoie les deux caractères du milieu.

// Exemples:

//     getMiddle("test") renvoie "es"
//     getMiddle("testing") renvoie "t"
//     getMiddle("middle") renvoie "dd"
//     getMiddle("A") renvoie "A"

// n'oubliez pas le return dans votre fonction.

var tests = [
    {input:"bangarang", expectedOutput:"a"},
    {input:"test", expectedOutput:"es"},
    {input:"anthony2015", expectedOutput:"n"},
    {input:"millenials sucks", expectedOutput:"al"},
    {input:"2098", expectedOutput:"09"},
    {input:1967, expectedOutput:"96"},
    {input:0.1, expectedOutput:"."},
    {input:"margareth tatcher is " + 100 + "% sexy", expectedOutput:"he"}
  ];
  
  for (var test of tests) {
    
    if (getMiddle(test.input) === test.expectedOutput) {
      console.log("!!! TEST PASSED !!! - You rocks ;)")
      console.log("Input : " + test.input + " // Output : " + getMiddle(test));
    } else {
      console.log("Something is wrong somewhere in the jungle")
    }
  }

  function getMiddle(input) {

    return ;
  }  