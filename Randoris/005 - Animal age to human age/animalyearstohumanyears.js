/* J'ai un chat et un chien qui s'appellent Kitten et Puppy.

J'ai oublié à quel moment je les ai eus mais je connais leurs âges respectifs 
en année de chat et en année de chien.

Trouver depuis combien de temps je possède Kitten et Putty. A retourner sous forme de liste [ownedCat, ownedDog]

NOTES:
Voir les équivalences utilisées mardi.
Les résultats doivent être arrondis. */



function Cat (age) {
    var result = 1;
    if(age>=15){
      console.log("je passe dans le >=15");
      result=1;
    }
    if(age>=24){
      result=2;
      result+=Math.floor((age-24)/4)
      console.log("je passe dans le >= 24")
      /*while(count<age){
        count+=4;
        result+=1;
      }*/
    }
    
    return result;
  }
  
  
  
  function Dog (age) {
    var result = 1;
    if(age>=15){
      console.log("je passe dans le >=15");
      result=1;
    }
    if(age>=24){
      result=2;
      result+=Math.floor((age-24)/5)
      console.log("je passe dans le >= 24")
      /*while(count<age){
        count+=4;
        result+=1;
      }*/
    }
    
    return result;
  }
  
  console.log (Cat(40), Dog(14));
  
  
  