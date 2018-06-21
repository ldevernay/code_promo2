// version avec les booléens qui remplacent les if
function toHuman (age,div) {return((age>=0 && age<=15)*age/15+(age>15 && age<=24)*((age-15)/9+1)+(age>24)*((age-24)/div+2))}

// version avec les if
function toHuman (age,div) {
  if (age >= 0 && age <= 15)
    return age/15;
  else if (age > 15 && age <= 24)
    return (age-15)/9+1;
  else return(age-24)/div+2;
}

// fonction finale à utiliser dans les 2 cas
function myPets (catAge,dogAge) {return [Math.round(toHuman(catAge,4)),Math.round(toHuman(dogAge,5))]}


// La fonction toHuman convertit l'âge d'un animal , en âge humain , avec une disjonction des cas.

// La fonction myPets met le résultat pour un chat (div=4) et le résultat pour un chien (div=5) dans un tableau, le tout arrondi.