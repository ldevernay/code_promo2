function pet (Hy) {console.log([Hy,15+9*(Hy>=2)+4*(Hy-2)*(Hy>=2),15+9*(Hy>=2)+5*(Hy-2)*(Hy>=2)])}

/* 

Hy>=2 est un booléen, donc qui vaut true or false.

Mais en javascript , true = 1 et false = 0 , on peut donc les utiliser dans des calculs.
Ainsi , le booléen remplace un if dans ce calcul.

On multiplie par false (0) , si Hy est inférieur à 2.
On multiplie par true (1) , si Hy est supérieur ou égal à 2.

Donc si Hy = 1 , le calcul de l'âge du chat devient :

15 + 9*0 + 4*0*(1-2) = 15

Si Hy = 2 , le calcul devient

15 + 9*1 + 4*1*(2-2) = 24

Si Hy =5 , le calcul devient

15 + 9*1  + 4*1*(5-2) = 36



Pareil pour le chien , mais en remplaçant 4 par 5.

*/