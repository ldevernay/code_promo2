<?php
function vowelSquare($strArr){
$vowels=['a','e','i','o','u','y']; 
  for($i=0;$i<count($strArr);$i++){

    for ($j=0;$j<strlen($strArr[$i]);$j++){
      if(in_array($strArr[$i][$j],$vowels)){
        if(in_array($strArr[$i][$j+1],$vowels) && in_array($strArr[$i+1][$j],$vowels) && in_array($strArr[$i+1][$j+1],$vowels)){
          return $i.'-'.$j;
        }
      }     
    }
  }
  return 'not found';
}
echo vowelSquare(['aqrst','ukaei','ffooo']);


?>