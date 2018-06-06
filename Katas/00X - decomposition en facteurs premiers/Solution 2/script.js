expandedFirstForm (75392);

function expandedFirstForm (number) {
  var result = [];
  var nbr = number;
  var i=2;
  while(nbr > 1)
    if(nbr%i==0){
      nbr=nbr/i;
      result.push(i);}
    else i++
  console.log(result.join("*"));
}