// vérifie si une année est bissextile (définition wikipédia)
function isBissex (year) {
  return ((year%4==0 && year%100!=0) || year%400==0) }

// retourne la première année bissextile qui succède à l'input
function supBissex(year) {
    while(!isBissex(year))
      year++;
    return year 
}

// retourne la première année bissextile qui précéde l'input
function subBissex(year) {
    while(!isBissex(year))
      year--;
    return year 
}

// pour gérer le cas 2002 par exemple : 2000 ou 2004 ? 
// on vérifie le positionnement du jour dans l'année pour choisir
function checkMoment(sub,sup,day) {
  if (day > (365/2)) 
    return sup // 6 derniers mois de l'année
  else
    return sub // 6 premiers mois de l'année
}

// gestion des cas , selon les valeurs de l'année bissextile supérieure et de l'inférieure
exports.nearBissex = function (y,day){
  if(isBissex(y)) 
  return y // si l'input est déjà bissextile, on le return

  else if (supBissex(y)-y==y-subBissex(y)) // si l'écart est le même 
      return (checkMoment(subBissex(y),supBissex(y),day)) //  on gère avec la fonction checkMoment

  else if(supBissex(y)-y>y-subBissex(y)) // si l'écart avec l'année biss. sup est plus grand
      return(subBissex(y)) // que l'écart avec l'année biss. sub , on return biss.sub
  else 
      return(supBissex(y)) // sinon on return biss.sup
}