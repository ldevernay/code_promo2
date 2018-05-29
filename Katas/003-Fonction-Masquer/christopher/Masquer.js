/*var tel = "grtstrets"
var result = ""
for(var i=0; i < tel.length; i++){
  console.log(i)
  if(i<tel.length-4){
  result= result + "#"
  console.log(result)
}
  else{
    result = result + tel[i]
    
    console.log(result)
  }

}
*/

function masquer(){
  var text =prompt("Text pls:");
  return "#".repeat(text.length - 4) + text.substring(text.length-4, text.length);
}

masquer();