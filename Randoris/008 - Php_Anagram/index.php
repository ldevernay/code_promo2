<?php 

$consignes = 'Given "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets"';




function wordCompare($word, $anagram){
print_r($countChar=(count_chars($word, 1)));  
  foreach ($anagram as $mot){
    print_r($motCountChar = (count_chars($mot,1)));
    if($countChar === $motCountChar ){
    echo $mot;
  }
  }
}
//print_r (count_chars("listen", 1));
//print_r (count_chars("inlets", 1));

wordCompare("ggleoo", ["enlists","google","inlets","banana"]);




?>