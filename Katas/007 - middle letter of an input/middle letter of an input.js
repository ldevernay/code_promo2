

function getMiddle(s) {
    
    var stringS = String(s);
    
    var answer;
    if (stringS.length % 2 == 0) {
        
        var a = stringS.length / 2 - 1;
        var b = stringS.length / 2;
        answer = stringS[a] + stringS[b];
    } else {

        var a = Math.floor(stringS.length / 2);
        answer = stringS[a];
    }
    
    return answer;
}

var input = "UnMot";
console.log("middle letter is : " + getMiddle(input));