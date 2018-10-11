/* Using the JavaScript language, have the function ClosestEnemyII(strArr) read the matrix of numbers stored in strArr which will be a 2D matrix that contains only the integers 1, 0, or 2. Then from the position in the matrix where a 1 is, return the number of spaces either left, right, down, or up you must move to reach an enemy which is represented by a 2. You are able to wrap around one side of the matrix to the other as well. For example: if strArr is ["0000", "1000", "0002", "0002"] then this looks like the following:

0 0 0 0 1 0 0 0 0 0 0 2 0 0 0 2

For this input your program should return 2 because the closest enemy (2) is 2 spaces away from the 1 by moving left to wrap to the other side and then moving down once. The array will contain any number of 0's and 2's, but only a single 1. It may not contain any 2's at all as well, where in that case your program should return a 0.
Test Cases

Input:"000", "100", "200" Output:1

Input:"0000", "2010", "0000", "2002" Output:2 */
let ar = ["10000","00000","00000","00020","00000"]

function closestEnemy (array)
{
  // on remplace les strings par des arrays
  let ar2 = ar.map(x=>x.split``)
  // variable qui stocke les coordonnées du 1
  let one
  // variable qui stocke les coordonnées des 2
  let twos=[]
  // tableau qui contiendra toutes les distances entre le 1 et les 2
  let result=[]
  
  // longueur d'un ligne
  let len = ar2[0].length
  // longueur d'une colonne
  let len2 = ar2.length

  // on stocke les coordonnées du 1 et des 2
  ar2.map((x,i)=>{
    x.map((y,j)=>{
      if(y==1){one=[i,j]}
      if(y==2){twos.push([i,j])}
    }
      )
})

// s'il n'y a pas de 2 , on renvoie 0 et donc le script est terminé
if(twos[0]==undefined) return 0

// on parcourt le tableau des 2 

  twos.map(x=>{
    // si la valeur absolue de la différence entre l'index de colonne du 1 et l'index de colonne du 2 est plus petite que la moitié de la longueur d'une colonne , on prend cette différence , sinon on prend la différence entre la longueur d'une colonne et la valeur absolue précedente. C'est le cas où on passe par les bords de la "matrice". On stocke ceci dans la variable "res" , qui représente le nombre de mouvements (il manque alors le nombre de mouvement pour aller sur la bonne ligne)
    if(Math.abs(x[0]-one[0])<len2/2)
      res=Math.abs(x[0]-one[0])
    else
      res=len2-Math.abs(x[0]-one[0])
    
    // même chose que précédemment mais pour les lignes. On note le res+= car on ajoute au résultat précédent
    if(Math.abs(x[1]-one[1])<len/2)
      res+=Math.abs(x[1]-one[1])
    else
      res+=len-Math.abs(x[1]-one[1])

    // on push dans le tableau ce nombre de mouvements pour le 2 en cours. Ce tableau contient donc tous les nombres de mouvements pour aller du 1 aux 2
    result.push(res)
  })

   // version avec opérateurs ternaires
  /*twos.map(x=>{
    res = Math.abs(x[0]-one[0])<len2/2
    ?Math.abs(x[0]-one[0])
    :len2-Math.abs(x[0]-one[0])

    res+= Math.abs(x[1]-one[1])<len/2
    ?Math.abs(x[1]-one[1])
    :len-Math.abs(x[1]-one[1])

    result.push(res)

  })*/
console.log(ar2)
console.log(one)
console.log(twos)

// on retourne le minimum du nombre de nouvements (spread operator)
return Math.min(...result)

}

closestEnemy(ar)