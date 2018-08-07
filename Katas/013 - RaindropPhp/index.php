<?php 

/* première version */


function raindrops($n) {
  $result = "";
  if($n%3 == 0) {
    $result .= 'Pling';
  }
  if($n%5 == 0) {
   $result .= 'Plang';
  }
  if($n%7 == 0) {
    $result .= 'Plong';
  }
  if ($result == "") {
    echo $n;
  }
  else {
    echo $result;
  }
}


raindrops(12);




/* seconde version */


function raindrop($n) {
  $result = "";
  $array = [3 => 'Pling', 5 => 'Plang', 7 => 'Plong'];
  foreach ($array as $key => $value) {
    if($n%$key == 0) {
      $result .= $value;
    }
  }
  if($result == "") {
    echo $n;
  }
  else {
    echo $result;
  }
}


raindrop(8);
